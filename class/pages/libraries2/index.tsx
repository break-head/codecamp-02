import { DatePicker, Rate } from "antd";
import "antd/dist/antd.css";
import styled from "@emotion/styled";
import ReactPlayer from "react-player";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const Youtube = styled(ReactPlayer)``;

export default function Libraries2Page() {
  function onChangeStar(value: any) {
    console.log(value);
  }

  return (
    <div>
      <DatePicker />
      <Rate tooltips={desc} onChange={onChangeStar} />
      <Youtube
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width="500px"
        height="500px"
        pip={false}
      />
    </div>
  );
}
