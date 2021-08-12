import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketListUI from "./marketList.presenter";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_OF_THE_BEST,
} from "./marketList.query";

export default function MarketList() {
  const { data } = useQuery(FETCH_USED_ITEMS);
  const { data: dataBestUsedItems } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);
  const router = useRouter();

  const onClickMoveDetail = (id) => (event) => {
    router.push(`/market/${id}`);
  };

  function onClickMoveNew() {
    router.push("/market/new");
  }
  return (
    <MarketListUI
      data={data}
      dataBestUsedItems={dataBestUsedItems}
      onClickMoveDetail={onClickMoveDetail}
      onClickMoveNew={onClickMoveNew}
    />
  );
}
