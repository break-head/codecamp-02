import {
  Wrapper,
  Title,
  Input,
  Contents,
  Label,
  ContentsEditor,
  ContentsEdit,
  ContentsTextArea,
  Location,
  LocationMap,
  Map,
  LocationDetail,
  GPS,
  Geography,
  GeographyInput,
  LocationOnIcon,
  Address,
  AddressInput,
  Images,
  Image,
  Settings,
  Setting,
  Button,
} from "./marketWrite.styles";
export default function MarketWriteUI() {
  return (
    <Wrapper>
      <Title>상품 등록하기</Title>
      {/* <Input label="상품명" placeholder="상품명을 작성해주세요" />
      <Input label="상품명" placeholder="상품명을 작성해주세요" /> */}
      <Input placeholder="상품명을 작성해주세요" />
      <Input placeholder="상품명을 작성해주세요" />
      <Contents>
        <Label>상품설명</Label>
        <ContentsEditor>
          <ContentsEdit></ContentsEdit>
          <ContentsTextArea placeholder="상품을 설명해주세요"></ContentsTextArea>
        </ContentsEditor>
      </Contents>
      {/* <Input label="판매 가격" placeholder="판매 가격을 입력해주세요" />
      <Input label="태그 입력" placeholder="#태그 #태그 #태그" /> */}
      <Input placeholder="판매 가격을 입력해주세요" />
      <Input placeholder="#태그 #태그 #태그" />
      <Location>
        <LocationMap>
          <Label>거래위치</Label>
          <Map></Map>
        </LocationMap>
        <LocationDetail>
          <GPS>
            <Label>GPS</Label>
            <Geography>
              <GeographyInput placeholder="위도(LAT)" />
              <LocationOnIcon src="/images/ic_location_on-24px.svg" />
              <GeographyInput placeholder="경도(LNG)" />
            </Geography>
          </GPS>
          <Address>
            <Label>주소</Label>
            <AddressInput></AddressInput>
            <AddressInput></AddressInput>
          </Address>
        </LocationDetail>
      </Location>
      <Images>
        <Label>사진 첨부</Label>
        <Image></Image>
      </Images>
      <Settings>
        <Label>메인 사진 설정</Label>
        <Setting>
          <Label>사진 1</Label>
          <Label>사진 2</Label>
        </Setting>
      </Settings>
      <Button>등록하기</Button>
    </Wrapper>
  );
}
