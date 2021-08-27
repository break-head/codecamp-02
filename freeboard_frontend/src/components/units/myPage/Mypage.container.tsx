import { useQuery } from "@apollo/client";
// import { useRouter } from "next/router";
import { useState } from "react";
import MypageUI from "./Mypage.presenter";
import {
  FETCH_USED_ITEMS_ISOLD,
  FETCH_USED_ITEMS_IPICKED,
  FETCH_POINT_TRANSACTIONS,
  FETCH_POINT_TRANSACTIONS_OF_LOADING,
  FETCH_POINT_TRANSACTIONS_OF_BUYING,
  FETCH_POINT_TRANSACTIONS_OF_SELLING,
} from "./Mypage.query";

export default function Mypage(props) {
  const { data: isoldData } = useQuery(FETCH_USED_ITEMS_ISOLD);
  const { data: iPickedData } = useQuery(FETCH_USED_ITEMS_IPICKED);
  const { data: totalData } = useQuery(FETCH_POINT_TRANSACTIONS);
  const { data: loadingData } = useQuery(FETCH_POINT_TRANSACTIONS_OF_LOADING);
  const { data: buyingData } = useQuery(FETCH_POINT_TRANSACTIONS_OF_BUYING);
  const { data: sellingData } = useQuery(FETCH_POINT_TRANSACTIONS_OF_SELLING);
  const [data, setData] = useState(isoldData?.fetchUseditemsISold);
  const [index, setIndex] = useState(0);
  const rowTitle = [
    [{ 1: "번호" }, { 2: "제목" }, { 3: "" }, { 4: "판매가격" }, { 5: "날짜" }],
    [
      { 1: "번호" },
      { 2: "제목" },
      { 3: "" },
      { 4: "판매가격" },
      { 5: "판매자" },
      { 6: "날짜" },
    ],
    [{ 1: "날짜" }, { 2: "내용" }, { 3: "거래 및 충전 내역" }, { 4: "잔액 " }],
    [
      { 1: "충전내역" },
      { 2: "결제ID" },
      { 3: "충전내역" },
      { 4: "충전 후 잔액" },
    ],
    [
      { 1: "거래일" },
      { 2: "제목" },
      { 3: "거래내역" },
      { 4: "거래 후 잔액" },
      { 5: "판매자" },
    ],
    [{ 1: "거래일" }, { 2: "제목" }, { 3: "거래내역" }, { 4: "거래 후 잔액" }],
  ];

  const onClickMymarket = () => {
    setIndex(0);
    setData(isoldData.fetchUseditemsISold);
  };

  const onClickMyPicked = () => {
    setIndex(1);
    setData(iPickedData.fetchUseditemsIPicked);
  };
  const onClickTotalTransaction = () => {
    setIndex(2);
    setData(totalData.fetchPointTransactions);
  };
  const onClickLoadingTransaction = () => {
    setIndex(3);
    setData(loadingData.fetchPointTransactionsOfLoading);
  };
  const onClickBuyingTransaction = () => {
    setIndex(4);
    setData(buyingData.fetchPointTransactionsOfBuying);
  };

  const onClickSellingTransaction = () => {
    setIndex(5);
    setData(sellingData.fetchPointTransactionsOfSelling);
  };

  console.log(buyingData?.fetchPointTransactionsOfBuying);
  return (
    <MypageUI
      isMypage={props.isMypage}
      isMypoint={props.isMypoint}
      rowTitle={rowTitle}
      data={data}
      index={index}
      onClickMymarket={onClickMymarket}
      onClickMyPicked={onClickMyPicked}
      onClickTotalTransaction={onClickTotalTransaction}
      onClickLoadingTransaction={onClickLoadingTransaction}
      onClickBuyingTransaction={onClickBuyingTransaction}
      onClickSellingTransaction={onClickSellingTransaction}
    />
  );
}
