import { useMutation, useQuery } from "@apollo/client";
// import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import MarketReCommentWriteUI from "./MarketReCommentWrite.presenter";
import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from "./MarketReCommentWrite.queries";
// import { IBoardCommentWriteProps } from "./BoardCommentWrite.types";

export default function MarketReCommentWrite(props: IBoardCommentWriteProps) {
  const COMMENT_INPUT = {
    contents: "",
  };
  // const router = useRouter();
  const [inputs, setInputs] = useState(COMMENT_INPUT);
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USEDITEM_QUESTION_ANSWER
  );
  const { data } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.data._id },
  });

  function onChangeInput(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
    console.log(inputs.contents);
  }

  async function onClickWrite() {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: { ...inputs },
          useditemQuestionId: props.data._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.data._id },
          },
        ],
      });
      setInputs(COMMENT_INPUT);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <MarketReCommentWriteUI
      inputs={inputs}
      onChangeInput={onChangeInput}
      onClickWrite={onClickWrite}
      reEdit={props.reEdit}
      data={data}
    />
  );
}
