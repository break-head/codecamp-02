import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { getDate } from "../../src/commons/libraries/utils";

const Row = styled.div`
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid gray;
  display: flex;

    :hover:not(:nth-of-type(1)){
    background-color: lightgray;
  }
`;
const Column = styled.div`
  width: 20%;
`;

const Button = styled.button``;
const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($aaa: ID!) {
    deleteBoard(boardId: $aaa)
  }
`;
export default function Map3Page() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  async function onClickDelete(event) {
    alert("해당 글을 삭제합니다~");
    try {
      await deleteBoard({
        variables: {
          aaa: event.target.id,
        },
        refetchQueries: [{ query: FETCH_BOARDS }],
      });
      alert("삭제가 완료되었습니다");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <Row>
        <Column>
          <input type="checkbox" />
        </Column>

        <Column>작성자</Column>
        <Column>제목</Column>
        <Column>작성일</Column>
      </Row>
      {data?.fetchBoards.map((data, index) => (
        <Row key={data._id}>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>{data.writer}</Column>
          <Column>{data.title}</Column>
          <Column>
            {getDate(data.createdAt)}
            {/* {new Date(data.createdAt).getFullYear()} -
            {String(new Date(data.createdAt).getMonth() + 1).padStart(2, "0")}-
            {new Date(data.createdAt).getDate()} */}
          </Column>
          <Column>
            <Button id={data._id} onClick={onClickDelete}>
              삭제하기
            </Button>
          </Column>
        </Row>
      ))}
    </div>
  );
}
