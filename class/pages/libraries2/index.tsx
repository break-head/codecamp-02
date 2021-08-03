import { DatePicker, Rate } from "antd";
import ReactPlayer from "react-player";
import styled from "@emotion/styled";

const Youtube = styled(ReactPlayer)`
  border: 3px solid yellow;
  background-size: 500px 500px;
`;

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default function Libraries2Page() {
  function onChangeStar(value: number) {
    console.log(value);
  }

  return (
    <div>
      <DatePicker />
      <Rate tooltips={desc} onChange={onChangeStar} />
      <Youtube
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        playing={true}
        muted={true}
      />
    </div>
  );
}
