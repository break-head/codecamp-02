// import { useState } from "react";
// import { useEffect } from "react";
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
  TodayWatchedWrapper,
} from "./marketList.styles";

export default function MarketListUI(props) {
 
  return (
    <TotalWrapper>
    <Wrapper>
      <div>
        <audio controls autoPlay={true} muted="muted">
           <source src="/자이언트펭TV_오프닝.mp3" type="audio/mp3"/>
        </audio>
     </div>
     
      {/* // <video src="/자이언트펭TV_오프닝.mp3" autoPlay={true}></video> */}
      <PageTitle>베스트상품</PageTitle>    
      <BestProductWrapper>
        {props.dataBestUsedItems?.fetchUseditemsOfTheBest.map((data) => (
            <Column
              // key={data._id}
              // id={data._id}
              onClick={props.onClickMoveDetail(data._id)}
            >
              <Image src={`https://storage.googleapis.com/${data.images.[0]}`} />
              <ContentsWrapper>
                <ContentsTextWrapper>
                  <Title>{data.title}</Title>
                  <Remarks>{data.remarks}</Remarks>
                  <Price>{data.price}</Price>
                </ContentsTextWrapper>
                <ContentsIconWrapper>
                  <LikeIcon></LikeIcon>
                  <LikeCount>{data.pickedCount}</LikeCount>
                </ContentsIconWrapper>
              </ContentsWrapper>
            </Column>
         
        ))}
      </BestProductWrapper>
      <Body>
        <SettingWrapper>
          <SettingTextWrapper>
            <SellingProductButton>판매중상품</SellingProductButton>
            <SelledProductButton>판매된상품</SelledProductButton>
          </SettingTextWrapper>
          <SettingButtonWrapper>
            <SearchBox placeholder="제품을 검색해주세요"></SearchBox>
            <SearchDate>2020.12.12~2020.12.13</SearchDate>
            <SearchButton>검색</SearchButton>
          </SettingButtonWrapper>
        </SettingWrapper>
        {props.data?.fetchUseditems.map((data)=>(
        <Row
          onClick={props.onClickMoveDetail(data._id)}>
          <ColumnImage 
          src={`https://storage.googleapis.com/${data.images.[0]}`}/>
          <ColumnProductWrapper>
            <ColumnInfo>
              <ColumnTitle>{data.title}</ColumnTitle>
              <ColumnRemark>{data.remarks}</ColumnRemark>
              <ColumnTags>{data.tags}</ColumnTags>
              <ColumnSellerInfo>
                <ColumnSellerIcon></ColumnSellerIcon>
                <ColumnSellerName>{data.seller.name}</ColumnSellerName>
                <ColumnLikeIcon></ColumnLikeIcon>
                <ColumnLikeCount>{data.pickedCount}</ColumnLikeCount>
              </ColumnSellerInfo>
            </ColumnInfo>
            <ColumnPrice>{data.price}</ColumnPrice>
          </ColumnProductWrapper>
        </Row>
        ))}
        
      </Body>
      <ButtonWrapper>
        <CreateProductButton>상품등록하기</CreateProductButton>
      </ButtonWrapper>
    </Wrapper>
    <SideWrapper>
          <TodayWatchedWrapper></TodayWatchedWrapper>
    </SideWrapper>
    </TotalWrapper>
  );
}
