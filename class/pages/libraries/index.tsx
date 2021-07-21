// import { WindowsOutlined, YoutubeOutlined } from "@ant-design/icons";
// import styled from "@emotion/styled";

// const Youtube = styled(YoutubeOutlined)`
//   color: yellow;
//   font-size: 50px;
// `;
// export default function LibrariesPage() {
//   function onClickIcon(event: any) {
//     console.log(event.target);
//   }

//   return (
//     <>
//       <div>라이브러리 페이지</div>
//       <Youtube id="1234" onClick={onClickIcon} />
//       <WindowsOutlined />
//     </>
//   );
// }

import { Calendar, Rate } from "antd";
import ReactPlayer from "react-player";
import styled from "@emotion/styled";

const desc = ["1점", "2점", "3점", "4점", "5점"];
const Youtube = styled(ReactPlayer)``;

export default function LibrariesPage() {
  function onClickStar(value: any) {
    const [onClickStar, setOnClickStar] = useState("");
    alert(desc[value - 1]);
  }

  function onPanelChange(value: any, mode: any) {
    console.log(value);
  }
  return (
    <div>
      <Rate tooltips={desc} onChange={onClickStar} />
      <Calendar onPanelChange={onPanelChange} />
      <Youtube
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        height="600px"
        width="800px"
        playing={true}
        muted={true}
      />
    </div>
  );
}
