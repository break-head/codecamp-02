import { useRouter } from "next/router";
import LayoutNavigationUI from "./LayoutNavigation.presenter";

export default function LayoutNavigation(props: any) {
  const router = useRouter();
  function onClickMove() {
    router.push("/openApi");
  }
  function onClickMoveBoards() {
    router.push("/boards");
  }
  function onClickMoveMarket() {
    router.push("/market");
  }
  function onClickMoveMypage() {
    router.push("/mypage/mypick");
  }
  return (
    <LayoutNavigationUI
      onClickMove={onClickMove}
      onClickMoveBoards={onClickMoveBoards}
      onClickMoveMarket={onClickMoveMarket}
      onClickMoveMypage={onClickMoveMypage}
    />
  );
}
