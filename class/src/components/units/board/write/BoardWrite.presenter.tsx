import{MyInput,MyButton} from "./BoardWrite.styles"
import { ChangeEvent, MouseEvent} from "react"
import { IBoardWriteUIProps} from "./BoardWrite.types"


export default function BoardWriteUi(props: IBoardWriteUIProps) {
  return (
    <>
      작성자:<MyInput type="text" name="writer" onChange={props.onChangeInputs} active={props.active} />
      <br />
      비밀번호:<MyInput type="password" name="password" onChange={props.onChangeInputs} active={props.active} />
      <br />
      글제목:<MyInput type="text" name="title" onChange={props.onChangeInputs} active={props.active} />
      <br />
      내용: <MyInput type="text" name="contents" onChange={props.onChangeInputs} active={props.active} />
      <br />
      {!props.isEdit && <MyButton onClick={(props.onClickSubmit)} active={props.active}> 데이터입력하기 </MyButton>}
      {props.isEdit && <MyButton onClick={props.onClickEdit} active={props.active}> 데이터수정하기  </MyButton>}
      
      </>
  )
}
// props.onChangeInputs