import { FireFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Searchbar = styled.div`
  width: 776px;
  height: 52px;
  border-radius: 15px;
  background-color: #fbdf14;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FireFilledIcon = styled(FireFilled)`
  color: black;
  font-size: 30px;
  cursor: pointer;
  :hover {
    color: gray;
  }
`;

export const SearchbarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  margin: 0px 20px;
  ::placeholder {
    color: black;
  }
`;
