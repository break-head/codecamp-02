import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardCommentWrite.queries";
import { IBoardCommentWriteProps } from "./BoardCommentWrite.types";

export const INPUTS_INIT = {
  writer: "",
  contents: "",
  password: "",
  rating: 0,
};

export default function BoardCommentWrite(props: IBoardCommentWriteProps) {
  const router = useRouter();
  const [inputs, setInputs] = useState(INPUTS_INIT);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  function onChangeInput(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  }

  function onChangeStar(value: number) {
    setInputs({ ...inputs, rating: value });
  }

  async function onClickWrite() {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: { ...inputs },
          boardId: router.query.boardId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setInputs(INPUTS_INIT);
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickUpdate(event: MouseEvent<HTMLButtonElement>) {
    if (!inputs.contents || !inputs.password) {
      alert("내용을 모두 입력해 주세요.");
      return;
    }

    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: { contents: inputs.contents },
          password: inputs.password,
          boardCommentId: (event.target as Element).id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setInputs(INPUTS_INIT);
      props.setIsEdit?.(false);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <BoardCommentWriteUI
      inputs={inputs}
      onChangeInput={onChangeInput}
      onChangeStar={onChangeStar}
      onClickWrite={onClickWrite}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
