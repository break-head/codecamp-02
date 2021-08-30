import { useRouter } from "next/router";
import MypageUI from "./Mypage.presenter";

export default function Mypage(props) {
  const router = useRouter();

  const onClickMovePage = (data: any) => () => {
    router.push(`/mypage/${data}`);
  };

  return (
    <MypageUI
      isMypoint={props.isMypoint}
      isMypage={props.isMypage}
      rowTitle={props.rowTitle}
      data={props.data}
      onClickMovePage={onClickMovePage}
    />
  );
}
