import {
  Wrapper,
  InnerWrapper,
  InnerLogo,
  InnerButton,
  UserLogo,
  UserInfoWrapper,
  UserName,
  UserPoint,
  ProfileWrapper,
  Payment,
  LogOut,
  UserWrapper,
  // UserInfoButton,
} from "../header/LayoutHeader.styles";
import { GlobalContext } from "../../../../../pages/_app";
import { useContext } from "react";
import { Menu, Dropdown, Modal } from "antd";
import { DownOutlined } from "@ant-design/icons";
import PaymentPage from "../../payment";

export default function LayoutHeaderUI(props: any) {
  const { accessToken } = useContext(GlobalContext);
  const menu = (
    <Menu
      style={{
        width: "200px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
      }}
    >
      <Menu.Item>
        <UserWrapper>
          <UserLogo src="/market/login/대표이미지.png" />
          <UserInfoWrapper>
            <UserName>펭수</UserName>
            <UserPoint>100,000 P</UserPoint>
          </UserInfoWrapper>
        </UserWrapper>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Payment onClick={() => props.onClickPayment(true)}>충전하기</Payment>
      </Menu.Item>
      <Menu.Item>
        <LogOut onClick={props.onClickLogout}> 로그아웃 </LogOut>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      {props.isOpen && (
        <Modal
          title="충전하기"
          visible={true}
          onOk={() => props.onClickPayment(false)}
          onCancel={() => props.onClickPayment(false)}
        >
          <PaymentPage />
        </Modal>
      )}
      <Wrapper>
        <InnerWrapper>
          <InnerLogo
            onClick={props.onClickBoards}
            src="/images/Layout/peng.png"
          />
          {accessToken ? (
            <ProfileWrapper>
              <UserLogo src="/market/login/대표이미지.png" />
              <Dropdown overlay={menu} trigger={["click"]}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <DownOutlined style={{ color: "black", fontSize: "20px" }} />
                </a>
              </Dropdown>
            </ProfileWrapper>
          ) : (
            <div>
              <InnerButton onClick={props.onClickLogin}>로그인</InnerButton>
              <InnerButton onClick={props.onClickRegister}>
                회원가입
              </InnerButton>
            </div>
          )}
        </InnerWrapper>
      </Wrapper>
    </>
  );
}
