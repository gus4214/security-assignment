import { useMemo } from "react";

/**
 * useListFilter 훅
 * @param data - 필터링할 데이터 배열
 * @param filterKey - 검색 대상 필드
 * @param searchTerm - 검색어
 * @returns 검색 조건에 맞는 데이터 배열
 */
export function useListFilter<T>(
  data: T[],
  filterKey: keyof T,
  searchTerm: string
): T[] {
  return useMemo(() => {
    if (!searchTerm.trim()) return data;
    const lowerSearchTerm = searchTerm.toLowerCase();
    return data.filter((item) => {
      const fieldValue = item[filterKey];
      return (
        typeof fieldValue === "string" &&
        fieldValue.toLowerCase().includes(lowerSearchTerm)
      );
    });
  }, [data, filterKey, searchTerm]);
}
