import { useQuery, gql, useMutation } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;
export default function OptimisticUIPage() {
  const [likeBoard] = useMutation(LIKE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "611ce2362d1aa300298e6cb0" },
  });
  const onClickLike = (like) => () => {
    likeBoard({
      variables: { boardId: "611ce2362d1aa300298e6cb0" },
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARD,
      //       variables: { boardId: "611ce2362d1aa300298e6cb0" },
      //     },
      //   ],
      optimisticResponse: {
        likeBoard: like + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "611ce2362d1aa300298e6cb0" },
          data: {
            fetchBoard: {
              _id: "611ce2362d1aa300298e6cb0",
              __typename: "Board",
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>
        like: {data?.fetchBoard.likeCount}
        <button onClick={onClickLike(data?.fetchBoard.likeCount)}>
          like + 1
        </button>
      </div>
    </>
  );
}
