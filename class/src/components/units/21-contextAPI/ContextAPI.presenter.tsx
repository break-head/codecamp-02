import { useContext } from "react";
import { AAAContext } from "../../../../pages/21-contextAPI";

export default function ContextAPIUI() {
  const { isEdit } = useContext(AAAContext);
  return <div>{isEdit ? "수정하기" : "등록하기"}</div>;
}
