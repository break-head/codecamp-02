import {
  YoutubeOutlined,
  WindowsOutlined,
  DingdingOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";

const Youtube = styled(YoutubeOutlined)`
    color: yellow;
    font-size: 50px;
`;

export default function LibrariesPage() {
  function onClickIcon(event) {
    console.log(event.target);
    console.log(event.target.id);
  }

  return (
    <>
      <div>라이브러리 페이지</div>
      <Youtube id="1234" onClick={onClickIcon} />
      <WindowsOutlined />
      <DingdingOutlined />
    </>
  );
}
