import {
  Wrapper,
  CancelWrapper,
  Cancel,
  LoginWrapper,
  Banner,
  LoginInput,
  LoginStatus,
  StatusButton,
  LoginButton,
  LoginSetting,
  EmailFindButton,
  PasswordFindButton,
  SingUpButton,
} from "./login.styles";

export default function LoginIU(props) {
  return (
    <Wrapper>
      <CancelWrapper>
        <Cancel />
      </CancelWrapper>
      <LoginWrapper>
        <Banner />
        <LoginInput
          placeholder="이메일을 입력해주세요."
          type="text"
          onChange={props.aaa}
        />
        <div>{props.idError}</div>
        <LoginInput
          placeholder="비밀번호를 입력해주세요."
          type="password"
          onChange={props.bbb}
        />
        <div>{props.passwordError}</div>
        <LoginStatus>
          <StatusButton />
          로그인 상태유지
        </LoginStatus>
        <LoginButton onClick={props.ccc}>로그인하기</LoginButton>
        <LoginSetting>
          <EmailFindButton>이메일찾기</EmailFindButton>
          <PasswordFindButton>비밀번호찾기</PasswordFindButton>
          <SingUpButton>회원가입</SingUpButton>
        </LoginSetting>
      </LoginWrapper>
    </Wrapper>
  );
}
