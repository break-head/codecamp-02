import { SliderItem, Wrapper } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    // cssEase: "linear",
  };

  return (
    <Wrapper>
      <Slider {...setting}>
        <div>
          <SliderItem src="/images/Layout/KakaoTalk_20200305_212308763.gif" />
        </div>
        <div>
          <SliderItem src="/images/Layout/KakaoTalk_20200305_212308763.gif" />
        </div>
        <div>
          <SliderItem src="/images/Layout/KakaoTalk_20200305_212308763.gif" />
        </div>
      </Slider>
    </Wrapper>
  );
}
