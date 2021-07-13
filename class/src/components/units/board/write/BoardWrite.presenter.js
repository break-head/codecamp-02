import { MyInput, MyButton } from "./BoardWrite.styles";

export default function BoardWriteUi(props) {
  return (
    <>
      작성자: <MyInput type="text" onChange={props.aaa} active={props.fff} />
      <br />
      비밀번호:
      <MyInput type="password" onChange={props.bbb} active={props.fff} /> <br />
      글제목: <MyInput type="text" onChange={props.ccc} active={props.fff} />
      <br />
      내용: <MyInput type="text" onChange={props.ddd} active={props.fff} />
      <br />
      <MyButton onClick={props.eee} active={props.fff}>
        데이터 입력하기
      </MyButton>
    </>
  );
}
