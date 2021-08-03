// import { ChangeEvent, useState } from "react";
// import { gql, useMutation } from "@apollo/client";

// const UPLOAD_FILE = gql`
//   mutation uploadFile($aaa: Upload!) {
//     uploadFile(file: $aaa) {
//       url
//     }
//   }
// `;

// const CREATE_BOARD = gql`
//   mutation createBoard($bbb: CreateBoardInput!) {
//     createBoard(createBoardInput: $bbb) {
//       _id
//     }
//   }
// `;

// export default function ImagePreviewPage() {
//   const [writer, setWriter] = useState("");
//   const [password, setPassword] = useState("");
//   const [title, setTitle] = useState("");
//   const [contents, setContents] = useState("");

//   const [files, setFiles] = useState([]);
//   const [imageUrls, setImageUrls] = useState(["", "", ""]);

//   const [uploadFile] = useMutation(UPLOAD_FILE);
//   const [createBoard] = useMutation(CREATE_BOARD);

//   function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
//     const file = event.target.files?.[0];
//     if (!file?.size) {
//       alert("파일이 없습니다.");
//       return;
//     }
//     if (file.size > 5 * 1024 * 1024) {
//       alert("파일이 너무 큽니다.(제한: 5MB)");
//       return;
//     }
//     if (!file.type.includes("png") && !file.type.includes("jpeg")) {
//       alert("잘못된 파일입니다.");
//       return;
//     }

//     // 단지 미리보기 작업만 진행
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload = (data) => {
//       setImageUrl(data.target.result); // 임시주소
//       setFile(newFiles);
//     };
//   }

//   function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
//     setWriter(event.target.value);
//   }

//   function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
//     setPassword(event.target.value);
//   }

//   function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
//     setTitle(event.target.value);
//   }

//   function onChangeContents(event: ChangeEvent<HTMLInputElement>) {
//     setContents(event.target.value);
//   }

//   async function onClickSubmit() {
//     try {
//       //   const start = performance.now();
//       const resultFiles = await Promise.all([
//         uploadFile({ variables: { aaa: file } }),
//         uploadFile({ variables: { aaa: file } }),
//         uploadFile({ variables: { aaa: file } }),
//       ]);
//       //   const end = performance.now();
//       //   console.log(end - start);

//       // [{}, {}, {}]   <=Promise.all([  ,  , ])

//       //   const image1 = resultFiles[0].data.uploadFile.url;
//       //   const image2 = resultFiles[1].data.uploadFile.url;
//       //   const image3 = resultFiles[2].data.uploadFile.url;

//       const images = resultFiles.map((data) => data.data.uploadFile.url); // ['1번URL', '2번URL', '3번URL']

//       const result = await createBoard({
//         variables: {
//           bbb: {
//             writer: writer,
//             password: password,
//             title: title,
//             contents: contents,
//             images: images,
//           },
//         },
//       });
//       console.log(result.data.createBoard._id);
//       alert("게시물이 등록되었습니다.");
//     } catch (error) {
//       alert(error.message);
//     }
//   }

//   return (
//     <>
//       <button onClick={onClickSubmit}>게시물 등록하기</button>
//       <br />
//       <input type="text" onChange={onChangeWriter} />
//       <br />
//       <input type="text" onChange={onChangePassword} />
//       <br />
//       <input type="text" onChange={onChangeTitle} />
//       <br />
//       <input type="text" onChange={onChangeContents} />
//       <br />

//       {/* <img src={imageUrl1} />
//       <input type="file" id="1" onChange={onChangeFile} />

//       <img src={imageUrl2} />
//       <input type="file" id="2" onChange={onChangeFile} />

//       <img src={imageUrl3} />
//       <input type="file" id="3" onChange={onChangeFile} /> */}
//     </>
//   );
// }
