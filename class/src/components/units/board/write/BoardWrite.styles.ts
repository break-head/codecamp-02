import styled from "@emotion/styled";

export const MyInput = styled.input`
  color: ${(props: IProps) => (props.active ? "green" : "red")};
`;
interface IProps{
  active: boolean
}
export const MyButton = styled.button`
  /* color: ${(props) => "green"}; color : green */

  color: ${(props: IProps) => (props.active ? "red" : "blue")};
`;

// "안녕하세요" + aaa + "입니다~"
// `안녕하세요${aaa}입니다~`;
