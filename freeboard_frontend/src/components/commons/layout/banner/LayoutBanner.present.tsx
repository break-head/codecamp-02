import { SliderItem, Wrapper } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider {...setting}>
        <div>
          <SliderItem src="/images/Layout/banner1.png" />
        </div>
        <div>
          <SliderItem src="/images/Layout/banner2.png" />
        </div>
        <div>
          <SliderItem src="/images/Layout/banner3.png" />
        </div>
      </Slider>
    </Wrapper>
  );
}
