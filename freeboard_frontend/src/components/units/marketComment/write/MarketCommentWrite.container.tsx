import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import MarketCommentWriteUI from "./MarketCommentWrite.presenter";
import {
  CREATE_USEDITEM_QUESTION,
  // UPDATE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from "./MarketCommentWrite.queries";
// import { IBoardCommentWriteProps } from "./BoardCommentWrite.types";

export default function MarketCommentWrite(props: IBoardCommentWriteProps) {
  const COMMENT_INPUT = {
    contents: "",
  };
  const router = useRouter();
  const [inputs, setInputs] = useState(COMMENT_INPUT);
  const [createMarketComment] = useMutation(CREATE_USEDITEM_QUESTION);
  const { data } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: router.query.marketId },
  });

  function onChangeInput(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
    console.log(inputs.contents);
  }

  async function onClickWrite() {
    try {
      await createMarketComment({
        variables: {
          createUseditemQuestionInput: { ...inputs },
          useditemId: router.query.marketId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.marketId },
          },
        ],
      });
      setInputs(COMMENT_INPUT);
      // props.setIsEdit?.(false);
    } catch (error) {
      alert(error.message);
    }
    // props.setIsEdit?.(false);
  }

  return (
    <MarketCommentWriteUI
      inputs={inputs}
      onChangeInput={onChangeInput}
      onClickWrite={onClickWrite}
      isEdit={props.isEdit}
      data={data}
    />
  );
}
