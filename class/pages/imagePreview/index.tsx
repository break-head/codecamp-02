import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
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

export default function ImagePreviewPage() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [file, setFile] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file?.size) {
      alert("파일이 없습니다.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("파일이 너무 큽니다.(제한: 5MB)");
      return;
    }
    if (file.type.includes("png") && file.type.includes("jpeg")) {
      alert("잘못된 파일입니다.");
      return;
    }
    // 단지 미리보기 작업만 진행 내 주소에만 보이는 것이기 때문에 서버로 올리면 안된다. 즉, 다른사람들 한테는 보이지 않기 때문에 의미가 없다.
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImageUrl(data.target.result); // 임시주소
      setFile(file);
    };
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
      const resultFiles = await Promise.all([
        uploadFile({ variables: { aaa: file1 } }),
        uploadFile({ variables: { aaa: file2 } }),
        uploadFile({ variables: { aaa: file3 } }),
      ]);

      // const image1 = resultFiles[0].data.uploadFile.url
      // const image2 = resultFiles[1].data.uploadFile.url
      // const image3 = resultFiles[2].data.uploadFile.url

      const images = resultFiles.map((data) => data.data.uploadFile.url); // ['1번url', '2번url', '3번url' ]

      //   const resultFile = await uploadFile({
      //     variables: {
      //       aaa: file,
      //     },
      //   });

      //   const image = resultFile.data.uploadFile.url;

      const result = await createBoard({
        variables: {
          bbb: {
            writer: writer,
            password: password,
            title: title,
            contents: contents,
            images: images, // [image1, image2, image3],
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
      <input type="password" onChange={onChangePassword} />
      <br />
      <input type="text" onChange={onChangeTitle} />
      <br />
      <input type="text" onChange={onChangeContents} />
      <br />

      <img src={imageUrl1} />
      <input type="file" id="1" onChange={onChangeFile} />

      <img src={imageUrl2} />
      <input type="file" id="2" onChange={onChangeFile} />

      <img src={imageUrl3} />
      <input type="file" id="3" onChange={onChangeFile} />
    </>
  );
}
