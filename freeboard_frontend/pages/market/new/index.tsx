import withAuth from "../../../src/components/commons/hocs/withAuth";
import MarketWrite from "../../../src/components/units/market/write/marketWrite.container";

function MarketWritePage() {
  return <MarketWrite />;
}

export default withAuth(MarketWritePage);
