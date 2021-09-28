import MarketReCommentListUIItem from "./MarketReCommentList.presenterItem";
// import { IBoardCommentListUIProps } from "./BoardCommentList.types";

export default function MarketReCommentListUI(props: any) {
  return (
    <>
      {props.data?.fetchUseditemQuestionAnswers.map((data: any) => (
        <MarketReCommentListUIItem
          key={data._id}
          data={data}
          questionId={props.questionId}
        />
      ))}
    </>
  );
}
