import MarketCommentListUIItem from "./MarketCommentList.presenterItem";
// import { IBoardCommentListUIProps } from "./BoardCommentList.types";

export default function MarketCommentListUI(props: any) {
  return (
    <>
      {props.data?.fetchUseditemQuestions.map((data: any) => (
        <MarketCommentListUIItem key={data._id} data={data} />
      ))}
    </>
  );
}
