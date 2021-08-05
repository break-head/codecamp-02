export default function HofPage() {
  const onClickButton = (aaa) => () => {
    alert(aaa);
  };
  return <button onClick={onClickButton("12345")}>저를 클릭해 주세요.</button>;
}
const onClickButton = (aaa) => {
  return () => {
    return alert(aaa);
  };
};
