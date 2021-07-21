import axios from "axios";
import { useState } from "react";

export default function AxiosPage() {
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");

  // async function handleClickData() {
  const handleClickData = async () => {
    // const aaa = await axios.get("https://koreanjson.com/posts");
    // setData(aaa.data.title);
    // setData2(aaa.data.content);
    const aaa = await axios.get("https://koreanjson.com/posts");
    setData(aaa.data[5]);
    setData2(aaa.data[5].content);
  };

  return (
    <>
      <div>
        {data.title}
        {data.content}
      </div>
      <br />
      <div>{data2}</div>
      <hr />
      <button onClick={handleClickData}>데이터 불러오기</button>
    </>
  );
}
