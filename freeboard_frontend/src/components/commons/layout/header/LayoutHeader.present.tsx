import {
  Wrapper,
  InnerWrapper,
  InnerLogo,
  InnerButton,
  UserLogo,
  ProfileWrapper,
  // UserInfoButton,
} from "../header/LayoutHeader.styles";
import { GlobalContext } from "../../../../../pages/_app";
import { useContext } from "react";

export default function LayoutHeaderUI(props: any) {
  const { accessToken } = useContext(GlobalContext);
  return (
    <Wrapper>
      <InnerWrapper>
        <InnerLogo
          onClick={props.onClickBoards}
          src="/images/Layout/peng.png"
        />
        {accessToken ? (
          <ProfileWrapper>
            <UserLogo src="/market/login/대표이미지.png" />
          </ProfileWrapper>
        ) : (
          <div>
            <InnerButton onClick={props.onClickLogin}>로그인</InnerButton>
            <InnerButton onClick={props.onClickRegister}>회원가입</InnerButton>
          </div>
        )}
      </InnerWrapper>
    </Wrapper>
  );
}
