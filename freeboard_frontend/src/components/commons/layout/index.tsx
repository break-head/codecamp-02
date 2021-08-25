import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";
import LayoutFooter from "./footer/LayoutFooter.container";
import { useRouter } from "next/router";
import MyPageSide from "./mypageside/mypageside.container";
// import { useState } from "react";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MypageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 80px;
  justify-content: center;
`;

export default function Layout(props: any) {
  const router = useRouter();

  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      {router.query.mypage ? (
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
