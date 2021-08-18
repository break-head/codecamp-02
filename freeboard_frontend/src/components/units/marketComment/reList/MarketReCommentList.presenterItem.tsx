import { useMutation } from "@apollo/client";
import { Modal } from "antd";
// import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import { DELETE_USEDITEM_QUESTION_ANSWER } from "./MarketReCommentList.queries";
import {
  UPDATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from "../reWrite/MarketReCommentWrite.queries";
import {
  Avatar,
  NameWrapper,
  Name,
  Contents,
  DateString,
  DeleteIcon,
  FlexWrapper,
  ItemWrapper,
  MainWrapper,
  OptionWrapper,
  UpdateIcon,
} from "./MarketReCommentList.styles";
import MarketReCommentWriteUI from "../reWrite/MarketReCommentWrite.presenter";
export default function MarketReCommentListUIItem(
  props: IBoardCommentListUIItemProps
) {
  // const router = useRouter();
  const [reEdit, setreEdit] = useState(false);
  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USEDITEM_QUESTION_ANSWER
  );
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USEDITEM_QUESTION_ANSWER
  );

  const COMMENT_INPUT = {
    contents: "",
  };
  const [inputs, setInputs] = useState(COMMENT_INPUT);

  function onChangeInput(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
    // console.log(inputs.contents);
  }
  function onClickMoveEdit() {
    setreEdit(true);
  }

  async function onClickUpdate() {
    if (!inputs.contents) {
      alert("내용을 모두 입력해 주세요.");
      return;
    }
    // setIsEdit(true);
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: { contents: inputs.contents },
          useditemQuestionAnswerId: props.data?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.questionId },
          },
        ],
      });
      alert("수정하였습니다");
    } catch (error) {
      alert(error.message);
    }
    setInputs(COMMENT_INPUT);
    setreEdit(false);
  }

  async function onClickDelete() {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: props.data?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.questionId },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  return (
    <>
      {!reEdit && (
        <ItemWrapper>
          <FlexWrapper>
            <Avatar src="/avatar.png" />
            <NameWrapper>
              <Name>{props.data.user.name}</Name>
            </NameWrapper>
            <MainWrapper>
              <Contents>{props.data.contents}</Contents>
            </MainWrapper>
            <OptionWrapper>
              <UpdateIcon
                src="/boardComment/list/option_update_icon.png/"
                onClick={onClickMoveEdit}
              />
              <DeleteIcon
                src="/boardComment/list/option_delete_icon.png/"
                onClick={onClickDelete}
              />
            </OptionWrapper>
          </FlexWrapper>
          <DateString>{getDate(props.data.createdAt)}</DateString>
        </ItemWrapper>
      )}
      {reEdit && (
        <MarketReCommentWriteUI
          onChangeInput={onChangeInput}
          onClickUpdate={onClickUpdate}
          reEdit={reEdit}
          setIsEdit={setreEdit}
          data={props.questionId}
        />
      )}
    </>
  );
}
