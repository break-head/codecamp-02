import {
  BottomWrapper,
  Button,
  Contents,
  ContentsLength,
  ContentsWrapper,
  Wrapper,
} from "./MarketReCommentWrite.styles";

export default function MarketReCommentWriteUI(props) {
  return (
    <Wrapper>
      <ContentsWrapper>
        <Contents
          name="contents"
          value={props.inputs?.contents}
          onChange={props.onChangeInput}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <BottomWrapper>
          <ContentsLength>0/100</ContentsLength>
          <Button
            // id={props.data?.id}
            onClick={props.reEdit ? props.onClickUpdate : props.onClickWrite}
            // onClick={props.onClickWrite}
          >
            {props.isEdit ? "수정하기" : "답글등록"}
            {/* {"답글등록"} */}
          </Button>
        </BottomWrapper>
      </ContentsWrapper>
    </Wrapper>
  );
}
