import MarketDetail from "../../../src/components/units/market/detail/MarketDetail.container";
import MarketCommentWrite from "../../../src/components/units/marketComment/write/MarketCommentWrite.container";
// import withAuth from "../../../src/components/commons/hocs/withAuth";

export default function MarketDetailPage() {
  return (
    <>
      <MarketDetail />
      <MarketCommentWrite />
    </>
  );
}
// export default withAuth(MarketDetailPage);
