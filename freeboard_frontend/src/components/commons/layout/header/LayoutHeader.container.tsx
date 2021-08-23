import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import LayoutHeaderUI from "./LayoutHeader.present";
import { LOGOUT_USER } from "./LayoutHeader.query";
export default function LayoutHeader() {
  const router = useRouter();
  const [logoutUser] = useMutation(LOGOUT_USER);
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);
  function onClickLogin() {
    router.push("/market/login");
  }

  function onClickRegister() {
    router.push("/market/register");
  }

  function onClickBoards() {
    router.push("/boards");
  }
  function onClickPayment(bool: boolean | ((prevState: boolean) => boolean)) {
    setIsOpen(bool);
  }
  async function onClickLogout() {
    try {
      await logoutUser();

      alert("로그아웃이 되었습니다.");

      localStorage.removeItem("refreshToken");
      localStorage.removeItem("userInfo");
      setAccessToken("");
      setUserInfo("");
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <LayoutHeaderUI
      onClickLogin={onClickLogin}
      onClickRegister={onClickRegister}
      onClickBoards={onClickBoards}
      onClickLogout={onClickLogout}
      onClickPayment={onClickPayment}
      isOpen={isOpen}
    />
  );
}
