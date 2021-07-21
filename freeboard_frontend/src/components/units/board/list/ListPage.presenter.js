import {
  Wrapper,
  WrapperBody,
  Row,
  Column,
  TitleColumn,
  Button,
} from "./ListPage.styles";
import { getDate } from "../../../../commons/libraries/utils";

export default function ListPageUi(props) {
  return (
    <Wrapper>
      <WrapperBody>
        <Row>
          <TitleColumn>번호</TitleColumn>
          <TitleColumn>제목</TitleColumn>
          <TitleColumn>작성자</TitleColumn>
          <TitleColumn>작성일</TitleColumn>
        </Row>
        {props.data?.fetchBoards.map((data, index) => (
          <>
            <Row key={data._id}>
              <Column>{10 - index}</Column>
              <Column id={data._id} onClick={props.onClickMoveDetail}>
                {data.title}
              </Column>
              <Column>{data.writer}</Column>
              <Column>
                {getDate(data.createdAt)}
                {/* {new Date(data.createdAt).getFullYear()} -
          {String(new Date(data.createdAt).getMonth() + 1).padStart(2, "0")}-
          {new Date(data.createdAt).getDate()} */}
              </Column>
            </Row>
          </>
        ))}
        <Button onClick={props.onClickMove}>게시물등록하기</Button>
      </WrapperBody>
    </Wrapper>
  );
}
