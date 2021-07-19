import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUi from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { ChangeEvent } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IQuery,
} from "../../../../commons/types/generated/types";

const inputsInit = {
  writer: "",
  password: "",
  title: "",
  contents: "",
};
interface INewInputs {
  title?: string;
  contents?: string;
}
interface IProps {
  isEdit?: boolean;
  data?: IQuery;
}

export default function BoardWrite(props: IProps) {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [inputs, setInputs] = useState(inputsInit);
  const [createBoard] = useMutation<IMutation, IMutationCreateBoardArgs>(
    CREATE_BOARD
  );
  const [updateBoard] = useMutation<IMutation, IMutationUpdateBoardArgs>(
    UPDATE_BOARD
  );
  /*
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
*/

  function onChangeInputs(event: ChangeEvent<HTMLInputElement>) {
    const newInputs = {
      ...inputs,
      [event.target.name]: event.target.value,
    };
    setInputs(newInputs);
    if (Object.values(newInputs).every((data) => data)) setActive(true);
  }

  /*
   (Object.values(newInputs).every((data) => data)) {
      setActive(true)
     }
     if (["철수", "1234", "제목입니다~", "내용입니다~~"].every((data) => data)) setActive(true)
  */
  /*
      newInputs.writer &&
      newInputs.password &&
      newInputs.title &&
      newInputs.contents
    {
      setActive(true);  
    }
  */
  /*
 setInputs({
 ...inputs,
 [event.target.name]: event.target.value,
  ===위에랑 같음,스프레드연산자 활용
 writer: inputs.writer,
 password: inputs.password,
 title: inputs.title,
 contents: inputs.contents,
 );
 if(inputs.writer && inputs.password && inputs.title && inputs.contents){
    setActive(true)
 } */
  /*
위에랑 같음 function을 onchangeInputs으로 통일
  function onChangeWriter(event) {
 setWriter(event.target.value);

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

  function onChangePassword(event) {
 setPassword(event.target.value);

  if (
 writer !== "" &&
 event.target.value !== "" &&
 title !== "" &&
 contents !== ""
  ) {
 setActive(true);
  } else {
 setActive(false);
  }
  }
  function onChangeTitle(event) {
 setTitle(event.target.value);

  if (
 writer !== "" &&
 password !== "" &&
 event.target.value !== "" &&
 contents !== ""
  ) {
 setActive(true);
  } else {
 setActive(false);
  }
  }
  function onChangeContents(event) {
 setContents(event.target.value);

  if (
 writer !== "" &&
 password !== "" &&
 title !== "" &&
 event.target.value !== ""
  ) {
 setActive(true);
  } else {
 setActive(false);
  }
  }
*/

  async function onClickSubmit() {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: { ...inputs },
        },
      });
      alert(result.data?.createBoard._id);
      router.push(`/detail/${result.data?.createBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickEdit() {
    const newInputs: INewInputs = {};
    if (inputs.title) newInputs.title = inputs.title;
    if (inputs.contents) newInputs.contents = inputs.contents;

    try {
      const result = await updateBoard({
        variables: {
          boardId: String(router.query.boardId),
          password: inputs.password,
          updateBoardInput: {
            ...newInputs,
          },
        },
      });
      alert(result.data?.updateBoard._id);
      router.push(`/detail/${result.data?.updateBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <BoardWriteUi
      /*
      aaa={onChangeWriter}
      bbb={onChangePassword}
      ccc={onChangeTitle}
      ddd={onChangeContents}
    */
      onChangeInputs={onChangeInputs}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      active={active}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
