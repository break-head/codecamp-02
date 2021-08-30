import { useQuery } from "@apollo/client";
import Mypage from "../../../src/components/units/myPage/Mypage.container";
import { FETCH_POINT_TRANSACTIONS_OF_BUYING } from "../../../src/components/units/myPage/Mypage.query";

export default function BuyingListPage() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS_OF_BUYING);
  const rowTitle = [
    { 1: "거래일" },
    { 2: "제목" },
    { 3: "거래내역" },
    { 4: "거래 후 잔액" },
    { 5: "판매자" },
  ];
  console.log(data, "aaa");
  const isMypoint = true;
  return (
    <Mypage
      data={data?.fetchPointTransactionsOfBuying}
      rowTitle={rowTitle}
      isMypoint={isMypoint}
    />
  );
}
