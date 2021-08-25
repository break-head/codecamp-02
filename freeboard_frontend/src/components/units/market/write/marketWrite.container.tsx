import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import MarketWriteUI from "./marketWrite.presenter";
import { Modal } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CREATE_USED_ITEM,
  UPLOAD_FILE,
  UPDATE_USED_ITEM,
} from "./marketWrite.queries";
import { schema } from "./marketWrite.validations";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function MarketWrite(props: any) {
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [files, setFiles] = useState<(File | null)[]>([null, null, null, null]);
  const [lat, setLat] = useState(33.450701);
  const [lng, setLng] = useState(126.570667);
  const [contents, setContents] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [prevImg, setPrevImg] = useState([]);

  useEffect(() => {
    if (props.data) {
      setValue("name", props.data?.fetchUseditem.name);
      setValue("remarks", props.data?.fetchUseditem.remarks);
      setValue("price", props.data?.fetchUseditem.price);
      setValue("tags", props.data?.fetchUseditem.tags);
      setContents(props.data?.fetchUseditem.contents);
      setAddress(props.data?.fetchUseditem.useditemAddress?.address);
      setDetailAddress(
        props.data?.fetchUseditem.useditemAddress?.addressDetail
      );
      setPrevImg(props.data?.fetchUseditem.images);
    }
  }, [props.data]);

  function onChangeFiles(file: File, index: number) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }
  function onClickAddressSearch(bool: any) {
    setIsOpen(bool);
  }

  function onCompleteAddressSearch(data: any) {
    setAddress(data.address);
    setDetailAddress(data.detailAddress);
    setIsOpen(false);
  }

  const onChangeContents = (value: any) => {
    const isBlank = "<p><br></p>";
    setContents(value);
    setValue("contents", value === isBlank ? "" : value);
    trigger("contents");
  };

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
            useditemAddress: {
              address: address,
              addressDetail: detailAddress,
              lat: lat,
              lng: lng,
            },
          },
        },
      });
      Modal.info({ content: "게시물등록완료!!" });
      router.push(`/market/${result.data.createUseditem._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  }

  async function onClickUpdate(data: any) {
    
    const filterPrevImg = prevImg.filter((data) => data);
    const uploadFiles = files
      .filter((data) => data)
      .map((data) => uploadFile({ variables: { file: data } }));
    const results = await Promise.all(uploadFiles);
    const images = results.map((data) => data.data.uploadFile.url);

    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: data.tags,
            images: [...filterPrevImg, ...images],
            useditemAddress: {
              address: address,
              addressDetail: detailAddress,
              lat: lat,
              lng: lng,
            },
          },
          useditemId: router.query.marketId,
        },
      });
      console.log(result);
      Modal.info({ content: "게시물수정완료!!" });
      router.push(`/market/${result.data?.updateUseditem._id}`);
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
      onChangeContents={onChangeContents}
      lat={lat}
      lng={lng}
      setLat={setLat}
      setLng={setLng}
      address={address}
      detailAddress={detailAddress}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickAddressSearch={onClickAddressSearch}
      isOpen={isOpen}
      data={props.data}
      contents={contents}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      prevImg={prevImg}
      setPrevImg={setPrevImg}
    />
  );
}
