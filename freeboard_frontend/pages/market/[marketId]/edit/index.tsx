import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USED_ITEM } from "../../../../src/components/units/market/detail/MarketDetail.queries";
import MarketWrite from "../../../../src/components/units/market/write/marketWrite.container";

export default function MarkeEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.marketId },
  });
  const isEdit = true;

  return <MarketWrite data={data} isEdit={isEdit} />;
}
