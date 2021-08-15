import { Tooltip } from "antd";
import {
  Wrapper,
  Header,
  AvatarWrapper,
  Avatar,
  InfoWrapper,
  LinkIconWrapper,
  Writer,
  CreatedAt,
  LinkIcon,
  LocationIcon,
  Body,
  TitleWrapper,
  ItemInfoWrapper,
  SubTitle,
  Title,
  Price,
  IconWrapper,
  LikeIcon,
  LikeCount,
  PictureWrapper,
  SliderImage,
  AAA,
  // SliderItem,
  // Picture,
  Contents,
  TagsWrapper,
  Tags,
  MapsWrapper,
  Maps,
  ButtonWrapper,
  Button,
} from "./MarketDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import DOMPurify from "dompurify";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
export default function MarketDetailUI(props: any) {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <divㅁㅁ
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "centerc",
        }}
      >
        <div
          style={{
            backgroundColor: "#ddd",
            borderRadius: "10px",
            padding: "10px",
            width: "50%",
          }}
        >
          <AAA style={{ margin: "0px" }}> {dots} </AAA>
        </div>
      </divㅁㅁ>
    ),
    customPaging: (i) => (
      <div
      // style={{
      //   width: "30px",
      //   color: "blue",
      //   border: "1px blue solid",
      // }}
      >
        <img
          style={{ width: "78px", height: "78px" }}
          src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[i]}`}
        />
      </div>
    ),
  };

  if (typeof window === "undefined") return <></>;
  return (
    <Wrapper>
      <Header>
        <AvatarWrapper>
          <Avatar src="/avatar.png" />
          <InfoWrapper>
            <Writer>{props.data?.fetchUseditem.seller.name}</Writer>
            <CreatedAt>
              {getDate(props.data?.fetchUseditem.createdAt)}
            </CreatedAt>
          </InfoWrapper>
        </AvatarWrapper>
        <LinkIconWrapper>
          <LinkIcon src="/boards/detail/link.png" />
          <Tooltip
            placement="topRight"
            title={`${props.data?.fetchUseditem.useditemAddress?.address}${props.data?.fetchUseditem.useditemAddress?.addressDetail}`}
          >
            <LocationIcon src="/boards/detail/location.png" />
          </Tooltip>
        </LinkIconWrapper>
      </Header>
      <Body>
        <TitleWrapper>
          <ItemInfoWrapper>
            <SubTitle>{props.data?.fetchUseditem.remarks}</SubTitle>
            <Title>{props.data?.fetchUseditem.name}</Title>
            <Price>{props.data?.fetchUseditem.price}</Price>
          </ItemInfoWrapper>
          <IconWrapper>
            <LikeIcon />
            <LikeCount></LikeCount>
          </IconWrapper>
        </TitleWrapper>
        <PictureWrapper>
          <Slider {...settings}>
            {props.data?.fetchUseditem.images?.map((data: any) => (
              <div key={data}>
                <SliderImage src={`https://storage.googleapis.com/${data}`} />
              </div>
            ))}
          </Slider>
        </PictureWrapper>
        <Contents
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(props.data?.fetchUseditem.contents),
          }}
        />
        <TagsWrapper>
          <Tags>{props.data?.fetchUseditem.tags}</Tags>
        </TagsWrapper>
        <MapsWrapper>
          <Maps></Maps>
        </MapsWrapper>
      </Body>
      <ButtonWrapper>
        <Button onClick={props.onClickMoveToList}>목록으로</Button>
        <Button>구매하기</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}
