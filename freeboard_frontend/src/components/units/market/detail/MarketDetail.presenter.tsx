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
import KakaoMapRead from "../../../commons/map/mapRead";
import Picture from "../../../commons/uploadImage";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";

export default function MarketDetailUI(props: any) {
  const { userInfo } = useContext(GlobalContext);
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
            <Price>{props.data?.fetchUseditem.price} 원</Price>
          </ItemInfoWrapper>
          <IconWrapper>
            <LikeIcon onClick={props.onClickToggle} src="/Picked.jpg" />
            <LikeCount>{props.data?.fetchUseditem.pickedCount}</LikeCount>
          </IconWrapper>
        </TitleWrapper>
        <PictureWrapper>
          <Picture data={props.data} />
        </PictureWrapper>
        {typeof window !== "undefined" ? (
          <Contents
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(props.data?.fetchUseditem.contents),
            }}
          />
        ) : (
          <div></div>
        )}
        <TagsWrapper>
          <Tags>{props.data?.fetchUseditem.tags}</Tags>
        </TagsWrapper>
        <MapsWrapper>
          <KakaoMapRead
            lat={props.data?.fetchUseditem.useditemAddress?.lat}
            lng={props.data?.fetchUseditem.useditemAddress?.lng}
            address={props.data?.fetchUseditem.useditemAddress?.address}
          />
        </MapsWrapper>
      </Body>
      <ButtonWrapper>
        <Button onClick={props.onClickMoveToList}>목록으로</Button>
        {props.data?.fetchUseditem.seller.name === userInfo.name ? (
          <Button>수정하기 </Button>
        ) : (
          <Button onClick={props.onClickbuying}>구매하기 </Button>
        )}
        {props.data?.fetchUseditem.seller.name === userInfo.name ? (
          <Button onClick={props.onClickMoveToDelete}>삭제하기</Button>
        ) : (
          <div></div>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
}
