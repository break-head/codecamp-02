import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUi from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";

export default function DetailPage() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  function onClickMove() {
    router.push("/boards");
  }
  async function onClickDelete() {
    try {
      await deleteBoard({
        variables: { boardId: router.query.boardId },
      });
      alert("삭제가 완료되었습니다");
      router.push("/boards");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <BoardDetailUi
      data={data}
      onClickDelete={onClickDelete}
      onClickMove={onClickMove}
    />
  );
}
