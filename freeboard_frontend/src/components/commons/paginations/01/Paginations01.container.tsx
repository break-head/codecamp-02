import { MouseEvent, useState } from "react";
import { IPaginations01Props } from "./Paginations01.types";
import Paginations01UI from "./Paginations01.presenter";

export default function Paginations01(props: IPaginations01Props) {
  const [activedPage, setActivedPage] = useState(1);
  const lastPage = Math.ceil(Number(props.count) / 10);

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    const activedPage = Number((event.target as Element).id);
    setActivedPage(activedPage);
    props.refetch({ page: activedPage });
    history.pushState({ page: activedPage }, "", `?page=${activedPage}`);
  }

  function onClickPrevPage() {
    if (props.startPage <= 1) return;
    setActivedPage(props.startPage - 10);
    props.setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    if (props.startPage + 10 > lastPage) return;
    setActivedPage(props.startPage + 10);
    props.setStartPage((prev) => prev + 10);
  }

  return (
    <Paginations01UI
      startPage={props.startPage}
      lastPage={lastPage}
      activedPage={activedPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
