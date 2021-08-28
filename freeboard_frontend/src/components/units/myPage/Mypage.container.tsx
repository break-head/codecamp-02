// import { useQuery } from "@apollo/client";// import { useRouter } from "next/router";
import { useRouter } from "next/router";
import MypageUI from "./Mypage.presenter";
// import {
// FETCH_USED_ITEMS_ISOLD,
// FETCH_USED_ITEMS_IPICKED,
// FETCH_POINT_TRANSACTIONS,
// FETCH_POINT_TRANSACTIONS_OF_LOADING,
// FETCH_POINT_TRANSACTIONS_OF_BUYING,
// FETCH_POINT_TRANSACTIONS_OF_SELLING,
// } from "./Mypage.query";

export default function Mypage(props) {
  const router = useRouter();
  // const [data, setData] = useState("");
  // const { data: isoldData } = useQuery(FETCH_USED_ITEMS_ISOLD);
  // const { data } = useQuery(FETCH_USED_ITEMS_IPICKED);

  // const { data: totalData } = useQuery(FETCH_POINT_TRANSACTIONS);
  // const { data: loadingData } = useQuery(FETCH_POINT_TRANSACTIONS_OF_LOADING);
  // const { data: buyingData } = useQuery(FETCH_POINT_TRANSACTIONS_OF_BUYING);
  // const { data: sellingData } = useQuery(FETCH_POINT_TRANSACTIONS_OF_SELLING);

  // const [index, setIndex] = useState(0);

  // const rowTitle =
  // [{ 1: "번호" }, { 2: "제목" }, { 3: "" }, { 4: "판매가격" }, { 5: "날짜" }],
  // [
  //   { 1: "번호" },
  //   { 2: "제목" },
  //   { 3: "" },
  //   { 4: "판매가격" },
  //   { 5: "판매자" },
  //   { 6: "날짜" },
  // ],
  //   [{ 1: "날짜" }, { 2: "내용" }, { 3: "거래 및 충전 내역" }, { 4: "잔액 " }],
  //   [
  //     { 1: "충전내역" },
  //     { 2: "결제ID" },
  //     { 3: "충전내역" },
  //     { 4: "충전 후 잔액" },
  //   ],
  //   [
  //     { 1: "거래일" },
  //     { 2: "제목" },
  //     { 3: "거래내역" },
  //     { 4: "거래 후 잔액" },
  //     { 5: "판매자" },
  //   ],
  //   [{ 1: "거래일" }, { 2: "제목" }, { 3: "거래내역" }, { 4: "거래 후 잔액" }],
  // ];

  const onClickMovePage = (data: any) => () => {
    router.push(`/mypage/${data}`);
  };

  return (
    <MypageUI
      isMypage={props.isMypage}
      rowTitle={props.rowTitle}
      data={props.data}
      onClickMovePage={onClickMovePage}

      // onClickTotalTransaction={onClickTotalTransaction}
      // onClickLoadingTransaction={onClickLoadingTransaction}
      // onClickBuyingTransaction={onClickBuyingTransaction}
      // onClickSellingTransaction={onClickSellingTransaction}
    />
  );
}
