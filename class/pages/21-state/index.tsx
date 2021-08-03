import { useState } from "react";

export default function StatePage() {
  const [count, setCount] = useState(0);

  function onClickButton() {
    // setCount((prev) => prev + 1);
    setCount((asdlklkzxcvhlk) => asdlklkzxcvhlk + 1);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickButton}>+1</button>
    </>
  );
}
