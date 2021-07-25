import {
  Wrapper,
  InnerWrapper,
  InnerLogo,
  InnerButton,
} from "../header/LayoutHeader.styles";

export default function LayoutHeaderUI() {
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo src="/images/Layout/logo.png" />
        <div>
          <InnerButton>로그인</InnerButton>
          <InnerButton>회원가입</InnerButton>
        </div>
      </InnerWrapper>
    </Wrapper>
  );
}
