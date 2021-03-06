import { Tooltip } from "antd";
import {
  Avatar,
  AvatarWrapper,
  Body,
  Contents,
  Header,
  CreatedAt,
  IconWrapper,
  Info,
  LinkIcon,
  LikeCount,
  DislikeIcon,
  DislikeCount,
  LocationIcon,
  Title,
  Youtube,
  LikeWrapper,
  LikeIcon,
  Wrapper,
  CardWrapper,
  Writer,
  WrapperButton,
  Button,
  Picture,
  PictuerWrapper,
} from "./BoardDetail.styles";

export default function BoardDetailUi(props) {
  return (
    <Wrapper>
      <CardWrapper>
        <Header>
          <AvatarWrapper>
            <Avatar src="/avatar.png" />
            <Info>
              <Writer>{props.data?.fetchBoard.writer}</Writer>
              <CreatedAt>{props.data?.fetchBoard.createdAt}</CreatedAt>
            </Info>
          </AvatarWrapper>
          <IconWrapper>
            <LinkIcon src="/boards/detail/link.png" />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            >
              <LocationIcon src="/boards/detail/location.png" />
            </Tooltip>
          </IconWrapper>
        </Header>
        <Body>
          <Title>{props.data?.fetchBoard.title}</Title>
          <Contents>{props.data?.fetchBoard.contents}</Contents>
          <Youtube
            url={props.data?.fetchBoard.youtubeUrl}
            width="486px"
            height="240px"
          />
          <PictuerWrapper>
            {props.data?.fetchBoard.images?.map((data) => (
              <Picture
                key={data}
                src={`https://storage.googleapis.com/${data}`}
              />
            ))}
          </PictuerWrapper>

          <LikeWrapper>
            <IconWrapper>
              <LikeIcon onClick={props.onClickLike} />
              <LikeCount>{props.data?.fetchBoard.likeCount}</LikeCount>
            </IconWrapper>
            <IconWrapper>
              <DislikeIcon onClick={props.onClickDislike} />
              <DislikeCount>{props.data?.fetchBoard.dislikeCount}</DislikeCount>
            </IconWrapper>
          </LikeWrapper>
        </Body>
      </CardWrapper>
      <WrapperButton>
        <Button onClick={props.onClickMove}> ????????????</Button>
        <Button onClick={props.onClickMoveToEdit}>????????????</Button>
        <Button onClick={props.onClickDelete}> ????????????</Button>
      </WrapperButton>
    </Wrapper>
  );
}
