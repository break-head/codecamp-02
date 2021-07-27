import { useRouter } from "next/dist/client/router";
import LayoutNavigationUI from "./LayoutNavigation.present";

export default function LayoutNavigation(props: any) {
  const router = useRouter();
  function onClickMove() {
    router.push("/boards/openApi");
  }
  return <LayoutNavigationUI onClickMove={onClickMove} />;
}
