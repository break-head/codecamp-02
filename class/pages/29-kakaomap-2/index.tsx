import { useRouter } from "next/router";

export default function Kakaomap2page() {
  const router = useRouter();
  const onClickMove = () => {
    router.push("/29-kakaomap");
  };

  return <button onClick={onClickMove}>카카오 화면으로 이동하기</button>;
}
