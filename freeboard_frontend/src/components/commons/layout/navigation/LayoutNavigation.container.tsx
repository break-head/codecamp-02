import { useRouter } from "next/dist/client/router";
import LayoutNavigationUI from "./LayoutNavigation.present";

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
  return (
    <LayoutNavigationUI
      onClickMove={onClickMove}
      onClickMoveBoards={onClickMoveBoards}
      onClickMoveMarket={onClickMoveMarket}
    />
  );
}
