import {
  Wrapper,
  Title,
  ProfileImage,
  Name,
  MypageListPointWrapper,
  MyPageListWrapper,
  ListIcon,
  IconName,
} from "./mypageside.styles";

export default function MyPageSideUI(props: any) {
  return (
    <Wrapper>
      <Title>MYPAGE</Title>
      {props.accessToken ? (
        <>
          <ProfileImage src="/market/login/대표이미지.png" />
          <Name>{props.userInfo.name}</Name>{" "}
          <MypageListPointWrapper>
            <ListIcon src="/pigicon.png" />
            <IconName>{props.userInfo.userPoint?.amount}</IconName>
          </MypageListPointWrapper>
          <MyPageListWrapper>
            <ListIcon src="/carticon.png" />
            <IconName onClick={props.onClickMoveMymarket}>내 장터</IconName>
          </MyPageListWrapper>
          <MyPageListWrapper>
            <ListIcon src="/greypig.png" />
            <IconName onClick={props.onClickMoveMypoint}>내 포인트</IconName>
          </MyPageListWrapper>
          <MyPageListWrapper>
            <ListIcon src="/miniuser.png " />
            <IconName>내 프로필</IconName>
          </MyPageListWrapper>
        </>
      ) : (
        <></>
      )}
    </Wrapper>
  );
}
