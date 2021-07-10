import { useRouter } from "next/router";

export default function RouterPage() {
  const router = useRouter();

  function onClickMove() {
    router.push("/detail/7");
  }

  return <button onClick={onClickMove}>이동하기</button>;
}
