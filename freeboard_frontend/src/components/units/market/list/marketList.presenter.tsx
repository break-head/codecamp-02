import {
  TotalWrapper,
  Wrapper,
  PageTitle,
  BestProductWrapper,
  Column,
  ContentsWrapper,
  ContentsTextWrapper,
  ContentsIconWrapper,
  Image,
  Title,
  Remarks,
  LikeIcon,
  Price,
  LikeCount,
  Body,
  SettingWrapper,
  SettingTextWrapper,
  SellingProductButton,
  SelledProductButton,
  SettingButtonWrapper,
  SearchBox,
  SearchDate,
  SearchButton,
  Row,
  ColumnImage,
  ColumnProductWrapper,
  ColumnInfo,
  ColumnTitle,
  ColumnRemark,
  ColumnTags,
  ColumnSellerInfo,
  ColumnSellerIcon,
  ColumnSellerName,
  ColumnLikeIcon,
  ColumnLikeCount,
  ColumnPrice,
  ButtonWrapper,
  CreateProductButton,
  SideWrapper,
  WatchedTitle,
  WatchedContents,
  WatchedIconWrapper,
  WatchedIcon,
  WatcedPicked,
  WatchedImage,
  WatchedRemark,
  WatchedPrice,
  WatchedTags,
} from "./marketList.styles";
import InfiniteScroll from "react-infinite-scroller";
export default function MarketListUI(props: any) {
  return (
    <TotalWrapper>
      <Wrapper>
        <PageTitle>베스트상품</PageTitle>
        <BestProductWrapper>
          {props.dataBestUsedItems?.fetchUseditemsOfTheBest.map((data: any) => (
            <Column
              key={data._id}
              id={data._id}
              onClick={props.onClickMoveDetail(data)}
            >
              <Image
                src={`https://storage.googleapis.com/${data.images?.[0]}`}
              />
              <ContentsWrapper>
                <ContentsTextWrapper>
                  <Title>{data.name}</Title>
                  <Remarks>{data.remarks}</Remarks>
                  <Price>{data.price}</Price>
                </ContentsTextWrapper>
                <ContentsIconWrapper>
                  <LikeIcon src="/Picked.jpg" />
                  <LikeCount>{data.pickedCount}</LikeCount>
                </ContentsIconWrapper>
              </ContentsWrapper>
            </Column>
          ))}
        </BestProductWrapper>
        <Body>
          <SettingWrapper>
            <SettingTextWrapper>
              <SellingProductButton onClick={props.onClickSwitch(false)}>
                판매중상품
              </SellingProductButton>
              <SelledProductButton onClick={props.onClickSwitch(true)}>
                판매된상품
              </SelledProductButton>
            </SettingTextWrapper>
            <SettingButtonWrapper>
              <SearchBox placeholder="제품을 검색해주세요"></SearchBox>
              <SearchDate>2020.12.12~2020.12.13</SearchDate>
              <SearchButton>검색</SearchButton>
            </SettingButtonWrapper>
          </SettingWrapper>
          <div style={{ width: "100%", height: "1000px", overflow: "auto" }}>
            <InfiniteScroll
              pageStart={0}
              loadMore={props.onLoadMore}
              hasMore={props.hasMore}
              useWindow={false}
            >
              {props.data?.fetchUseditems.map((data: any) => (
                // eslint-disable-next-line react/jsx-key
                <Row onClick={props.onClickMoveDetail(data)}>
                  {data.images?.[0] ? (
                    <ColumnImage
                      src={`https://storage.googleapis.com/${data.images?.[0]}`}
                    />
                  ) : (
                    <ColumnImage src="/market/login/102750939.1.jpg" />
                  )}
                  <ColumnProductWrapper>
                    <ColumnInfo>
                      <ColumnTitle>{data.name}</ColumnTitle>
                      <ColumnRemark>{data.remarks}</ColumnRemark>
                      <ColumnTags>{data.tags}</ColumnTags>
                      <ColumnSellerInfo>
                        <ColumnSellerIcon src="/market/login/대표이미지.png" />
                        <ColumnSellerName>{data.seller?.name}</ColumnSellerName>
                        <ColumnLikeIcon src="/Picked.jpg" />
                        <ColumnLikeCount>{data.pickedCount}</ColumnLikeCount>
                      </ColumnSellerInfo>
                    </ColumnInfo>
                    <ColumnPrice>{data.price} 원</ColumnPrice>
                  </ColumnProductWrapper>
                </Row>
              ))}
            </InfiniteScroll>
          </div>
        </Body>
        <ButtonWrapper>
          <CreateProductButton onClick={props.onClickMovetoCreate}>
            상품등록하기
          </CreateProductButton>
        </ButtonWrapper>
      </Wrapper>
      <SideWrapper>
        <WatchedTitle>오늘본상품</WatchedTitle>
        {props.accessToken ? (
          props.getLocal.map((data: any) => (
            <WatchedContents key={data._id}>
              <WatchedIconWrapper>
                <WatchedIcon src="/Picked.jpg" />
                <WatcedPicked>{data.pickedCount}</WatcedPicked>
              </WatchedIconWrapper>
              {data.images?.[0] ? (
                <WatchedImage
                  src={`https://storage.googleapis.com/${data.images?.[0]}`}
                />
              ) : (
                <WatchedImage src="/market/login/102750939.1.jpg" />
              )}
              <WatchedRemark>{data.remarks}</WatchedRemark>
              <WatchedPrice>{data.price}</WatchedPrice>
              <WatchedTags>{data.tags}</WatchedTags>
            </WatchedContents>
          ))
        ) : (
          <></>
        )}
      </SideWrapper>
    </TotalWrapper>
  );
}
