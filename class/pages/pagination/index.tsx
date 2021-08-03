import { useQuery, gql } from "@apollo/client";
import { IQuery } from "../../src/commons/types/generated/types";
import styled from "@emotion/styled";
import { MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

const Column = styled.span`
  margin: 0px 50px;
`;

const Page = styled.span`
  margin: 0px 10px;
  cursor: pointer;
`;

export default function PaginationPage() {
  const { data, refetch } = useQuery<IQuery>(FETCH_BOARDS, {
    variables: { page: 1 },
  });

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    refetch({ page: Number((event.target as Element).id) });
  }

  return (
    <div>
      {data?.fetchBoards.map((data) => (
        <div key={data._id}>
          <Column>{data.writer}</Column>
          <Column>{data.title}</Column>
        </div>
      ))}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data) => (
        <Page key={data} onClick={onClickPage} id={String(data)}>
          {data}
        </Page>
      ))}
    </div>
  );
}
