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
  Picture,
  Contents,
  TagsWrapper,
  Tags,
  MapsWrapper,
  Maps,
  ButtonWrapper,
  Button,
} from "./MarketDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
export default function MarketDetailUI(props: any) {
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
          {props.data?.fetchUseditem.images?.map((data: any) => (
            <Picture
              key={data}
              src={`https://storage.googleapis.com/${data}`}
            />
          ))}
        </PictureWrapper>
        <Contents>
          <br />
          {props.data?.fetchUseditem.contents}
        </Contents>
        <TagsWrapper>
          <Tags>{props.data?.fetchUseditem.tags}</Tags>
        </TagsWrapper>
        <MapsWrapper>
          <Maps></Maps>
        </MapsWrapper>
      </Body>

      <ButtonWrapper>
        <Button>a</Button>
        <Button>b</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}
