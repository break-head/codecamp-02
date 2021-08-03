import DetailPage from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";
export default function NewDetailPage() {
  return (
    <>
      <DetailPage />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
