import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT
} from "./CommentList.queries";
import { useState } from "react";
import CommentListUi from "./CommentList.styles";
import { INPUTS_INIT } from "../commentWrite/CommentWrite.container"

export default function CommnetListPage(props) {
  const router = useRouter();
  const [inputs, setInputs] = useState(INPUTS_INIT);
  const [inputsErrors, setInputsErrors] = useState(INPUTS_INIT);
  const [active, setActive] = useState(false);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      page: page,
      boardId: router.query.boardId,
    },
  });

  function onChangeInputs(event) {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);
    setActive(Object.values(inputs).every((data) => data));
    setInputsErrors({ ...inputsErrors, [event.target.name]: "" });
  }

  async function onClickDelete() {
    try {
      await deleteBoardComment({
        variables: {
            password: inputs.password         
            boardCommentId: 
             },
      });
      alert("삭제가 완료되었습니다");
      router.push("/boards");
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickUpdate(){
    setInputsErrors({
      writer: inputs.writer ? "" : "작성자를 입력해주세요.",
      password: inputs.password ? "" : "비밀번호를 입력해주세요.",
      contents: inputs.contents ? "" : "내용을 입력해주세요."
    })
    if(Object.values(inputs).every(data => data)){
      try {
        const result = await updateBoardComment({
          variables: { 
            boardCommentId: ,
            password: inputs.password,
            updateBoardCommentInput: { 
              contents: inputs.contents
            }
          }
        })
        alert('게시물이 성공적으로 수정되었습니다.')
        router.push("/boards")
      } catch(error){
        alert(error.message)
      }
    }
  }

  return (
    <CommentListUi
      
      active={active}
      inputsErrors={inputsErrors}
      onChangeInputs={onChangeInputs}
      onClickUpdate={onClickUpdate}
      onClickSubmit={onClickSubmit}
      onClickDelete={onClickDelete}
      data={data}
    />
  );
}
