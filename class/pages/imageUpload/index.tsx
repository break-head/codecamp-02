import { ChangeEvent, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadFile($aaa: Upload!) {
    uploadFile(file: $aaa) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($bbb: CreateBoardInput!) {
    createBoard(createBoardInput: $bbb) {
      _id
    }
  }
`;

export default function ImageUpload() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);
  const fileRef = useRef<HTMLInputElement>(null);

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file?.size) {
      alert("파일이 없습니다.");
      return;
    }
    if (file?.size > 5 * 1024 * 1024) {
      alert("파일 사이즈가 너무 큽니다(제한: 5MB)");
      return;
    }
    if (!file.type.includes("png") && !file.type.includes("jpeg")) {
      alert("png 또는 jpeg 파일만 전송 가능합니다.");
      return;
    }

    try {
      const result = await uploadFile({
        variables: {
          aaa: file,
        },
      });
      setImageUrl(result.data.uploadFile.url);
    } catch (error) {
      alert(error.message);
    }
  }

  function onClickGreyBox() {
    fileRef.current?.click();
  }

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function onChangeContents(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
  }

  async function onClickSubmit() {
    try {
      const result = await createBoard({
        variables: {
          bbb: {
            writer: writer,
            password: password,
            title: title,
            contents: contents,
            images: [imageUrl],
          },
        },
      });
      console.log(result.data.createBoard._id);
      alert("게시물이 등록되었습니다.");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <button onClick={onClickSubmit}>게시물 등록하기</button>
      <br />
      <input type="text" onChange={onChangeWriter} />
      <br />
      <input type="text" onChange={onChangePassword} />
      <br />
      <input type="text" onChange={onChangeTitle} />
      <br />
      <input type="text" onChange={onChangeContents} />
      <br />

      <img src={`https://storage.googleapis.com/${imageUrl}`} />
      <div
        style={{ width: "200px", height: "200px", backgroundColor: "grey" }}
        onClick={onClickGreyBox}
      ></div>
      <input
        ref={fileRef}
        type="file"
        onChange={onChangeFile}
        /* multiple */ style={{ display: "none" }}
      />
    </>
  );
}
