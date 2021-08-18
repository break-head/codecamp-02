import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import RegisterUI from "./register.presenter";
import { CRAETE_USER } from "./register.queries";

export const INPUTS_INIT = {
  email: "",
  password: "",
  name: "",
};

export default function Register() {
  const [inputs, setInputs] = useState(INPUTS_INIT);
  const [inputsErrors, setInputsErrors] = useState(INPUTS_INIT);
  const [createUser] = useMutation(
    // <Pick<IMutation, "createUser">,
    //   IMutationCreateUserArgs>
    CRAETE_USER
  );

  function onChangeInputs(event: ChangeEvent<HTMLInputElement>) {
    const newInput = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInput);
    setInputsErrors({ ...inputsErrors, [event.target.name]: "" });
  }

  async function onClickSignup() {
    const newInputsErrors = {
      // email: /\w+@\w+\.\w+/.test(inputs.email) ? "" : "이메일을 확인해주세요",
      email: inputs.email ? "" : "이메일을 확인해주세요",
      password:
        // /^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/.test(
        //   inputs.password
        // )
        inputs.password ? "" : "비밀번호 입력해주세요",
      name: inputs.name ? "" : "이름을 입력해주세요",
    };
    setInputsErrors(newInputsErrors);

    if (Object.values(newInputsErrors).every((data) => !data)) {
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              email: inputs.email,
              password: inputs.password,
              name: inputs.name,
            },
          },
        });
        console.log(result.data?.createUser._id);
        alert("회원가입");
      } catch (error) {
        alert(error.message);
      }
    }
  }
  return (
    <RegisterUI
      onChangeInputs={onChangeInputs}
      inputsErrors={inputsErrors}
      onClickSignup={onClickSignup}
    />
  );
}
