import { ChangeEvent, useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
// import {
//   IMutation,
//   IMutationLoginUserArgs,
// } from "../../src/commons/types/generated/types";
import { GlobalContext } from "../../../_app";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAccessToken } = useContext(GlobalContext);
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  function onChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function onClickLogin() {
    try {
      const result = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });
      console.log(result.data?.loginUser.accessToken);
      setAccessToken(result.data?.loginUser.accessToken || "");
      localStorage.setItem(
        "accessToken",
        result.data?.loginUser.accessToken || ""
      );
      router.push("/quiz06/payment/loading");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <h1>로그인</h1>
      이메일: <input type="text" onChange={onChangeEmail} /> <br />
      비밀번호: <input type="password" onChange={onChangePassword} /> <br />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
