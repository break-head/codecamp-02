import styled from "@emotion/styled";

const MyImg = styled.img`
  width: 100px;
  height: 100px;
  position: relative;
`;
const MyImg2 = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0px;
  left: 0px;
`;

const Mydiv = styled.div`
  width: 100px;
  height: 100px;
  background-image: url("/mypage/profile.png");
  background-size: 100%;
`;

export default function ImagePage() {
  return (
    <>
      <MyImg src="/mypage/profile.png" />
      <MyImg2 src="/mypage/marker.png" />
      <Mydiv />
      <div>이미지연습</div>;
    </>
  );
}
