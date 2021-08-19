import styled from "@emotion/styled";
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
export const Wrapper = styled.div`
  background-color: #fbdf14;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const InnerBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const TitleIcon = styled.img`
  height: 50px;
  width: 90px;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const FacebookIcon = styled(FacebookOutlined)`
  font-size: 30px;
  padding-left: 10px;
`;
export const InstagramIcon = styled(InstagramOutlined)`
  font-size: 30px;
  padding-left: 10px;
`;
export const YoutubeIcon = styled(YoutubeOutlined)`
  font-size: 30px;
  padding-left: 10px;
`;
export const CopyRightWrapper = styled.div`
  padding-top: 20px;
  border-top: black solid 1px;
`;
