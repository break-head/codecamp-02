// import { useState } from "react";

// export default function LoginPage() {
//   const [id, setId] = useState("");
//   const [password, setPassword] = useState("");

//   // const [idError, setIdError] = useState('')
//   // const [passwordError, setPasswordError] = useState('')

//   function aaa(event) {
//     setId(event.target.value);
//   }

//   function bbb(event) {
//     setPassword(event.target.value);
//   }

//   function ccc() {
//     // if (id === "") {
//     //   // id === ""     : id가 없다면
//     //   // id !== ""     : id가 있다면
//     // } else if (password === "") {
//     // } else {
//     //   alert("로그인을 해볼까요?!");
//     //   // // 통신프로그램을 이용해서
//     //   // id, password 백엔드컴퓨터의 API에 전송하기
//     // }
//   }

//   return (
//     <div>
//       <h1>로그인</h1>
//       <div>아이디</div>
//       <input type="text" onChange={aaa} />
//       <div>{idError}</div>
//       <div>비밀번호</div>
//       <input type="password" onChange={bbb} />
//       <div>{passwordError}</div>
//       <button onClick={ccc}>로그인하기</button>
//     </div>
//   );
// }
