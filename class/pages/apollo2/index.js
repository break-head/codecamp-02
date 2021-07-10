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

export default function ApolloPage() {
  const router = useRouter();
  const [writer, setWriter] = useState();
  const [password, setPassword] = useState();
  const [title, setTitle] = useState();
  const [contents, setContents] = useState();

  function onChangeWriter(event) {
    setWriter(event.target.value);
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
  }
  function onChangeTitle(event) {
    setTitle(event.target.value);
  }
  function onChangeContents(event) {
    setContents(event.target.value);
  }

  const [createBoard] = useMutation(CREATE_BOARD);

  async function onClickSubmit() {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: contents,
          },
        },
      });
      alert(result.data.createBoard._id);
      router.push(`/detail/${result.data.createBoard._id}`);
    } catch (error) {
      alert(error.mssage);
    }
  }
  // graphql 등록이 안됬을때//

  // async function onClickSubmit(){
  //   try {
  //     const result = await createBoard({
  //       variables: {
  //         writer: writer,
  //         password: password,
  //         title: title,
  //         contents: contents,
  //       },
  //     });
  //     alert(result.data.createBoard.message);
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }

  return (
    <>
      <div></div>
      작성자:
      <input type="text" onChange={onChangeWriter} />
      <br />
      비밀번호:
      <input type="password" onChange={onChangePassword} />
      <br />
      글제목:
      <input type="text" onChange={onChangeTitle} />
      <br />
      내용:
      <input type="text" onChange={onChangeContents} />
      <br />
      <button onClick={onClickSubmit}>데이터 입력하기</button>
    </>
  );
}
