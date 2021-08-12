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
  const [getLocal, setGetLocal] = useState([""]);
  const router = useRouter();

  const onClickMoveDetail = (data) => () => {
    onClickBasket(data);
    router.push(`/market/${data._id}`);
  };

  function onClickMoveNew() {
    router.push("/market/new");
  }

  const onClickBasket = (news) => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    // let isExists = false;
    baskets.forEach((data) => {
      if (data._id === news._id) {
        localStorage.removeItem("baskets");
      } else {
        baskets.push(news);
      }
      // console.log("baskets");
      localStorage.setItem("baskets", JSON.stringify(baskets));
    });
  };

  useEffect(() => {
    setGetLocal(JSON.parse(localStorage.getItem("baskets") || "[]"));
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
