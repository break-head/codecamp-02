import List01 from "../../commons/List";

export default function MypageUI(props) {
  console.log(props.rowTitle);
  return (
    <div>
      <List01 rowTitle={props.rowTitle} />
    </div>
  );
}
