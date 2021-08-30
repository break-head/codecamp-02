import { useQuery } from "@apollo/client";
import Mypage from "../../../src/components/units/myPage/Mypage.container";
import { FETCH_POINT_TRANSACTIONS } from "../../../src/components/units/myPage/Mypage.query";

export default function TotalListingPage() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS);
  const rowTitle = [
    { 1: "날짜" },
    { 2: "내용" },
    { 3: "거래 및 충전 내역" },
    { 4: "잔액" },
  ];
  const isMypoint = true;
  return (
    <Mypage
      isMypoint={isMypoint}
      data={data?.fetchPointTransactions}
      rowTitle={rowTitle}
    />
  );
}
