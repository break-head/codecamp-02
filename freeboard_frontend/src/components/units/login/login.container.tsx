import { useRouter } from "next/router";
import { useContext, useState } from "react";
import LoginUI from "./login.presenter";

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
      setAccessToken(result.data?.loginUser.accessToken);
      router.push("/22-login-success");
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <LoginUI
      idError={idError}
      passwordError={passwordError}
      aaa={aaa}
      bbb={bbb}
      ccc={ccc}
    />
  );
}
