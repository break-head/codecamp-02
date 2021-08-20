import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: #fbdf14;
  display: flex;
  flex-direction: row;
  min-width: 100%;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding-right: 30px;
`;

export const InnerLogo = styled.img`
  cursor: pointer;
  width: 300px;
`;

export const InnerButton = styled.span`
  margin: 10px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  margin-right: 50px;
`;

export const ProfileWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const UserWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const UserLogo = styled.img`
  width: 70px;
  height: 70px;
`;
export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const UserName = styled.div`
  font-size: 25px;
`;
export const UserPoint = styled.div`
  font-size: 12px;
`;
export const LogOut = styled.div`
  text-align: center;
`;
export const Payment = styled.div`
  text-align: center;
`;
