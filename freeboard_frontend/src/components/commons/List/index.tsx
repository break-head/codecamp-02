import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";

const TitleColumn = styled.div`
  width: 25%;
  font-size: 18px;
  font-weight: bold;
`;
const Row = styled.div`
  /* div:nth-child(1) {
    width: 10%;
  }
  div:nth-child(2) {
    width: 60%;
  }
  div:nth-child(3) {
    width: 15%;
  }
  div:nth-child(4) {
    width: 15%;
  } */
  width: 500px;
  height: 52px;
  line-height: 52px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  border-bottom: 1px solid #bdbd;
`;
export default function List01(props) {
  console.log(props.rowTitle);
  return (
    <>
      <Row>
        {props.rowTitle[5].map((el, index) => (
          <TitleColumn key={uuidv4()}>{el[index + 1]}</TitleColumn>
        ))}
      </Row>
      {props.스테이트의변수.map((data, index) => (
        <>
          <Row
            key={data._id}
            id={data._id}
            onClick={props.onClickMoveDetail(data._id)}
          >
            <Column>{10 - index}</Column>
            <Column>{data.title}</Column>
            <Column>{data.writer}</Column>
            <Column>{getDate(data.createdAt)}</Column>
            <Column>{getDate(data.createdAt)}</Column>
            <Column>{getDate(data.createdAt)}</Column>
          </Row>
        </>
      ))}
    </>
  );
}
