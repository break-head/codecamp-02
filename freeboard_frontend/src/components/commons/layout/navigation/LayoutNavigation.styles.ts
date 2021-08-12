import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-height: 64px;
  width: 100%;
  background-color: #fbdf14;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: black;
`;

export const MenuItem = styled.div`
  margin: 0px 60px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  :hover {
    color: orange;
  }
`;
