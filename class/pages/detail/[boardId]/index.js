import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function DetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  console.log(data);

  return (
    <>
      {/* <div>{data && data.fetchBoard.writer}님</div>
          <div>{data && data.fetchBoard.title}</div>
          <div>{data && data.fetchBoard.contents}</div> */}
      {/* =====두개 같음===== 실무에서는 아래것을 실무에서 자주 사용
      사진이 없다면 오류가 나기때문에 없을때도 값을 넣어주는 것. */}
      <div>{data?.fetchBoard.writer}님</div>
      <div>{data?.fetchBoard.title}</div>
      <div>{data?.fetchBoard.contents}</div>
      {/* <div>상세보기 {router.query.boardId} 화면입니다.</div>; */}
    </>
  );
}
