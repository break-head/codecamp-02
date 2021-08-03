import {
  IBoardComment,
  IQuery,
} from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  data?: IQuery;
}

export interface IBoardCommentListUIItemProps {
  data: IBoardComment;
}
