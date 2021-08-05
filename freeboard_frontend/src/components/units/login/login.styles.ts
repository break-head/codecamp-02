import styled from "@emotion/styled";
import { Checkbox } from "@material-ui/core";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  /* object-fit: cover; */
  background-image: url("../market/login/img.jpeg");
  background-size: cover;
`;
export const SubWrapper = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: black; */
  opacity: 0.7;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  padding-top: 159px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const EmailInput = styled.input`
  border: 1px gray solid;
  height: 64px;
  width: 30%;
  border-radius: 16px;
  padding-left: 20px;
  background: rgba(255, 255, 255, 0.05);
`;
export const ErrorText = styled.div`
  padding-left: 20px;
  height: 20px;
  display: none;
  color: red;
`;
export const PasswordInput = styled.input`
  border: 1px gray solid;
  height: 64px;
  width: 30%;
  border-radius: 16px;
  padding-left: 20px;
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.05);
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const KeepLonin = styled.div`
  font-size: 16px;
  color: gray;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 30%;
`;
export const LoginButton = styled.button`
  background-color: #faf082;
  color: black;
  font-size: 20px;
  height: 64px;
  width: 30%;
  border-radius: 16px;
  margin: 20px 0px;
  font-weight: bolder;
  :hover {
    background-color: yellowgreen;
  }
`;
export const FindWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Var = styled.div`
  color: grey;
  margin: 0px 10px 10px;
`;
export const StatusBox = styled(Checkbox)``;

export const Clickdiv = styled.div`
  cursor: pointer;
  color: white;
`;
