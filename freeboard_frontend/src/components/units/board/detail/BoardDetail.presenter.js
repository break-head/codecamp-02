import {
  Avatar,
  AvatarWrapper,
  // AdressWrapper,
  Body,
  Contents,
  Header,
  CreatedAt,
  IconWrapper,
  Info,
  LinkIcon,
  LocationIcon,
  Title,
  Wrapper,
  Writer,
} from "./BoardDetail.styles";

export default function BoardDetailUi(props) {
  return (
    <Wrapper>
      <Header>
        <AvatarWrapper>
          <Avatar src="/avatar.png" />
          <Info>
            <Writer>{props.qqq?.fetchBoard.writer}</Writer>
            <CreatedAt>{props.qqq?.fetchBoard.createdAt}</CreatedAt>
          </Info>
        </AvatarWrapper>
        <IconWrapper>
          <LinkIcon src="/boards/detail/link.png" />
          <LocationIcon src="/boards/detail/location.png" />
        </IconWrapper>
        {/* <AdressWrapper>
        <div> 서울특별시 영등포구 양산로 200 </div>
        <div> (영등포동 5가, 영등포시장역) 영등포 타임스퀘어 2층</div>
      </AdressWrapper> */}
      </Header>
      <Body>
        <Title>{props.qqq?.fetchBoard.title}</Title>
        <Contents>{props.qqq?.fetchBoard.contents}</Contents>
      </Body>
    </Wrapper>
  );
}
