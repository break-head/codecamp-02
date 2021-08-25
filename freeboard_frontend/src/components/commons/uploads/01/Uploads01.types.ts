import { ChangeEvent, RefObject } from "react";

export interface IUploads01Props {
  setPrevImg: any;
  index: number;
  onChangeFiles: (file: File, index: number) => void;
  prevImg: any;
}

export interface IUploads01UIProps {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  prevImg: any;
  index: number;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
