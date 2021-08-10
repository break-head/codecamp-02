import { useEffect, useState } from "react";
import styled from "@emotion/styled";
const Column = styled.span`
  padding-right: 40px;
  padding-left: 40px;
`;

export default function BasketLoggedInpage() {
  const [baskets, setBaskets] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBaskets(items);
  }, []);

  return (
    <>
      <div>비회원으로 담은 장바구니</div>
      {baskets.map((data) => (
        <div key={data._id}>
          <Column>{data.writer}</Column>
          <Column>{data.title}</Column>
        </div>
      ))}
      <span>{}</span>
    </>
  );
}
