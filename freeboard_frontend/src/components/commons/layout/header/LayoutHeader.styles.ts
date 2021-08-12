import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: #fbdf14;
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  /* align-items: center; */
  min-width: 100%;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const InnerLogo = styled.img`
  /* font-size: 30px;
  font-weight: bold;
  font-family: "live";
  font-style: italic; */
  /* color: #5729ff; */
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
