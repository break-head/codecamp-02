import { ChangeEvent, MouseEvent } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";
import { INPUTS_INIT } from "./BoardCommentWrite.container";

export interface IBoardCommentWriteProps {
  isEdit?: boolean;
  setIsEdit?: (value: boolean) => void;
  data?: IBoardComment;
}

export interface IBoardCommentWriteUIProps {
  inputs: typeof INPUTS_INIT;
  onClickWrite: () => void;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onChangeInput: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChangeStar: (value: number) => void;
  isEdit?: boolean;
  data?: IBoardComment;
}
