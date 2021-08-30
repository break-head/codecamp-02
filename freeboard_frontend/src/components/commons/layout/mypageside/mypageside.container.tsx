import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import MyPageSideUI from "./mypageside.presenter";

export default function MyPageSide() {
  const { userInfo } = useContext(GlobalContext);
  const router = useRouter();

  const onClickMoveMymarket = () => {
    router.push("/mypage/myproduct");
  };
  const onClickMoveMypoint = () => {
    router.push("/mypage/totallist");
  };
  return (
    <MyPageSideUI
      userInfo={userInfo}
      onClickMoveMymarket={onClickMoveMymarket}
      onClickMoveMypoint={onClickMoveMypoint}
    />
  );
}
