import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid black;
`;

export const Wrapper_body = styled.div`
  width: 1200px;
  height: 1847px;
  margin-top: 100px;
  margin-bottom: 281px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 101px;
  padding-right: 103px;
`;

export const HeadTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 60px;
  font-weight: bold;
  font-size: 36px;
`;
export const Title = styled.div`
  font-size: 36px;
`;
export const Account = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const LoginTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 486px;
  height: 110px;
`;

export const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 486px;
  height: 110px;
`;

export const Name = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const NameInput = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 10px;
  /* color: ${(props) => (props.active ? "green" : "red")}; */
`;
export const Password = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;
export const PasswordInput = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 10px;
  /* color: ${(props) => (props.active ? "green" : "red")}; */
`;
export const A = styled.div`
  color: red;
`;
export const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 92px;
`;
export const Subject = styled.div`
  width: 100%;
`;
export const SubjectInput = styled.input`
  width: 100%;
  height: 52px;
  padding-left: 10px;
  /* color: ${(props) => (props.active ? "green" : "red")}; */
`;
export const Content = styled.div`
  width: 100%;
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ContentTitle = styled.div``;
export const ContentInput = styled.textarea`
  width: 100%;
  height: 480px;
  resize: none;
  display: flex;
  flex-direction: column;
  padding-top: 14px;
  padding-left: 16px;
  border: 1px solid black;
  /* color: ${(props) => (props.active ? "green" : "red")}; */
`;

export const Address = styled.div`
  width: 100%;
  height: 242px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 16px;
`;
export const AddressTitle = styled.div`
  margin-bottom: 16px; ;
`;
export const AddressSearch = styled.div`
  height: 52px;
  display: flex;
  justify-content: flex-start;
`;
export const AddressNumber = styled.input`
  padding-left: 16px;
  width: 77px;
  height: 52px;
`;
export const AddressButton = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: black;
  color: white;
  font-size: 16px;
`;
export const AddressMain = styled.input`
  width: 100%;
  height: 52px;
  margin-top: 30px;
`;
export const AddressSub = styled.input`
  width: 100%;
  height: 52px;
  margin-top: 30px;
`;

export const YouTubeWrapper = styled.div`
  width: 100%;
  height: 81px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const YouTubeTitle = styled.div`
  font-size: 16px;
`;

export const YouTube = styled.input`
  width: 100%;
  height: 45.78px;
`;
export const Photo = styled.div`
  padding-top: 10px;
  width: 996px;
`;
export const PhotoTitle = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500px;
`;

export const PhotoUpload = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;
export const OptionWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const Register = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
export const RegisterButton = styled.button`
  /* background-color: #ffd600; */
  width: 179px;
  height: 52px;
  border: 0;
  margin-bottom: 100px;
  font-size: 16px;
  background-color: ${(props) => (props.active ? "#ffd600" : "")};
`;
export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;
