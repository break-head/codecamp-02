export default function BoardDetailUi(props) {
  return (
    <>
  
    {/* <div>{data && data.fetchBoard.writer}님</div>
    <div>{data && data.fetchBoard.title}</div>
    <div>{data && data.fetchBoard.contents}</div> 
    =====두개 같음===== 실무에서는 아래것을 실무에서 자주 사용
    사진이 없다면 오류가 나기때문에 없을때도 값을 넣어주는 것. */}

      <div>{props.qqq?.fetchBoard.writer}님</div>
      <div>{props.qqq?.fetchBoard.title}</div>
      <div>{props.qqq?.fetchBoard.contents}</div>
      <button onClick={props.onClickEdit}>수정하기</button>
      {/* <div>상세보기 {router.query.boardId} 화면입니다.</div>; */}
    </>
  );
}
