import { useState } from "react";
import LoginIU from "./login.presenter";
export default function Login() {
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
    <LoginIU
      idError={idError}
      passwordError={passwordError}
      aaa={aaa}
      bbb={bbb}
      ccc={ccc}
    />
  );
}
