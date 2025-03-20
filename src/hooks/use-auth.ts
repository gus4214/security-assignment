import userList from "@/data/user-list.json";
import { userAtom } from "@/store/auth";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const [user, setUser] = useAtom(userAtom);

  const router = useRouter();

  const login = (email: string) => {
    const foundUser = userList.find((u) => u.userEmail === email);
    if (foundUser) {
      setUser(foundUser);
      router.push("/");
    } else {
      alert("이메일이 없습니다.");
    }
  };

  return { login, user };
};
