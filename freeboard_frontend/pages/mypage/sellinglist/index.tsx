import { useQuery } from "@apollo/client";
import Mypage from "../../../src/components/units/myPage/Mypage.container";
import { FETCH_POINT_TRANSACTIONS_OF_SELLING } from "../../../src/components/units/myPage/Mypage.query";

export default function SellingListPage() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS_OF_SELLING);
  const rowTitle = [
    { 1: "거래일" },
    { 2: "제목" },
    { 3: "거래내역" },
    { 4: "거래 후 잔액" },
  ];

  const isMypoint = true;
  return (
    <Mypage
      data={data?.fetchPointTransactionsOfSelling}
      rowTitle={rowTitle}
      isMypoint={isMypoint}
    />
  );
}
