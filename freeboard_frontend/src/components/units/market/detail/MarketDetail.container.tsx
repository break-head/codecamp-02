import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketDetailUI from "./MarketDetail.presenter";
import { FETCH_USED_ITEM } from "./MarketDetail.queries";

export default function MarketDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.marketId },
  });

  function onClickMoveToList() {
    router.push("/market");
  }
  function onClickMoveToEdit() {
    router.push(`/market/${router.query.useditemId}/edit`);
  }
  // console.log(data?.fetchUseditem.useditemAddress?.lng);
  return (
    <MarketDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
    />
  );
}