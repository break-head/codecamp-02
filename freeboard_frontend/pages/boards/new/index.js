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
  PhotoButton,
  PhotoTitle,
  PhotoUpload,
  Setting,
  SettingTitle,
  SettingCheckBox,
  Register,
  RegisterButton,
} from "../../../styles/boards/new/BoardPage";

export default function BoardPage() {
  return (
    <Wrapper>
      <Wrapper_body>
        <HeadTitle>
          <Title>게시물 등록</Title>
        </HeadTitle>
        <Account>
          <LoginTitle>
            <Name>작성자</Name>
            <Nameinput type="text" placeholder="   이름을 적어주세요." />
          </LoginTitle>
          <LoginInput>
            <Password>비밀번호</Password>
            <Passwordinput
              type="text"
              placeholder="   비밀번호를 입력해주세요."
            />
          </LoginInput>
        </Account>
        <SubTitle>
          <Subject>제목</Subject>
          <Subjectinput type="text" placeholder="   제목을 작성해주세요." />
        </SubTitle>
        <Content>
          <ContentTitle>내용</ContentTitle>
          <Contentinput placeholder="내용을 작성해주세요." />
        </Content>
        <Address>
          <AddressTitle>주소</AddressTitle>
          <AddressSearch>
            <AddressNumber type="text" placeholder="07250" />
            <AddressButton>우편주소 검색</AddressButton>
          </AddressSearch>
          <AddressMain type="text" />
          <AddressSub type="text" />
        </Address>
        <YouTube>
          <YouTubeTitle>유튜브</YouTubeTitle>
          <YouTubeLink type="text" placeholder="   링크를 복사해주세요." />
        </YouTube>
        <Photo>
          <PhotoTitle>사진 첨부</PhotoTitle>
          <PhotoButton>
            <PhotoUpload type="file" />
            <PhotoUpload type="file" />
            <PhotoUpload type="file" />
          </PhotoButton>
        </Photo>
        <Setting>
          <SettingTitle>메인 설정</SettingTitle>
          <SettingCheckBox type="radio" name="aaa" /> 유튜브
          <SettingCheckBox type="radio" name="aaa" /> 사진
        </Setting>
        <Register>
          <RegisterButton>등록하기</RegisterButton>
        </Register>
      </Wrapper_body>
    </Wrapper>
  );
}
