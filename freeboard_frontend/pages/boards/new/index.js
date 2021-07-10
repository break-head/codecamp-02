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
} from "../../../styles/boards/new/BoardPage";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
export default function BoardPage() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [idError, setIdError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPassworderror] = useState("");
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  function aaa(event) {
    setId(event.target.value);
  }

  function bbb(event) {
    setPassword(event.target.value);
  }

  function ttt(event) {
    setTitle(event.target.value);
  }

  function cont(event) {
    setContents(event.target.value);
  }

  // function onClickSubmit() {

  // }

  const [createBoard] = useMutation(CREATE_BOARD);

  async function onClickSubmit() {
    function ddd() {
      setIdError("아이디를 입력해주세요");
    }
    function fff() {
      setPassworderror("비밀번호를 입력해주세요");
    }

    if (id === "" && password !== "") {
      ddd();
    } else {
      setIdError("");
    }

    if (password === "" && id !== "") {
      fff();
    } else {
      setPassworderror("");
    }

    if (id !== "" && password !== "") {
      alert("로그인할까용");
    }
    if (id === "" && password === "") {
      alert("입력해주세용");
    }
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: id,
          password: password,
          title: title,
          contents: contents,
        },
      },
    });
    alert(result.data.createBoardInput);
    router.push(`/detail/${result.data.createBoard._id}`);
  }

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
            <Nameinput type="text" onChange={aaa} placeholder="아이디" />
            <A>{idError}</A>
          </LoginTitle>
          <LoginInput>
            <Password>비밀번호</Password>
            <Passwordinput
              type="password"
              onChange={bbb}
              placeholder="비밀번호"
            />
            <A>{passwordError}</A>
          </LoginInput>
        </Account>

        {/* ------------------- */}

        <SubTitle>
          <Subject>제목</Subject>
          <Subjectinput
            type="text"
            onChange={ttt}
            placeholder="제목을 작성해주세요."
          />
        </SubTitle>

        {/* ------------------- */}

        <Content>
          <ContentTitle>내용</ContentTitle>
          <Contentinput
            type="text"
            onChange={cont}
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
          <RegisterButton onClick={onClickSubmit}>등록하기</RegisterButton>
        </Register>
      </Wrapper_body>
    </Wrapper>
  );
}
