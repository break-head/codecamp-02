import styled from "@emotion/styled";

const Wrapper = styled.div``;
const Number = styled.span``;
const Title = styled.span``;

const fruits = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];

fruits.map((data) => ({
  ...data,
  school: "다람쥐초등학교",
}));

export default function Map2Page() {
  return (
    <>
      {fruits
        .filter((data) => data.number % 2 === 0)
        //  ((data) => data.number <= 5)

        .map((data, key) => (
          <Wrapper key={key}>
            <Number>{data.number}. </Number> <Title> {data.title} </Title>{" "}
          </Wrapper>
        ))}
    </>
  );
}
