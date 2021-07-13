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
          <Title>게시물 등록</Title>
        </HeadTitle>

        {/* ------------------- */}

        <Account>
          <LoginTitle>
            <Name>작성자</Name>
            <Nameinput
              type="text"
              onChange={props.a}
              active={props.h}
              placeholder="아이디"
            />
            <A>{props.f}</A>
          </LoginTitle>
          <LoginInput>
            <Password>비밀번호</Password>
            <Passwordinput
              type="password"
              onChange={props.b}
              placeholder="비밀번호"
              active={props.h}
            />
            <A>{props.g}</A>
          </LoginInput>
        </Account>

        {/* ------------------- */}

        <SubTitle>
          <Subject>제목</Subject>
          <Subjectinput
            type="text"
            onChange={props.c}
            active={props.h}
            placeholder="제목을 작성해주세요."
          />
        </SubTitle>

        {/* ------------------- */}

        <Content>
          <ContentTitle>내용</ContentTitle>
          <Contentinput
            type="text"
            onChange={props.d}
            active={props.h}
            placeholder="내용을 작성해주세요."
          />
        </Content>

        {/* ------------------- */}

        <Address>
          <AddressTitle>주소</AddressTitle>
          <AddressSearch>
            <AddressNumber type="text" placeholder="07250" />
            <AddressButton>우편주소 검색</AddressButton>
          </AddressSearch>
          <AddressMain type="text" />
          <AddressSub type="text" />
        </Address>

        {/* ------------------- */}

        <YouTube>
          <YouTubeTitle>유튜브</YouTubeTitle>
          <YouTubeLink type="text" placeholder="   링크를 복사해주세요." />
        </YouTube>

        {/* ------------------- */}

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
          <RegisterButton
            onClick={props.e}
            active={props.h}
            // disabled={!props.h}
          >
            등록하기
          </RegisterButton>
        </Register>
      </Wrapper_body>
    </Wrapper>
  );
}
