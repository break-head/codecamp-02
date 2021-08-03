import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const WrapperBody = styled.div`
  width: 1200px;
  margin-left: 100px;
  margin-top: 100px;
  border-top: 1px solid black;
  /* border-bottom: 1px solid black; */
`;
export const Row = styled.div`
  div:nth-child(1) {
    width: 10%;
  }
  div:nth-child(2) {
    width: 60%;
  }
  div:nth-child(3) {
    width: 15%;
  }
  div:nth-child(4) {
    width: 15%;
  }
  height: 52px;
  line-height: 52px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  border-bottom: 1px solid #bdbd;
  :hover:not(:nth-of-type(1)) {
    background-color: lightgray;
  }
`;
export const Column = styled.div`
  width: 25%;
`;

export const TitleColumn = styled.div`
  width: 25%;
  font-size: 18px;
  font-weight: bold;
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`;
export const PencilIcon = styled.img``;
export const Button = styled.button`
  float: right;
  background-color: #ffffff;
  height: 52px;
  line-height: 52px;
  width: 171px;
  font-size: 16px;
  margin-top: 40px;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
`;
