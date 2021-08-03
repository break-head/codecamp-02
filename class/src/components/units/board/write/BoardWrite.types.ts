import { ChangeEvent } from "react";

export interface IBoardWriteUIProps {
    onChangeInputs: (event: ChangeEvent<HTMLInputElement>) => void
    onClickSubmit: () => void
    onClickEdit: () => void
    active: boolean
    isEdit?: boolean
    data: any
}