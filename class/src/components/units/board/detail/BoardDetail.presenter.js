export default function BoardDetailUI(props) {
  return (
    <>
      <div>작성자 {props.qqq?.fetchBoard.writer}님</div>
      <div>글제목: {props.qqq?.fetchBoard.title}</div>
      <div>글내용: {props.qqq?.fetchBoard.contents}</div>
      <button onClick={props.onClickEdit}>수정하기</button>
      {/* <div>상세보기 {router.query.boardId}번 화면입니다</div> */}
    </>
  );
}
