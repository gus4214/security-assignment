"use client";

import {
  USER_FILTER_OPTIONS,
  USER_ROLES_CHECKBOX_OPTIONS,
} from "@/config/filters";
import userList from "@/data/user-list.json";
import { useAuth } from "@/hooks/use-auth";
import { useListFilter } from "@/hooks/use-list-filter";
import { FilterForm, UserFilter, UserRolesCheckForm } from "@/types/filter";
import { User, UserRole } from "@/types/user";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import UserListTable from "./user-list-table"; // 사용자 테이블 컴포넌트
import UsersFilter from "./users-filter"; // 검색/필터 폼 컴포넌트

const Users = () => {
  const { user: currentUser } = useAuth();

  // 1. RBAC에 따른 역할 필터링:
  const roleFilteredUsers = useMemo(() => {
    if (!currentUser) return [];
    switch (currentUser.userRole) {
      case "Admin":
      case "PrimeUser":
        return userList;
      case "RegularUser":
        return userList.filter(
          (user) => user.userEmail === currentUser.userEmail
        );
      case "Viewer":
        return [];
      default:
        return [];
    }
  }, [currentUser]);

  // 2. 검색 필터를 위한 폼
  const userFilterForm = useForm<FilterForm>({
    defaultValues: {
      filter: USER_FILTER_OPTIONS[0].value as UserFilter,
      search: "",
    },
  });

  const filterKey = userFilterForm.watch("filter");
  const searchValue = userFilterForm.watch("search");

  // 3. 검색어에 따른 필터링
  const searchFilteredUsers = useListFilter<User>(
    roleFilteredUsers,
    filterKey as UserFilter,
    searchValue
  );

  // 4. 체크박스 옵션(역할 필터) 계산
  //    RBAC에 따른 사용자 목록(roleFilteredUsers)을 기반으로, 현재 존재하는 역할만 옵션으로 사용
  const filteredOptions = useMemo(() => {
    const availableRoles = new Set(
      roleFilteredUsers.map((user) => user.userRole)
    );
    return USER_ROLES_CHECKBOX_OPTIONS.filter(
      (option) => option.value === "All" || availableRoles.has(option.value)
    );
  }, [roleFilteredUsers]);

  // 5. 기본 선택 값은 filteredOptions에서 "All"을 제외한 값들
  const defaultRoles = useMemo(() => {
    return filteredOptions
      .filter((option) => option.value !== "All")
      .map((option) => option.value);
  }, [filteredOptions]);

  // 6. 체크박스 필터를 위한 폼
  const userRolesCheckForm = useForm<UserRolesCheckForm>({
    defaultValues: {
      userRoles: defaultRoles as UserRole[],
    },
  });

  const selectedRoles = userRolesCheckForm.watch("userRoles");

  // 7. 최종 필터링: 검색 필터(searchFilteredUsers)에서 체크박스 필터(selectedRoles)를 적용
  const finalFilteredUsers = useMemo(() => {
    if (!selectedRoles || selectedRoles.length === 0) return [];
    return searchFilteredUsers.filter((user) =>
      selectedRoles.includes(user.userRole as UserRole)
    );
  }, [searchFilteredUsers, selectedRoles]);

  return (
    <div className="flex flex-col space-y-16">
      <UsersFilter
        userFilterForm={userFilterForm}
        userRolesCheckForm={userRolesCheckForm}
        filteredUserRolesOptions={filteredOptions}
        selectedCount={finalFilteredUsers.length}
      />
      <UserListTable userList={finalFilteredUsers} />
    </div>
  );
};

export default Users;
