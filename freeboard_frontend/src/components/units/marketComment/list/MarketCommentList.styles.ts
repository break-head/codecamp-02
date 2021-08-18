import styled from "@emotion/styled";
// import { Rate } from "antd";

export const ItemWrapper = styled.div`
  width: 1200px;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid lightgray;
  flex-direction: column;
  align-items: flex-end;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const MainWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 10%;
`;
export const Name = styled.div`
  font-size: 15px;
  font-weight: bold;
`;
export const Contents = styled.div``;

export const OptionWrapper = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const UpdateIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const DeleteIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const DateString = styled.div`
  color: lightgray;
`;

export const RecommentIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
