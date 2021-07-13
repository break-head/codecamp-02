import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUi from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";

export default function DetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });
  return <BoardDetailUi qqq={data} />;
}
