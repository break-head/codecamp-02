import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import MarketCommentWriteUI from "../write/MarketCommentWrite.presenter";
import {
  FETCH_USEDITEM_QUESTIONS,
  DELETE_USEDITEM_QUESTION,
} from "./MarketCommentList.queries";
import { UPDATE_USEDITEM_QUESTION } from "../write/MarketCommentWrite.queries";
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
  RecommentIcon,
} from "./MarketCommentList.styles";
import MarketReCommentWrite from "../reWrite/MarketReCommentWrite.container";
import MarketReCommentList from "../reList/MarketReCommentList.container";

export default function MarketCommentListUIItem(props: any) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [openRecomment, setOpenRecomment] = useState(false);
  const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION);
  const [updateMarketComment] = useMutation(UPDATE_USEDITEM_QUESTION);

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
    setIsEdit((prev) => !prev);
  }

  function onClickMoveRecomment() {
    setOpenRecomment((prev) => !prev);
  }

  async function onClickUpdate() {
    if (!inputs.contents) {
      alert("내용을 모두 입력해 주세요.");
      return;
    }
    try {
      await updateMarketComment({
        variables: {
          updateUseditemQuestionInput: { contents: inputs.contents },
          useditemQuestionId: props.data?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.marketId },
          },
        ],
      });
      alert("수정하였습니다");
    } catch (error) {
      alert(error.message);
    }
    setInputs(COMMENT_INPUT);
    setIsEdit(false);
  }

  async function onClickDelete() {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.data?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.marketId },
          },
        ],
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  return (
    <>
      {!isEdit && (
        <ItemWrapper>
          <FlexWrapper>
            <Avatar src="/avatar.png" />
            <NameWrapper>
              <Name>{props.data.user.name}</Name>
              <DateString>{getDate(props.data.createdAt)}</DateString>
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
              <RecommentIcon src="/Vector.jpg" onClick={onClickMoveRecomment} />
            </OptionWrapper>
          </FlexWrapper>
        </ItemWrapper>
      )}
      {isEdit && (
        <MarketCommentWriteUI
          onChangeInput={onChangeInput}
          onClickUpdate={onClickUpdate}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          data={props.data}
        />
      )}
      {openRecomment && (
        <>
          <MarketReCommentWrite
            data={props.data}
            setOpenRecomment={setOpenRecomment}
          />
        </>
      )}
      <MarketReCommentList data={props.data} />
    </>
  );
}
