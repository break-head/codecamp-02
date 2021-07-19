import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD_COMMENT } from "./CommentWrite.queries";
import CommentWriteUi from "./CommentWrite.styles";
import { useState } from "react";

export const INPUTS_INIT = {
  writer: "",
  password: "",
  contents: "",
  rating: 5,
};

export default function CommentWrite(props) {
  const router = useRouter();
  const [inputs, setInputs] = useState(INPUTS_INIT);
  const [inputsErrors, setInputsErrors] = useState(INPUTS_INIT);
  const [active, setActive] = useState(false);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  function onChangeInputs(event) {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);
    setActive(Object.values(inputs).every((data) => data));
    setInputsErrors({ ...inputsErrors, [event.target.name]: "" });
  }

  async function onClickSubmit() {
    setInputsErrors({
      writer: inputs.writer ? "" : "작성자를 입력해주세요.",
      password: inputs.password ? "" : "비밀번호를 입력해주세요",
      contents: inputs.contents ? "" : "내용을 입력해주세요.",
    });
    if (Object.values(inputs).every((data) => data)) {
      try {
        await createBoardComment({
          variables: {
            createBoardCommentInput: { ...inputs },
            boardId: router.query.boardId,
          },
        });
        alert("댓글이 성공적으로 등록되었습니다");
      } catch (error) {
        alert(error.message);
      }
    }
  }

  return (
    <CommentWriteUi
      active={active}
      inputsErrors={inputsErrors}
      onChangeInputs={onChangeInputs}
      onClickSubmit={onClickSubmit}
    />
  );
}
