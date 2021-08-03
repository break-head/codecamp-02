import { useRouter } from "next/dist/client/router";
import LayoutNavigationUI from "./LayoutNavigation.present";

export default function LayoutNavigation(props: any) {
  const router = useRouter();
  function onClickMove() {
    // console.log(router);
    router.push("/openApi");
    // router.reload();
    // window.location.href = "/boards/openApi";
  }
  function onClickMoveBoards() {
    router.push("/bords/new");
  }
  return (
    <LayoutNavigationUI
      onClickMove={onClickMove}
      onClickMoveBoards={onClickMoveBoards}
    />
  );
}
