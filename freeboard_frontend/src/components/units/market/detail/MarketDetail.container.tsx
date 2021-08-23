import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketDetailUI from "./MarketDetail.presenter";
import {
  FETCH_USED_ITEM,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  TOGGLE_USED_ITEM_PICK,
} from "./MarketDetail.queries";

export default function MarketDetail() {
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
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
  async function onClickbuying() {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: {
          useriteeId: router.query.marketId,
        },
      });
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickToggle() {
    try {
      await toggleUseditemPick({
        variables: {
          useditemId: router.query.marketId,
        },
      });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <MarketDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickbuying={onClickbuying}
      onClickToggle={onClickToggle}
    />
  );
}
