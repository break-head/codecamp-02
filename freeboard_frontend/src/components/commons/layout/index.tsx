import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";
import LayoutFooter from "./footer/LayoutFooter.container";
import MyPageSide from "./mypageside/mypageside.container";
import { useRouter } from "next/router";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-top: 50px; */
  padding-left: 100px;
`;

const MypageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function Layout(props: any) {
  const router = useRouter();
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      {router.pathname.includes("/mypage") ? (
        <MypageWrapper>
          <MyPageSide />
          <Body>{props.children}</Body>
        </MypageWrapper>
      ) : (
        <Body>{props.children}</Body>
      )}

      <LayoutFooter />
    </>
  );
}
