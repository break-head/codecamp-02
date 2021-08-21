import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
// 검색 디바운싱... 쓰로틀링
export default function InfiniteScrollerPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);
  const [hasMore, setHasMore] = useState(true);
  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.floor(data?.fetchBoards.length / 10 + 1) },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards.length) setHasMore(false);
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={hasMore}>
        {data?.fetchBoards.map((data) => (
          <div key={data._id}>
            <span>{data.writer}</span>
            <span>{data.title}</span>
            <span>{data.contents}</span>
          </div>
        ))}
      </InfiniteScroll>
    </>
  );
}
