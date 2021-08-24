import Head from "next/head";

export default function Board2Page() {
  return (
    <>
      <Head>
        <meta property="og:title" content="정적게시판" />
        <meta property="og:description" content="정적게시판" />
        <meta
          property="og:image"
          content="http://kr.designmarketinglab.com/wp-content/uploads/sites/2/2021/06/Pengsoo.jpg"
        />
      </Head>
      <div>여기는 게시판입니다.</div>;
    </>
  );
}
