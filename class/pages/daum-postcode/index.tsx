import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";

export default function DaumPostcodePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [zoneCode, setZoneCode] = useState("");
  const [address, setAddress] = useState("");
  // const [addressDetail, setAddressDetail] = useState("");

  function onComplete(data: any) {
    setAddress(data.address);
    setZoneCode(data.zonecode);
    setIsOpen(false);
  }

  function onClickOpenModal() {
    setIsOpen(true);
  }

  function onClickCancel() {
    setIsOpen(false);
  }

  return (
    <>
      {isOpen && (
        <Modal title="주소검색하기" visible={true} onCancel={onClickCancel}>
          {/* <input type="text" />
          <br />
          <input type="password" /> */}
          <DaumPostcode onComplete={onComplete} animation />
        </Modal>
      )}
      <button onClick={onClickOpenModal}>주소검색하기</button>
      <br />
      <input value={address} readOnly />
      <br />
      <input value={zoneCode} readOnly />
    </>
  );
}
