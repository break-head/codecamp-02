import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../pages/_app";
import LoginUI from "./login.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./login.queries";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const client = useApolloClient();
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
    // const newInputsErrors = {
    //   email: /\w+@\w+\.\w+/.test(email) ? "" : "이메일을 확인해주세요",
    //   password:
    //     /^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/.test(
    //       password
    //     )
    //       ? ""
    //       : "비밀번호 입력해주세요",
    //     }
    try {
      const result = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });

      const resultUser = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            authorization: `Bearer ${result.data?.loginUser.accessToken}`,
          },
        },
      });
      console.log(resultUser);
      setAccessToken(result.data?.loginUser.accessToken || "");
      localStorage.setItem("refreshToken", "true");
      setUserInfo(resultUser?.data.fetchUserLoggedIn || "");
      localStorage.setItem(
        "userInfo",
        JSON.stringify(resultUser.data.fetchUserLoggedIn)
      );
      router.push("/market");
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
