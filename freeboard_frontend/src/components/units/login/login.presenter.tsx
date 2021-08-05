import {
  Wrapper,
  SubWrapper,
  InputWrapper,
  EmailInput,
  PasswordInput,
  ErrorText,
  LoginWrapper,
  KeepLonin,
  LoginButton,
  FindWrapper,
  Clickdiv,
  StatusBox,
  Var,
} from "./login.styles";

export default function LoginUI(props) {
  return (
    <Wrapper>
      <SubWrapper>
        <InputWrapper>
          <EmailInput
            type="text"
            placeholder="이메일을 입력해주세요"
            onChange={props.onChangeEmail}
          />
          <ErrorText>이메일은 필수 입력 입니다.</ErrorText>
          <PasswordInput
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={props.onChangePassword}
          />
          <ErrorText>비밀번호는 필수 입력 입니다.</ErrorText>
          <KeepLonin>
            <StatusBox style={{ color: "white" }} />
            로그인 상태 유지
          </KeepLonin>
        </InputWrapper>

        <LoginWrapper>
          <LoginButton onClick={props.onClickLogin}>로그인하기</LoginButton>
          <FindWrapper>
            <Clickdiv>이메일 찾기</Clickdiv>
            <Var>|</Var>
            <Clickdiv>비밀번호 찾기</Clickdiv>
            <Var>|</Var>
            <Clickdiv>회원가입</Clickdiv>
          </FindWrapper>
        </LoginWrapper>
      </SubWrapper>
    </Wrapper>
  );
}
