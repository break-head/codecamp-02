import {
  Wrapper,
  InnerWrapper,
  InnerLogo,
  InnerButton,
} from "../header/LayoutHeader.styles";

export default function LayoutHeaderUI(props: any) {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo
          onClick={props.onClickBoards}
          src="/images/Layout/logo.png"
        />
        <div>
          <InnerButton onClick={props.onClickLogin}>로그인</InnerButton>
          <InnerButton onClick={props.onClickRegister}>회원가입</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
