import { ChangeEvent, RefObject } from "react";

export interface IUploads01Props {
  index: number;
  onChangeFiles: (file: File, index: number) => void;
}

export interface IUploads01UIProps {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
