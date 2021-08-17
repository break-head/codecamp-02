import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketCommentListUI from "./MarketCommentList.presenter";
import { FETCH_USEDITEM_QUESTIONS } from "./MarketCommentList.queries";

export default function MarketCommentList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: router.query.marketId },
  });

  return <MarketCommentListUI data={data} />;
}
