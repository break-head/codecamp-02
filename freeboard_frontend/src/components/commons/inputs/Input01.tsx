import styled from "@emotion/styled";
const Title = styled.div`
  width: 100%;
  font-size: 16px;

  margin-top: 40px;
  display: flex;
  justify-content: left;
`;
const Input = styled.input`
  width: 100%;
  height: 52px;
  margin-top: 16px;
  background-color: white;
`;

const ErrorMessage = styled.div`
  color: red;
`;

export default function Input01(props) {
  return (
    <>
      <Title>{props.inputName}</Title>
      <Input type={props.type} {...props.register} />
      <ErrorMessage>{props.errorMessage}</ErrorMessage>
    </>
  );
}
