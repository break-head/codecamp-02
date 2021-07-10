import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import {} from "../../../styles/detail/bordId";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function DetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  return (
    <>
      <div>{data?.fetchBoard.writer}님</div>
      <div>{data?.fetchBoard.title}</div>
      <div>{data?.fetchBoard.contents}</div>

      {/* <Wrapper>
        <WrapperHead>







        </WrapperHead>
        <Wrapper_body>




        </Wrapper_body>
        <WrapperFooter>




        </WrapperFooter>
      </Wrapper> */}
    </>
  );
}
