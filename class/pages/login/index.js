import { useState } from "react";

export default function Loginpage() {
  const [id, setId] = useState("");
  const [idError, setIdError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPassworderror] = useState("");

  function aaa(event) {
    setId(event.target.value);
  }

  function bbb(event) {
    setPassword(event.target.value);
  }

  function ddd() {
    setIdError("아이디를 입력해주세요");
  }

  function fff() {
    setPassworderror("비밀번호를 입력해주세요");
  }
  function ccc() {
    // 통신프로그램을 이용해서 아이디랑 패스워드를 백엔드(API) 컴퓨터에 보낸다.
    if (id === "") {
      ddd();
    }
    if (password === "") {
      fff();
    }
    if (id !== "" && password !== "") {
      alert("로그인할까용");
    }
  }

  return (
    <div>
      <h1>로그인</h1>
      <div>아이디</div>
      <input type="text" onChange={aaa} />
      <div>{idError}</div>
      <div>비밀번호</div>
      <input type="password" onChange={bbb} />
      <div>{passwordError}</div>
      <button onClick={ccc}>로그인하기</button>
    </div>
  );
}
