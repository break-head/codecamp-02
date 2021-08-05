import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 64px;
  background-color: #fbdf14;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: black;
`;

export const MenuItem = styled.div`
  margin: 0px 60px;
  cursor: pointer;
  font-weight: 600;

  :hover {
    color: orange;
  }
`;
