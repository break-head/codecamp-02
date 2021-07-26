import { useEffect, useRef } from "react";

export default function UseRefPage() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <input type="password" ref={inputRef} />
      <button>등록하기</button>
    </>
  );
}
