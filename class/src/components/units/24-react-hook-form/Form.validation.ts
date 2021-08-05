import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().email().required("이메일은 필수입력입니다"),
  password: yup
    .string()
    .min(8, "비밀번호는 8자 이상입니다.")
    .max(15, "비밀번호는 15자 이하입니다")
    .required("비밀번호는 필수입력입니다"),
});
