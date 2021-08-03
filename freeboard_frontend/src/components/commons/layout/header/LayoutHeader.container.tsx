import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.present";

export default function LayoutHeader() {
  const router = useRouter();

  function onClickLogin() {
    router.push("/market/login");
  }

  function onClickRegister() {
    router.push("/market/register");
  }

  function onClickBoards() {
    router.push("/boards");
  }
  return (
    <LayoutHeaderUI
      onClickLogin={onClickLogin}
      onClickRegister={onClickRegister}
      onClickBoards={onClickBoards}
    />
  );
}
