import {
  Wrapper,
  Title,
  Contents,
  Label,
  ContentsEditor,
  ContentsEdit,
  ContentsTextArea,
  ErrorMessage,
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
  // Image,
  Settings,
  Setting,
  Button,
} from "./marketWrite.styles";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import Input01 from "../../../commons/inputs/Input01";
export default function MarketWriteUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
      <Wrapper>
        <Title>상품 등록하기</Title>

        <Input01
          inputName="상품명"
          placeholder="상품명을 작성해주세요"
          type="text"
          register={{ ...props.register("name") }}
          errorMessage={props.errors.name?.message}
        />

        <Input01
          inputName="한줄요약"
          placeholder="판매 가격을 입력해주세요."
          type="text"
          register={{ ...props.register("remarks") }}
          errorMessage={props.errors.remarks?.message}
        />
        <Contents>
          <Label>상품설명</Label>
          <ContentsEditor>
            <ContentsEdit></ContentsEdit>
            <ContentsTextArea
              placeholder="상품을 설명해주세요"
              type="text"
              {...props.register("contents")}
            />
            <ErrorMessage>{props.errors.contents?.message}</ErrorMessage>
          </ContentsEditor>
        </Contents>
        <Input01
          inputName="판매가격"
          placeholder="판매 가격을 입력해주세요."
          type="text"
          register={{ ...props.register("price") }}
          errorMessage={props.errors.price?.message}
        />
        <Input01
          inputName="태그입력"
          placeholder="#태그 #태그 #태그"
          type="text"
          register={{ ...props.register("tags") }}
          errorMessage={props.errors.tags?.message}
        />
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
          {new Array(3).fill(1).map((data, index) => (
            <Uploads01
              key={`${data}_${index}`}
              index={index}
              onChangeFiles={props.onChangeFiles}
            ></Uploads01>
          ))}
        </Images>
        <Settings>
          <Label>메인 사진 설정</Label>
          <Setting>
            <Label>사진 1</Label>
            <Label>사진 2</Label>
          </Setting>
        </Settings>
        <Button type="submit" isActive="props.isActive">
          등록하기
        </Button>
      </Wrapper>
    </form>
  );
}
