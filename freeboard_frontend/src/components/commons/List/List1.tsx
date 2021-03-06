import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../commons/libraries/utils";

const TitleColumn = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 150px;
  font-size: 18px;
  font-weight: bold;
`;
const Row = styled.div`
  width: 1200px;
  height: 52px;
  line-height: 52px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #bdbdbd;
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 150px;
`;

export default function List01(props: any) {
  console.log(props.data);
  return (
    <>
      <Row>
        {props.rowTitle.map((el: any, index: any) => (
          <TitleColumn key={uuidv4()}>{el[index + 1]}</TitleColumn>
        ))}
      </Row>
      {props.data?.map((data: any, index: any) => (
        <Row key={data._id} id={data._id}>
          <Column>{index + 1}</Column>
          <Column>{data.name}</Column>
          {data.buyer?.name ? (
            <Column style={{ color: "ffa000" }}>ํ๋งค์๋ฃ</Column>
          ) : (
            <Column></Column>
          )}
          <Column>{data.price}</Column>
          {data.seller?.name && <Column>{data.seller.name}</Column>}

          <Column>{getDate(data.createdAt)}</Column>
        </Row>
      ))}
    </>
  );
}
