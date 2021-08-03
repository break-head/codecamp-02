import Paginations01 from "../../../commons/paginations/01/Paginations01.container";
import Searchbars01 from "../../../commons/searchbars/Searchbars01.container";
import {
  Wrapper,
  WrapperBody,
  Row,
  Column,
  TitleColumn,
  Button,
  PencilIcon,
  Footer,
} from "./ListPage.styles";
import { getDate } from "../../../../commons/libraries/utils";

export default function ListPageUi(props) {
  return (
    <Wrapper>
      <WrapperBody>
        <Searchbars01
          refetch={props.refetch}
          onChangeKeyword={props.onChangeKeyword}
        />
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
              <Column>{getDate(data.createdAt)}</Column>
            </Row>
          </>
        ))}
        <Footer>
          <Paginations01
            refetch={props.refetch}
            count={props.dataBoardsCount?.fetchBoardsCount}
            startPage={props.startPage}
            setStartPage={props.setStartPage}
          />
          <Button onClick={props.onClickMove}>
            <PencilIcon src="/images/board/list/write.png" />
            게시물 등록하기
          </Button>
        </Footer>
      </WrapperBody>
    </Wrapper>
  );
}
