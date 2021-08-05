import styled from "@emotion/styled";

const ErrorMessage = styled.div`
  color: red;
  font-size: 11px;
`;

export default function Input01(props) {
  return (
    <>
      {props.inputName}
      <input type={props.type} {...props.register} />
      <ErrorMessage>{props.errorMessage}</ErrorMessage>
    </>
  );
}
