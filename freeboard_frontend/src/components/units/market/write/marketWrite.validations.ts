import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("상품명은 필수 입력입니다."),

  remarks: yup.string().required("한줄요약은 필수 입력입니다."),

  contents: yup.string().required("설명은 필수 입력입니다."),

  price: yup
    .number()
    .typeError("숫자입력하세요")
    .required("가격은 필수 입력입니다."),

  tags: yup.string().required("태그는 필수 입력입니다."),
});
