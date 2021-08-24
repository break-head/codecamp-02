import { request, gql } from "graphql-request";
import Head from "next/head";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      images
    }
  }
`;

export default function MarketPage(props) {
  return (
    <>
      <Head>
        <meta property="og:title" content={props.fetchUseditem.name} />
        <meta property="og:description" content={props.fetchUseditem.remarks} />
        <meta
          property="og:images"
          content={`https://storage.googleapis.com/${props.fetchUseditem.images[0]}`}
        />
      </Head>
      <div></div>;
    </>
  );
}
// props.fetchUseditem.name;
// props.fetchUseditem.remarks;
// props.fetchUseditem.images[0];

export const getServerSideProps = async (context) => {
  const result = await request(
    "https://backend02.codebootcamp.co.kr/graphql",
    FETCH_USEDITEM,
    {
      useditemId: context.query.usedItemId,
    }
  );
  return {
    props: {
      fetchUseditem: result.fetchUseditem,
    },
  };
};
