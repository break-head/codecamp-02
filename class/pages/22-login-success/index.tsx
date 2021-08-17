import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../_app";
import { gql, useMutation, useQuery } from "@apollo/client";
import { IQuery } from "../../src/commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
    }
  }
`;

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LoginSuccessPage() {
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const [logout] = useMutation(LOGOUT_USER);

  useEffect(() => {
    if (!localStorage.getItem("refreshToken")) {
      alert("로그인 해주세요!");
      router.push("/22-login");
    }
  }, []);

  return (
    <>
      <div>{data?.fetchUserLoggedIn?.name}님 환영합니다</div>
      <button
        onClick={() => {
          logout();
          router.push("/22-login");
        }}
      >
        로그아웃
      </button>
    </>
  );
}
