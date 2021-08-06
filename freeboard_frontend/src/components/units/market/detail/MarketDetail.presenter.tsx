// import { Tooltip } from "antd";
import {
  Wrapper,
  CardWrapper,
  Header,
  AvatarWrapper,
  Avatar,
  Info,
  Writer,
  CreatedAt,
  IconWrapper,
  LinkIcon,
  LocationIcon,
  Body,
  InfoWrapper,
  TextInfoWrapper,
  SubTitle,
  Title,
  Price,
  LikeIconWrapper,
  LikeIcon,
  LikeCount,
  ImageWrapper,
  Image,
  Contents,
  Tag,
  Location,
} from "./MarketDetail.styles";
export default function MarketDetailUI() {
  return (
    <Wrapper>
      <CardWrapper>
        <Header>
          <AvatarWrapper>
            <Avatar />
            <Info>
              <Writer></Writer>
              <CreatedAt></CreatedAt>
            </Info>
          </AvatarWrapper>
          <IconWrapper>
            <LinkIcon />
            {/* <Tooltip placement="topRight"> */}
            <LocationIcon />
            {/* </Tooltip> */}
          </IconWrapper>
        </Header>
        <Body>
          <InfoWrapper>
            <TextInfoWrapper>
              <SubTitle></SubTitle>
              <Title></Title>
              <Price></Price>
            </TextInfoWrapper>
            <LikeIconWrapper>
              <LikeIcon />
              <LikeCount></LikeCount>
            </LikeIconWrapper>
          </InfoWrapper>
          <ImageWrapper>
            <Image />
          </ImageWrapper>
          <Contents></Contents>
          <Tag></Tag>
          <Location></Location>
        </Body>
      </CardWrapper>
      {/* <Button />
      <Button /> */}
    </Wrapper>
  );
}
