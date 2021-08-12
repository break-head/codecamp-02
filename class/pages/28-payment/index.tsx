import { useState } from "react";
import Head from "next/head";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPoinTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
    }
  }
`;
export default function PaymentPage() {
  const [amount, setAmount] = useState(0);
  const [createPointTransactionOfLoading, setCreatePointTransactionOfLoading] =
    useMutation(CREATE_POINT_TRANSACTION_OF_LOADING);
  const router = useRouter();
  function onChangeAmount(event) {
    setAmount(event.target.value);
  }

  function onClickPayment() {
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000013",
        name: "노르웨이",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "/28-payment-success",
      },
      async (rsp) => {
        console.log(rsp);
        if (rsp.success) {
          await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          // 결제 성공 시 로직,
          alert("결제에 성공하셨습니다.");
          router.push("/28-payment-success");
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패하셨습니다.");
        }
      }
    );
  }
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"
        ></script>
      </Head>
      결제금액: <input type="text" onChange={onChangeAmount} />
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
