import { useQuery } from "@apollo/client";
import Mypage from "../../../src/components/units/myPage/Mypage.container";
import { FETCH_USED_ITEMS_ISOLD } from "../../../src/components/units/myPage/Mypage.query";

export default function MymarketPage() {
  const { data } = useQuery(FETCH_USED_ITEMS_ISOLD);
  const rowTitle = [
    { 1: "번호" },
    { 2: "제목" },
    { 3: "" },
    { 4: "판매가격" },
    { 5: "날짜" },
  ];
  const isMypage = true;
  return (
    <Mypage
      data={data?.fetchUseditemsISold}
      rowTitle={rowTitle}
      isMypage={isMypage}
    />
  );
}
