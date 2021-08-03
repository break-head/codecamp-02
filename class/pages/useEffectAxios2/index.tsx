import axios from "axios";
import { useEffect, useState } from "react";

export default function UseEffectAxios2Page() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      // 총 갯수 가져오기
      const resultCount = await axios.get(
        "https://api.spaceflightnewsapi.net/v3/articles/count"
      );
      setCount(resultCount.data);

      // 목록 가져오기
      const resultList = await axios.get(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      setList(resultList.data);
    };
    getData();
  }, []);

  return (
    <>
      <div>총 {count}개</div>
      <hr />
      {list.map((data: any) => (
        <>
          <div>제목: {data.title}</div>
          <div>요약: {data.summary}</div>
          <hr />
        </>
      ))}
    </>
  );
}
