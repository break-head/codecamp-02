import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import MarketWriteUI from "./marketWrite.presenter";
import { Modal } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { CREATE_USED_ITEM, UPLOAD_FILE } from "./marketWrite.queries";
import { schema } from "./marketWrite.validations";
import { ChangeEvent, useState } from "react";

export default function MarketWrite() {
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [files, setFiles] = useState<(File | null)[]>([null, null, null]);

  function onChangeFiles(file: File, index: number) {
    const newFiles = [...files];

    newFiles[index] = file;
    setFiles(newFiles);
  }

  async function onSubmit(data: any) {
    const uploadFiles = files
      .filter((data) => data)
      .map((data) => uploadFile({ variables: { file: data } }));
    const results = await Promise.all(uploadFiles);
    const images = results.map((data) => data.data.uploadFile.url);
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: data.tags,
            images: images,
          },
        },
      });
      console.log(result.data?.createUseditem);
      Modal.info({ content: "게시물등록완료!!" });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  return (
    <MarketWriteUI
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      isActive={formState.isValid}
      errors={formState.errors}
      onChangeFiles={onChangeFiles}
    />
  );
}
