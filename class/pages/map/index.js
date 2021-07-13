//const classmates = ["철수","영희","훈이"]
const classmates = ["철수", "영희", "훈이"];

export default function MapPage() {
  return (
    <div>
      {classmates.map((data) => (
        <div>{data}</div>
      ))}
    </div>
  );
}
