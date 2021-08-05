import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import { useQuery, gql } from "@apollo/client";
import { createContext } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../src/commons/types/generated/types";
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

interface IContext {
  isEdit?: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}
export const BoardsEditPageContext = createContext<IContext>({});
export default function BoardsEditPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardsArgs>(
    FETCH_BOARD
  );
  const value = {
    isEdit: true,
    data,
  };

  return (
    <BoardsEditPageContext.Provider value={value}>
      <BoardWrite />
    </BoardsEditPageContext.Provider>
  );
}
