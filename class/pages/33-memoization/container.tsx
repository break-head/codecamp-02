import { useCallback } from "react";
import { useState, useMemo } from "react";
import Presenter from "./presenter";

export default function Container() {
  console.log("컨테이너(부모)가 렌더링 시작됩니다.");
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  //   let randomNumber = useMemo(() => Math.random(), []);
  //   console.log(randomNumber);

  let aaa = useMemo(() => {
    return () => {
      console.log("let클릭");
      countLet = countLet + 1;
    };
  }, []);
  aaa();
  console.log(countLet);
  const onCLickCountLet = useCallback(() => {
    console.log("let클릭");
    // console.log(countLet + 1);
    countLet = countLet + 1;
  }, [countState]);

  // 의존성배열에 데이터가 적을떄  사용하기, 함수 내부가 크게 복잡하지 않을떄 사용하기
  // 만약 복잡하다면 state등 주의해서 사용하기
  const onClickCountState = useCallback(() => {
    console.log("state클릭");
    // console.log(countState + 1);
    setCountState((prev) => prev + 1);
  }, []);
  return (
    <>
      <div>================== 컨테이너 ==================</div>
      <div>count: {countLet}</div>
      <button onClick={onCLickCountLet}>countLet + 1</button>
      <br />
      <div>countState: {countState}</div>
      <button onClick={onClickCountState}>countState + 1</button>
      <div>============================================</div>
      <Presenter countLet={countLet} />
    </>
  );
}
