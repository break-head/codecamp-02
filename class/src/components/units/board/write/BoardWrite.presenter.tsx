import {MyInput, MyButton} from './BoardWrite.styles'
import { IBoardWriteUIProps } from './BoardWrite.types'

export default function BoardWriteUI(props: IBoardWriteUIProps){
    return (
        <>
            작성자: <MyInput type="text" name="writer" onChange={props.onChangeInputs} defaultValue={props.data?.fetchBoard.writer} readOnly={props.data?.fetchBoard.writer} /><br />
            비밀번호: <MyInput type="password" name="password" onChange={props.onChangeInputs} /><br />
            글제목: <MyInput type="text" name="title" onChange={props.onChangeInputs} defaultValue={props.data?.fetchBoard.title} /><br />
            글내용: <MyInput type="text" name="contents" onChange={props.onChangeInputs} defaultValue={props.data?.fetchBoard.contents} /><br />
            {!props.isEdit && <MyButton onClick={props.onClickSubmit} active={props.active}>데이터 입력하기</MyButton>}
            {props.isEdit && <MyButton onClick={props.onClickEdit} active={props.active}>데이터 수정하기</MyButton>}
        </>
    )
}
