import axios from "axios";
import { useState } from "react";

export default function CallbackPage() {
  const [callback, setCallback] = useState([]);
  const [promise, setPromise] = useState([]);
  const [asyncAwait, setAsyncAwait] = useState([]);

  const onClickCallback = () => {
    const ccc = new XMLHttpRequest();
    ccc.open("get", "http://numbersapi.com/random?min=1&max=200");
    ccc.send();
    ccc.addEventListener("load", (res) => {
      const num = res.target.response.split(" ")[0];

      const aaa = new XMLHttpRequest();
      aaa.open("get", `https://koreanjson.com/posts/${num}`);
      aaa.send();
      aaa.addEventListener("load", (res) => {
        const user = JSON.parse(res.target.response).UserId;
        const aaa2 = new XMLHttpRequest();
        aaa2.open("get", `https://koreanjson.com/posts?userId=${user}`);
        aaa2.send();
        aaa2.addEventListener("load", (res2) => {
          setCallback(JSON.parse(res2.target.response));
        });
      });
    });
  };

  const onClickPromise = () => {
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res1) => {
        const num = res1.data.split(" ")[0];
        return axios.get(`https://koreanjson.com/posts/${num}`);
      })
      .then((res2) => {
        const user = res2.data.UserId;
        return axios.get(`https://koreanjson.com/posts?userId=${user}`);
      })
      .then((res3) => {
        setPromise(res3.data);
      });
  };

  const onClickAsyncAwait = async () => {
    const res1 = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const num = res1.data.split(" ")[0];

    const res2 = await axios.get(`https://koreanjson.com/posts/${num}`);
    const user = res2.data.UserId;

    const res3 = await axios.get(`https://koreanjson.com/posts?userId=${user}`);
    setAsyncAwait(res3.data);
  };
  return (
    <>
      <div>콜백과 친구들</div>
      <span>
        결과:
        {callback.map((data) => (
          <div>{data.title}</div>
        ))}
      </span>
      <button onClick={onClickCallback}>Callback</button>
      <br />
      <span>
        결과:
        {promise.map((data) => (
          <div>{data.title}</div>
        ))}
      </span>
      <button onClick={onClickPromise}>Promise</button>
      <br />
      <span>
        결과:
        {asyncAwait.map((data) => (
          <div>{data.title}</div>
        ))}
      </span>
      <button onClick={onClickAsyncAwait}>Async/Await</button>
    </>
  );
}
