import {
  BottomWrapper,
  Button,
  Contents,
  ContentsLength,
  ContentsWrapper,
  PencilIcon,
  Wrapper,
} from "./MarketCommentWrite.styles";

export default function MarketCommentWriteUI(props) {
  return (
    <Wrapper>
      {/* {!props.isEdit && ( */}
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <PencilIcon src="/images/boardComment/write/pencil.png" />
        <span style={{ marginLeft: "20px" }}>댓글</span>
      </div>
      {/* )} */}
      <ContentsWrapper>
        <Contents
          name="contents"
          value={props.inputs.contents || props.data?.contents}
          onChange={props.onChangeInput}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <BottomWrapper>
          <ContentsLength>0/100</ContentsLength>
          <Button
            id={props.data?._id}
            // onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
            onClick={props.onClickWrite}
            // {props.isEdit ? "수정하기" : "등록하기"}
          >
            등록하기
          </Button>
        </BottomWrapper>
      </ContentsWrapper>
    </Wrapper>
  );
}
