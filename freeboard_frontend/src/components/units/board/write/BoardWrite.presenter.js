import {
  Wrapper,
  Wrapperbody,
  HeadTitle,
  Title,
  LoginTitle,
  Account,
  Name,
  Password,
  LoginInput,
  NameInput,
  PasswordInput,
  A,
  SubTitle,
  Subject,
  SubjectInput,
  Content,
  ContentTitle,
  ContentInput,
  Address,
  AddressTitle,
  AddressSearch,
  AddressButton,
  AddressNumber,
  AddressMain,
  AddressSub,
  YouTubeWrapper,
  YouTubeTitle,
  YouTube,
  Photo,
  PhotoTitle,
  PhotoUpload,
  Register,
  RegisterButton,
  OptionWrapper,
  Label,
  RadioButton,
  RadioLabel,
} from "./BoardWrite.styles";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function BoardPageUi(props) {
  return (
    <Wrapper>
      {props.isOpen && (
        <Modal
          title="주소검색"
          visible={true}
          onOk={() => props.onClickAddressSearch(false)}
          onCancel={() => props.onClickAddressSearch(false)}
        >
          <DaumPostcode onComplete={props.onCompleteAddressSearch} autoClose />
        </Modal>
      )}
      <Wrapperbody>
        <HeadTitle>
          <Title>{props.isEdit ? "게시판 수정" : "게시물 등록"}</Title>
        </HeadTitle>

        {/* ------------------- */}

        <Account>
          <LoginTitle>
            <Name>작성자</Name>
            <NameInput
              name="writer"
              type="text"
              onChange={props.onChangeInputs}
              placeholder="이름을 적어주세요"
            />
            <A>{props.inputsErrors.writer}</A>
          </LoginTitle>
          <LoginInput>
            <Password>비밀번호</Password>
            <PasswordInput
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
          <SubjectInput
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
          <ContentInput
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
            <AddressNumber value={props.zipcode} placeholder="07250" readOnly />
            <AddressButton onClick={() => props.onClickAddressSearch(true)}>
              우편주소 검색
            </AddressButton>
          </AddressSearch>
          <AddressMain value={props.address} readOnly />
          <AddressSub
            onChange={props.onChangeAddressDetail}
            readOnly={props.address === ""}
          />
        </Address>

        {/* ------------------- */}

        <YouTubeWrapper>
          <YouTubeTitle>유튜브</YouTubeTitle>
          <YouTube
            name="youtubeUrl"
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeInputs}
          />
        </YouTubeWrapper>

        {/* ------------------- */}
        <OptionWrapper>
          <Label>메인설정</Label>
          <RadioButton type="radio" id="youtube" name="radio-button" />
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <RadioButton type="radio" id="image" name="radio-button" />
          <RadioLabel htmlFor="image">사진</RadioLabel>
        </OptionWrapper>

        {/* ------------------- */}
        <Photo>
          <PhotoTitle> 사진 첨부</PhotoTitle>
          <PhotoUpload onClick={props.onClickGreyBox}>
            <div>+</div>
            <div>Upload</div>
          </PhotoUpload>
          <PhotoUpload onClick={props.onClickGreyBox}>
            <div>+</div>
            <div>Upload</div>
          </PhotoUpload>
          <PhotoUpload onClick={props.onClickGreyBox}>
            <div>+</div>
            <div>Upload</div>
          </PhotoUpload>
          <input
            ref={props.fileRef}
            type="file"
            onChange={props.onChangeFile}
            /* multiple */ style={{ display: "none" }}
          />
        </Photo>

        {/* ------------------- */}

        <Register>
          <RegisterButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            active={props.active}
          >
            {" "}
            {props.isEdit ? "수정하기" : "등록하기"}
          </RegisterButton>
        </Register>
      </Wrapperbody>
    </Wrapper>
  );
}
