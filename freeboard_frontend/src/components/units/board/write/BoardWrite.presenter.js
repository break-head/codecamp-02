import {
  Wrapper,
  Wrapper_body,
  HeadTitle,
  Title,
  LoginTitle,
  Account,
  Name,
  Password,
  LoginInput,
  Nameinput,
  Passwordinput,
  A,
  SubTitle,
  Subject,
  Subjectinput,
  Content,
  ContentTitle,
  Contentinput,
  Address,
  AddressTitle,
  AddressSearch,
  AddressButton,
  AddressNumber,
  AddressMain,
  AddressSub,
  YouTube,
  YouTubeTitle,
  YouTubeLink,
  Photo,
  PhotoTitle,
  PhotoUpload,
  Setting,
  SettingTitle,
  SettingCheckBox,
  Register,
  RegisterButton,
} from "./BoardWrite.styles";

export default function BoardPageUi(props) {
  return (
    <Wrapper>
      <Wrapper_body>
        <HeadTitle>
          <Title>{props.isEdit ? "게시판 수정" : "게시물 등록"}</Title>
        </HeadTitle>

        {/* ------------------- */}

        <Account>
          <LoginTitle>
            <Name>작성자</Name>
            <Nameinput
              name="writer"
              type="text"
              onChange={props.onChangeInputs}
              placeholder="이름을 적어주세요"
            />
            <A>{props.inputsErrors.writer}</A>
          </LoginTitle>
          <LoginInput>
            <Password>비밀번호</Password>
            <Passwordinput
              name="password"
              type="password"
              onChange={props.onChangeInputs}
              placeholder="비밀번호를 입력해주세요"
            />
            <A>{props.inputsErrors.password}</A>
          </LoginInput>
        </Account>

        {/* ------------------- */}

        <SubTitle>
          <Subject>제목</Subject>
          <Subjectinput
            type="text"
            name="title"
            onChange={props.onChangeInputs}
            placeholder="제목을 작성해주세요."
          />
          <A>{props.inputsErrors.title}</A>
        </SubTitle>

        {/* ------------------- */}

        <Content>
          <ContentTitle>내용</ContentTitle>
          <Contentinput
            name="contents"
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeInputs}
          />
          <A>{props.inputsErrors.contents}</A>
        </Content>

        {/* ------------------- */}

        <Address>
          <AddressTitle>주소</AddressTitle>
          <AddressSearch>
            <AddressNumber name="zipcode" placeholder="07250" />
            <AddressButton>우편주소 검색</AddressButton>
          </AddressSearch>
          <AddressMain  />
          <AddressSub />
        </Address>

        {/* ------------------- */}

        <YouTube>
          <YouTubeTitle>유튜브</YouTubeTitle>
          <YouTubeLink name="youtube" placeholder="   링크를 복사해주세요." />
        </YouTube>

        {/* ------------------- */}

        

        <Setting>
          <SettingTitle>메인 설정</SettingTitle>
          <SettingCheckBox type="radio" name="aaa" /> 유튜브
          <SettingCheckBox type="radio" name="aaa" /> 사진
        </Setting>

        {/* ------------------- */}
        <Photo>
          <PhotoTitle> 사진 첨부</PhotoTitle>
          <PhotoUpload>
            <div>+</div>
            <div>Upload</div>
          </PhotoUpload>
          <PhotoUpload>
            <div>+</div>
            <div>Upload</div>
          </PhotoUpload>
          <PhotoUpload>
            <div>+</div>
            <div>Upload</div>
          </PhotoUpload>
        </Photo>

        {/* ------------------- */}

        <Register>
          <RegisterButton onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit} active={props.active}>  {props.isEdit ?"수정하기":"등록하기"}
          </RegisterButton>
        </Register>
      </Wrapper_body>
    </Wrapper>
  );
}
