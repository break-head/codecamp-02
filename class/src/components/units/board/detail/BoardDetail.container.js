import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  // const { data: dataBoardComments } = useQuery(
  //     FETCH_BOARD_COMMENTS,
  //     { variables: { boardId: router.query.boardId } }
  // )

  // aaaaa.data.fetchBoardComments

  function onClickEdit() {
    router.push(`/detail/${router.query.boardId}/edit`);
  }

  return <BoardDetailUI qqq={data} onClickEdit={onClickEdit} />;
}
