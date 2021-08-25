import { ChangeEvent, useRef, useState } from "react";
import { checkValidationFile } from "../../../../commons/libraries/validations";
import Uploads01UI from "./Uploads01.presenter";
import { IUploads01Props } from "./Uploads01.types";

export default function Uploads01(props: IUploads01Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileUrl, setFileUrl] = useState("");

  function onClickUpload() {
    fileRef.current?.click();
  }

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;
    // @ts-ignore
    if (!checkValidationFile(file)) return;

    if (props.prevImg[props.index]) {
      props.setPrevImg((prev: any) => {
        const temp = [...prev];
        temp[props.index] = null;
        return temp;
      });
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setFileUrl(data.target?.result as string);
      props.onChangeFiles(file, props.index);
    };
  }

  return (
    <Uploads01UI
      fileRef={fileRef}
      fileUrl={fileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      prevImg={props.prevImg}
      index={props.index}
    />
  );
}
