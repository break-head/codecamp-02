import MarketDetail from "../../../src/components/units/market/detail/MarketDetail.container";
import MarketCommentWrite from "../../../src/components/units/marketComment/write/MarketCommentWrite.container";
import MarketCommentList from "../../../src/components/units/marketComment/list/MarketCommentList.container";
// import withAuth from "../../../src/components/commons/hocs/withAuth";

export default function MarketDetailPage() {
  return (
    <>
      <MarketDetail />
      <MarketCommentWrite />
      <MarketCommentList />
    </>
  );
}
// export default withAuth(MarketDetailPage);
