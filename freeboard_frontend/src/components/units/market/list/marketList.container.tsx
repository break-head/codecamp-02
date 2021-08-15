import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import MarketListUI from "./marketList.presenter";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_OF_THE_BEST,
} from "./marketList.query";

export default function MarketList() {
  const { data } = useQuery(FETCH_USED_ITEMS);
  const { data: dataBestUsedItems } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);
  const [getLocal, setGetLocal] = useState([" "]);
  const router = useRouter();

  const onClickMoveDetail = (data) => () => {
    onClickBasket(data);
    router.push(`/market/${data._id}`);
  };

  function onClickMoveNew() {
    router.push("/market/new");
  }

  const onClickBasket = (news) => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]").filter(
      (el) => el._id !== news._id
    );
    const newBaskets = [];
    newBaskets.push(news);
    localStorage.setItem("baskets", JSON.stringify(newBaskets.concat(baskets)));
  };
  useEffect(() => {
    const NewBaskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setGetLocal(NewBaskets);
  }, []);

  return (
    <MarketListUI
      data={data}
      dataBestUsedItems={dataBestUsedItems}
      onClickMoveDetail={onClickMoveDetail}
      onClickMoveNew={onClickMoveNew}
      onClickBasket={onClickBasket}
      getLocal={getLocal}
    />
  );
}
