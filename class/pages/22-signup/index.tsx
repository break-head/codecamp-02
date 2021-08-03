import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../src/commons/types/generated/types";

const CRAETE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;

export default function SignupLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CRAETE_USER);

  function onChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function onChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  async function onClickSignup() {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: email,
            password: password,
            name: name,
          },
        },
      });
      console.log(result.data?.createUser._id);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <h1>회원가입</h1>
      이메일: <input type="text" onChange={onChangeEmail} />
      <br />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      이름: <input type="text" onChange={onChangeName} />
      <br />
      <button onClick={onClickSignup}>가입하기</button>
    </>
  );
}
