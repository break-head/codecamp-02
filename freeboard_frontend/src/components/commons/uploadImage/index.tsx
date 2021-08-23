import Slider from "react-slick";
import styled from "@emotion/styled";

const Ul = styled.ul`
  width: 100%;
  /* padding-top: 50px; */

  > li {
    width: 100px;
    height: 100px;
    margin: 10px;
  }
`;

export default function Picture(props: any) {
  const settings = {
    customPaging: function (i: any) {
      return (
        <a>
          <img
            style={{ width: "100px", height: "100px" }}
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[i]}`}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => <Ul>{dots}</Ul>,
  };

  return (
    <div
      style={{
        width: "650px",
        height: "700px",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "space-around",
      }}
    >
      <Slider {...settings}>
        {props.data?.fetchUseditem.images.map((data: any) => (
          <div key={data} style={{ width: "600px" }}>
            <img
              style={{
                width: "600px",
                height: "500px",
                margin: "auto",
                marginBottom: "150px",
              }}
              src={`https://storage.googleapis.com/${data}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
