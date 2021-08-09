import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../pages/_app";
import LoginUI from "./login.presenter";
import { LOGIN_USER } from "./login.queries";

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
    console.log(event.target.value);
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
      router.push("/market/new");
      alert("하이");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <LoginUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
    />
  );
}
