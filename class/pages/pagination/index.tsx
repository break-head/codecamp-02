import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../src/commons/types/generated/types";
import styled from "@emotion/styled";
const FETCH_BOARDS = gql`
  query fetchBoards($aaa: Int) {
    fetchBoards(page: $aaa) {
      _id
      writer
      title
    }
  }
`;

const Column = styled.span`
  margin: 0px 10px;
`;

const Page = styled.span`
  margin: 0px 10px;
  cursor: pointer;
`;
export default function paginationPage() {
  const { data, refetch } = useQuery<IQuery>(FETCH_BOARDS, {
    variables: { aaa: 1 },
  });

  function onClickPage(event: any) {
    refetch({ aaa: Number(event.target.id) });
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
