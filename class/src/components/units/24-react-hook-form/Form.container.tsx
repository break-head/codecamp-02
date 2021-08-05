import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import { LOGIN_USER } from "./Form.queries";
import FormUI from "./Form.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Form.validation";

export default function Form() {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [loginUser] = useMutation(LOGIN_USER);

  async function onSubmit(data) {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      console.log(result.data?.loginUser.accessToken);
      Modal.info({ content: "로그인완료" });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }
  return (
    <FormUI
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      isActive={formState.isValid}
      errors={formState.errors}
    />
  );
}
