import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardPageUi from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardPage() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [active, setActive] = useState(false);
  const [idError, setIdError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPassworderror] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  function aaa(event) {
    setId(event.target.value);
    console.log(event.target.value, password, title, contents);
    if (
      event.target.value !== "" &&
      password !== "" &&
      title !== "" &&
      contents !== ""
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  function bbb(event) {
    setPassword(event.target.value);
    if (
      id !== "" &&
      event.target.value !== "" &&
      title !== "" &&
      contents !== ""
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  function ttt(event) {
    setTitle(event.target.value);
    if (
      id !== "" &&
      password !== "" &&
      event.target.value !== "" &&
      contents !== ""
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  function cont(event) {
    setContents(event.target.value);
    if (
      id !== "" &&
      password !== "" &&
      title !== "" &&
      event.target.value !== ""
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  const [createBoard] = useMutation(CREATE_BOARD);

  async function onClickSubmit() {
    function ddd() {
      setIdError("작성자를 입력해주세요");
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
    if (id && password && contents && title) {
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
      alert("등록되었습니다");
      router.push(`/boards/${result.data.createBoard._id}`);
    }
  }

  return (
    <BoardPageUi
      a={aaa}
      b={bbb}
      c={ttt}
      d={cont}
      e={onClickSubmit}
      f={idError}
      g={passwordError}
      h={active}
    />
  );
}
