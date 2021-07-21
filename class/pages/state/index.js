// import { useState } from "react";

// export default function StatePage() {
//   const [count, setCount] = useState(0);

//   function aaa() {
//     setCount(count + 1);
//     console.log(count);
//   }

//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={aaa}>+1</button>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function StatePage() {
//   const [state, setState] = useState("하이");

//   function aaa() {
//     setState("안녕");
//   }

//   return (
//     <>
//       <div>{state}</div>
//       <button onClick={aaa}>클릭</button>
//     </>
//   );
// }

// import { useState } from "react";

// export default function a() {
//   const ccc = String(Math.floor(Math.random() * 1000000)).padStart(6, 0);
//   const [token, tokenState] = useState("000000");
//   const aaa = true;
//   const [change, onoffState] = useState(false);
//   function asd() {
//     tokenState(ccc);
//     onoffState(aaa);
//   }
//   return (
//     <>
//       <div>{token}</div>
//       <button onClick={asd} disabled={change}>
//         인증번호
//       </button>
//     </>
//   );
// }
