import styled from "@emotion/styled";
export const Wrapper = styled.div`
  /* background-color: gray; */
  display: flex;
  flex-direction: column;
  width: 380px;
  margin: auto;
`;
export const Img = styled.div`
  font-size: 100px;
  font-weight: bold;
  color: #132b12;
  font-weight: bold;
  font-family: "live";
  font-style: italic;
  text-align: center;
`;
export const InputWrapper = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const EmailInput = styled.input`
  border: 1px gray solid;
  height: 64px;
  border-radius: 16px;
  padding-left: 20px;
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
  border-radius: 16px;
  padding-left: 20px;
  margin-top: 20px;
`;
export const KeepLonin = styled.div`
  font-size: 16px;
  /* margin-top: 20px; */
  /* padding-left: 20px; */
`;
export const LoginButton = styled.button`
  background-color: #2a652f;
  color: white;
  font-size: 20px;
  height: 64px;
  border-radius: 16px;
  margin: 20px 0px;
  font-weight: bolder;
  :hover {
    background-color: #142b12;
  }
`;
export const FindWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  padding: 0px 20px;
`;
export const Clickdiv = styled.div`
  /* background-color: honeydew; */
  padding: 4px;
  cursor: pointer;
  color: "#142B12";
`;
