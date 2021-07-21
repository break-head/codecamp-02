import { useQuery } from "@apollo/client";

import ListPageUi from "./ListPage.presenter";

import { FETCH_BOARDS } from "./ListPage.queries";

import { useRouter } from "next/router";

export default function ListPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  function onClickMove() {
    router.push("/boards/new");
  }
  function onClickMoveDetail(event) {
    router.push(`/boards/${event.target.id}`);
  }
  return (
    <ListPageUi
      data={data}
      onClickMove={onClickMove}
      onClickMoveDetail={onClickMoveDetail}
    />
  );
}
