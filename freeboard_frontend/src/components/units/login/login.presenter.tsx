import { Checkbox } from "@material-ui/core";
import {
  Wrapper,
  Img,
  InputWrapper,
  EmailInput,
  PasswordInput,
  ErrorText,
  KeepLonin,
  LoginButton,
  FindWrapper,
  Clickdiv,
} from "./login.styles";

export default function LoginUI(props) {
  return (
    <Wrapper>
      <Img></Img>
      <InputWrapper>
        <EmailInput type="text" placeholder="이메일을 입력해주세요" />
        <ErrorText>이메일은 필수 입력 입니다.</ErrorText>
        <PasswordInput type="password" placeholder="비밀번호를 입력해주세요" />
        <ErrorText>비밀번호는 필수 입력 입니다.</ErrorText>
      </InputWrapper>
      <KeepLonin>
        <Checkbox style={{ color: "#142B12" }} />
        로그인 상태 유지
      </KeepLonin>
      <LoginButton>로그인하기</LoginButton>
      <FindWrapper>
        <Clickdiv>이메일 찾기</Clickdiv>
        <>|</>
        <Clickdiv>비밀번호 찾기</Clickdiv>
        <>|</>
        <Clickdiv onClick={props.onClickSignUp}>회원가입</Clickdiv>
      </FindWrapper>
    </Wrapper>
  );
}
