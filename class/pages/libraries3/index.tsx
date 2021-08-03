import { Modal } from "antd";
import { useState } from "react";

export default function Libraries3Page() {
  const [isOpen, setIsOpen] = useState(false);

  function onClickSubmit() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        title="게시글 등록"
        visible={isOpen}
        onOk={onClose}
        onCancel={onClose}
      >
        <div>게시물이 정상적으로 등록되었습니다.</div>
      </Modal>
      <button onClick={onClickSubmit}>게시물 등록</button>
    </>
  );
}
