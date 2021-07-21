import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { Modal } from "antd";
export default function DaumPostcodePage() {
  const [address, setAddress] = useState("");
  const [zoneCode, setZoneCode] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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
          <DaumPostcode onComplete={onComplete} animation={true} />
        </Modal>
      )}
      <button onClick={onClickOpenModal}>주소검색하기</button>

      <input value={address} readOnly />
      <br />
      <input value={zoneCode} readOnly />
    </>
  );
}
