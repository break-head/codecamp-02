import { useQuery } from "@apollo/client";
import ListPageUi from "./ListPage.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./ListPage.queries";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ListPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  function onClickMove() {
    router.push("/boards/new");
  }
  const onClickMoveDetail = (id) => () => {
    router.push(`/boards/${id}`);
  };
  function onChangeKeyword(value) {
    setKeyword(value);
  }

  return (
    <ListPageUi
      data={data}
      refetch={refetch}
      keyword={keyword}
      dataBoardsCount={dataBoardsCount}
      startPage={startPage}
      setStartPage={setStartPage}
      onClickMove={onClickMove}
      onClickMoveDetail={onClickMoveDetail}
      onChangeKeyword={onChangeKeyword}
    />
  );
}
