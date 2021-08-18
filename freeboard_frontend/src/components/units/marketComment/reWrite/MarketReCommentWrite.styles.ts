import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 50px;
`;

export const ContentsWrapper = styled.div`
  width: 90%;
  border: 1px solid lightgray;
`;

export const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
`;

export const Button = styled.button`
  width: 91px;
  height: 51px;
  background-color: black;
  color: white;
  cursor: pointer;
`;
