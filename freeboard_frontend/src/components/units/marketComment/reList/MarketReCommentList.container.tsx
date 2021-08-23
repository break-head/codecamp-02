import { useQuery } from "@apollo/client";
// import { useRouter } from "next/router";
import MarketReCommentListUI from "./MarketReCommentList.presenter";
import { FETCH_USEDITEM_QUESTION_ANSWERS } from "../reWrite/MarketReCommentWrite.queries";

export default function MarketReCommentList(props: any) {
  // const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.data?._id },
  });
  console.log(data);
  return <MarketReCommentListUI data={data} questionId={props.data?._id} />;
}
