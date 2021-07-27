import router from "next/router";
import { useEffect, useRef, useState } from "react";

export default function LifecycleFunctionPage() {
  const [isChange, setIsChange] = useState(false);

  const onClickChange = () => {
    setIsChange(true);
  };
  const onClickMove = () => {
    router.push("/");
  };
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    alert("Rendered!");
    inputRef.current?.focus();
    return () => {
      alert("bye");
    };
  }, []);

  useEffect(() => {
    console.log(isChange);
    if (isChange === true) {
      alert("change!!");
    }
  }, [isChange]);

  return (
    <>
      <input type="password" ref={inputRef} />
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </>
  );
}
