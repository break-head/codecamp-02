import styled from "@emotion/styled";

const Wrapper = styled.div`
  background-color: red;
  width: 1000px;
  height: 1000px;
  @media (min-width: 768px) and (max-width: 1200px) {
    width: 500px;
    height: 500px;
    background-color: aqua;
  }

  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    background-color: blue;
  }
`;
export default function MediaPage() {
  return <Wrapper>상자</Wrapper>;
}
