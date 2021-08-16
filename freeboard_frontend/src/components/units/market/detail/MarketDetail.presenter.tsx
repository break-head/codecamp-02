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
  Contents,
  TagsWrapper,
  Tags,
  MapsWrapper,
  ButtonWrapper,
  Button,
} from "./MarketDetail.styles";
import { getDate } from "../../../../commons/libraries/utils";
import DOMPurify from "dompurify";
import KakaoMap from "../../../commons/map/mapRead";
import Picture from "../../../commons/uploadImage";

export default function MarketDetailUI(props: any) {
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
          <Picture data={props.data} />
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
          <KakaoMap />
        </MapsWrapper>
      </Body>
      <ButtonWrapper>
        <Button onClick={props.onClickMoveToList}>목록으로</Button>
        <Button>구매하기</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}
