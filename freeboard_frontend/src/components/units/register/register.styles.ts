import styled from "@emotion/styled";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
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
  justify-content: center;
  background-size: cover;
  padding-top: 159px;
`;
export const Title = styled.div`
  font-size: 28px;
  text-align: center;
  color: #ffffff;
`;
export const SingUpWrapper = styled.div`
  width: 384px;
`;
export const InputWrapper = styled.div`
  ::placeholder {
    color: white;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;
`;
export const ErrorTextDiv = styled.div`
  color: red;
  padding-left: 20px;
`;
export const TextDiv = styled.div`
  padding-top: 20px;
  padding-bottom: 12px;
  color: #ffffff;
  ::placeholder {
    color: white;
  }
`;
export const EmailInput = styled.input`
  border: 1px gray solid;
  height: 64px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  padding-left: 20px;
  ::placeholder {
    color: white;
  }
`;
export const NameInput = styled.input`
  border: 1px gray solid;
  height: 64px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  padding-left: 20px;
  ::placeholder {
    color: white;
  }
`;
export const PasswordInput = styled.input`
  border: 1px gray solid;
  height: 64px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  padding-left: 20px;
  ::placeholder {
    color: white;
  }
`;
export const KeepLonin = styled.div`
  font-size: 16px;
`;
export const SignUpButton = styled.button`
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 20px;
  height: 64px;
  border-radius: 16px;
  margin: 60px 0px;
`;
