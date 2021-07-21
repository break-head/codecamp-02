import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
import { Modal, Button } from "antd";

export default function postcode() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [Address, setAddress] = useState("");
  const [zoneCode, setZoneCode] = useState("");

  function onComplete(data: any) {
    setAddress(data.address);
    setZoneCode(data.zonecode);
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {isModalVisible && (
        <Modal
          title="주소검색"
          visible={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcode onComplete={onComplete} autoClose />
        </Modal>
      )}
      <Button type="primary" onClick={showModal}>
        모달열기
      </Button>
      <br />
      <input value={Address} />
      <br />
      <input value={zoneCode} />
    </>
  );
}
