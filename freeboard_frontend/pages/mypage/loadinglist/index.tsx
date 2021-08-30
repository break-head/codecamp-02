import { useQuery } from "@apollo/client";
import Mypage from "../../../src/components/units/myPage/Mypage.container";
import { FETCH_POINT_TRANSACTIONS_OF_LOADING } from "../../../src/components/units/myPage/Mypage.query";

export default function LoadingListPage() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS_OF_LOADING);
  const rowTitle = [
    { 1: "충전내역" },
    { 2: "결제ID" },
    { 3: "충전내역" },
    { 4: "충전 후 잔액" },
  ];
  const isMypoint = true;
  return (
    <Mypage
      isMypoint={isMypoint}
      data={data?.fetchPointTransactionsOfLoading}
      rowTitle={rowTitle}
    />
  );
}
