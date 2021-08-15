import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function Picture(props) {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img
            style={{ width: "20px", height: "20px" }}
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[i]}`}
            // src={`/images/Layout/peng0${i + 1}.png`}
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
  };

  return (
    <div
      style={{
        backgroundColor: "red",
        width: "400px",
        height: "400px",
        margin: "auto",
      }}
    >
      <Slider {...settings}>
        <div>
          <img
            style={{ width: "400px", height: "400px" }}
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[i]}`}
            // src={`/images/Layout/peng01.png`}
          />
        </div>
        <div>
          <img
            style={{ width: "400px", height: "400px" }}
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[i]}`}
            // src={`/images/Layout/peng02.png`}
          />
        </div>
        <div>
          <img
            style={{ width: "400px", height: "400px" }}
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[i]}`}
            // src={`/images/Layout/peng03.png`}
          />
        </div>
        <div>
          <img
            style={{ width: "400px", height: "400px" }}
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[i]}`}
            // src={`/images/Layout/peng04.png`}
          />
        </div>
        {/* {props.data?.fetchUseditem.images?.map((data: any) => (
          //   <div key={data}>
          <>
            <img src={`https://storage.googleapis.com/${data}`} />
          </>
          //   </div>
        ))} */}
      </Slider>
    </div>
  );
}
