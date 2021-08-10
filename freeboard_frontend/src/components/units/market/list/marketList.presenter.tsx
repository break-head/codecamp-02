import {
  Wrapper,
  PageTitle,
  BestProductWrapper,
  Column,
  Image,
  Title,
  Remarks,
  LikeIcon,
  Price,
  LikeCount,
  Body,
  SettingWrapper,
  SellingProductButton,
  SelledProductButton,
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
} from "./marketList.styles";

export default function MarketListUI() {
  return (
    <Wrapper>
      <PageTitle>베스트상품</PageTitle>
      <BestProductWrapper>
        <Column>
          <Image></Image>
          <Title></Title>
          <Remarks></Remarks>
          <LikeIcon></LikeIcon>
          <Price></Price>
          <LikeCount></LikeCount>
        </Column>
      </BestProductWrapper>
      <Body>
        <SettingWrapper>
          <SellingProductButton></SellingProductButton>
          <SelledProductButton></SelledProductButton>
          <SearchBox></SearchBox>
          <SearchDate></SearchDate>
          <SearchButton></SearchButton>
        </SettingWrapper>
        <Row>
          <ColumnImage></ColumnImage>
          <ColumnProductWrapper>
            <ColumnInfo>
              <ColumnTitle></ColumnTitle>
              <ColumnRemark></ColumnRemark>
              <ColumnTags></ColumnTags>
              <ColumnSellerInfo>
                <ColumnSellerName></ColumnSellerName>
                <ColumnSellerIcon></ColumnSellerIcon>
                <ColumnLikeIcon></ColumnLikeIcon>
                <ColumnLikeCount></ColumnLikeCount>
              </ColumnSellerInfo>
            </ColumnInfo>
            <ColumnPrice></ColumnPrice>
          </ColumnProductWrapper>
        </Row>
      </Body>
      <ButtonWrapper>
        <CreateProductButton></CreateProductButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
