import { useQuery } from "@apollo/client";

import HomePageUi from "./HomePage.presenter";

import { FETCH_BOARDS } from "./HomePage.queries";

import { useRouter } from "next/router";

export default function HomePage() {
  const { data } = useQuery(FETCH_BOARDS);

  const router = useRouter();

  function onClickMove() {
    router.push("/boards/new");
  }
  return <HomePageUi data={data} onClickMove={onClickMove} />;
}
