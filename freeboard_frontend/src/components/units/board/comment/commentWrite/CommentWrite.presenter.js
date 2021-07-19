<InputWrapper>
  <Title>댓글</Title>
  <WriterWrapper>
    <Writer type="text" placeholder="작성자" onChange={props.onChangeInputs} />
    <Password
      type="password"
      placeholder="비밀번호를 입력해주세요"
      onChange={props.onChangeInputs}
    />
  </WriterWrapper>
  <WriteWrapper>
    <Contents
      name="contents"
      placeholder="개인정보를 공유 및 요청하거나,명예 훼손, 무단 광고,불법 정보 유포시 모니터링 후 삭제될 수 있으며,이에 대한 민형사상 책임은 게시자에게 있습니다."
      onChange={props.onChangeInputs}
    />
  </WriteWrapper>
</InputWrapper>;
