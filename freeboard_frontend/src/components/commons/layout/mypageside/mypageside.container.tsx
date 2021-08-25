import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import MyPageSideUI from "./mypageside.presenter";

export default function MyPageSide() {
  const { userInfo } = useContext(GlobalContext);
  return <MyPageSideUI userInfo={userInfo} />;
}
