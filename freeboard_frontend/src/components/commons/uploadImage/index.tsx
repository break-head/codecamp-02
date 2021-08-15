import Slider from "react-slick";
import styled from "@emotion/styled";

const Ul = styled.ul`
  background-color: red;

  > li {
    width: 100px;
    height: 100px;
    margin: 10px;
  }
`;

export default function Picture(props) {
  const settings = {
    customPaging: function (i) {
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
    appendDots: (dots) => <Ul>{dots}</Ul>,
  };

  return (
    <div
      style={{
        width: "600px",
        height: "600px",
        margin: "auto",
      }}
    >
      <Slider {...settings}>
        {props.data?.fetchUseditem.images.map((data) => (
          <div key={data}>
            <img
              style={{
                width: "400px",
                height: "400px",
                margin: "auto",
                marginBottom: "80px",
              }}
              src={`https://storage.googleapis.com/${data}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
