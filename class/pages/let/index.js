export default function StatePage() {
  let count = 0;

  function aaa() {
    count = count + 1;
    // document.getElementById("rrr").innerText = count
    console.log(count);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={aaa}>+1</button>
    </div>
  );
}
