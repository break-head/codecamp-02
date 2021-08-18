import MarketReCommentListUIItem from "./MarketReCommentList.presenterItem";
// import { IBoardCommentListUIProps } from "./BoardCommentList.types";

export default function MarketReCommentListUI(props: IBoardCommentListUIProps) {
  // console.log(props.questionId);
  return (
    <>
      {props.data?.fetchUseditemQuestionAnswers.map((data) => (
        <MarketReCommentListUIItem
          key={data._id}
          data={data}
          questionId={props.questionId}
        />
      ))}
    </>
  );
}
