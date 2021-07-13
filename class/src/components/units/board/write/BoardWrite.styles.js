import styled from "@emotion/styled";

export const MyInput = styled.input`
  color: ${(props) => (props.active ? "green" : "red")};
`;

export const MyButton = styled.button`
  /* color: ${(props) => "green"}; //color : green */
  color: ${(props) => (props.active ? "red" : "blue")};
`;

// "안녕하세요" + aaa + "입니다~"
// `안녕하세요${aaa}입니다~`;
