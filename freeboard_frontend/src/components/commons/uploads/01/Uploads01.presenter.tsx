import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
} from "./Uploads01.styles";
import { IUploads01UIProps } from "./Uploads01.types";

export default function Uploads01UI(props: IUploads01UIProps) {
  return (
    <>
      {props.prevImg[props.index] && (
        <UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.prevImg[props.index]}`}
        />
      )}

      {!props.prevImg[props.index] && props.fileUrl && (
        <UploadImage onClick={props.onClickUpload} src={props.fileUrl} />
      )}

      {!props.prevImg[props.index] && !props.fileUrl && (
        <UploadButton onClick={props.onClickUpload} type="button">
          <>+</>
          <>Upload</>
        </UploadButton>
      )}

      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
