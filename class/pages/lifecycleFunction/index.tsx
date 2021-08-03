import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function LifecycleFunctionPage() {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("마운트 완료!!");
    inputRef.current?.focus();
    return () => {
      alert("잘가요~");
    };
  }, []);

  useEffect(() => {
    console.log("컴포넌트 변경됨!!");
  });

  const onClickCount = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <div>카운트: {count}</div>
      <button onClick={onClickCount}>카운트 +1</button>
      <div>함수형 컴포넌트 입니다~</div>
      <button onClick={onClickMove}>나가기</button>
    </>
  );
}
