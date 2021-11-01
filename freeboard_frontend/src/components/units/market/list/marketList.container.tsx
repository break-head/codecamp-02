import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import MarketListUI from "./marketList.presenter";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_OF_THE_BEST,
} from "./marketList.query";

export default function MarketList() {
  // const [soldout, setSoldout] = useState(false);
  const { data, fetchMore, refetch } = useQuery(FETCH_USED_ITEMS, {
    variables: { isSoldout: false },
  });
  const [hasMore, setHasMore] = useState(true);
  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.floor(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        // @ts-ignore
        if (!fetchMoreResult.fetchUseditems.length) setHasMore(false);
        return {
          fetchUseditems: [
            // @ts-ignore
            ...prev.fetchUseditems,
            // @ts-ignore
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  const { data: dataBestUsedItems } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);
  const [getLocal, setGetLocal] = useState([" "]);
  const router = useRouter();
  const { accessToken } = useContext(GlobalContext);
  useEffect(() => {
    const newBaskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setGetLocal(newBaskets);
  }, []);

  const onClickMoveDetail = (data: any) => () => {
    onClickBasket(data);
    router.push(`/market/${data._id}`);
  };

  function onClickMovetoCreate() {
    router.push("/market/new");
  }
  const onClickBasket = (news: any) => {
    const newBaskets = [news];
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]").filter(
      (el: any, i: any) => i < 4 && el._id !== news._id
    );
    localStorage.setItem("baskets", JSON.stringify(newBaskets.concat(baskets)));
  };
  const onClickSwitch = (boolean: any) => () => {
    // setSoldout(boolean);
    refetch({ isSoldout: boolean });
  };
  return (
    <MarketListUI
      data={data}
      dataBestUsedItems={dataBestUsedItems}
      onClickMoveDetail={onClickMoveDetail}
      onClickMovetoCreate={onClickMovetoCreate}
      onClickBasket={onClickBasket}
      getLocal={getLocal}
      hasMore={hasMore}
      onLoadMore={onLoadMore}
      accessToken={accessToken}
      onClickSwitch={onClickSwitch}
    />
  );
}
