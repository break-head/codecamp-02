import styled from "@emotion/styled";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  /* padding-top: 159px; */
  background-image: url("../market/login/102750939.1.jpg");
  background-size: cover;
`;
export const SubWrapper = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: black; */
  opacity: 0.7;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-size: cover;
  padding-top: 159px;
`;
export const Title = styled.div`
  font-size: 28px;
  text-align: center;
  color: black;
`;
export const SingUpWrapper = styled.div`
  width: 384px;
`;
export const InputWrapper = styled.div`
  ::placeholder {
    color: blakc;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: black;
`;
export const ErrorTextDiv = styled.div`
  color: red;
  padding-left: 20px;
`;
export const TextDiv = styled.div`
  padding-top: 20px;
  padding-bottom: 12px;
  color: black;
  font-size: 28px;
  font-weight: bold;
  ::placeholder {
    color: black;
  }
`;
export const EmailInput = styled.input`
  border: 1px gray solid;
  height: 64px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  padding-left: 20px;
  ::placeholder {
    color: black;
  }
`;
export const NameInput = styled.input`
  border: 1px gray solid;
  height: 64px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  padding-left: 20px;
  ::placeholder {
    color: black;
  }
`;
export const PasswordInput = styled.input`
  border: 1px gray solid;
  height: 64px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  padding-left: 20px;
  ::placeholder {
    color: black;
  }
`;
export const KeepLonin = styled.div`
  font-size: 16px;
`;
export const SignUpButton = styled.button`
  background: rgba(255, 255, 255, 0.05);
  color: black;
  font-size: 20px;
  height: 64px;
  border-radius: 16px;
  margin: 60px 0px;
`;
