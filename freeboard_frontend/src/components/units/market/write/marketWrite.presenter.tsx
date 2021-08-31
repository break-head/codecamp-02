import {
  Wrapper,
  Title,
  Contents,
  Label,
  ContentsEditor,
  ErrorMessage,
  Location,
  LocationMap,
  LocationDetail,
  GPS,
  Geography,
  GeographyInput,
  LocationOnIcon,
  Address,
  AddressInput,
  Images,
  Settings,
  Setting,
  Button,
} from "./marketWrite.styles";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import Input01 from "../../../commons/inputs/Input01";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import KakaoMapWrite from "../../../commons/map/mapWrite";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MarketWriteUI(props: any) {
  return (
    <form
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickUpdate : props.onSubmit
      )}
    >
      {props.isOpen && (
        <Modal
          title="주소검색"
          visible={true}
          onOk={() => props.onClickAddressSearch(false)}
          onCancel={() => props.onClickAddressSearch(false)}
        >
          <DaumPostcode onComplete={props.onCompleteAddressSearch} autoClose />
        </Modal>
      )}
      <Wrapper>
        {props.isEdit ? (
          <Title>상품 수정하기</Title>
        ) : (
          <Title>상품 등록하기</Title>
        )}

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
            <ReactQuill
              onChange={props.onChangeContents}
              value={props.contents}
              style={{ height: "100%" }}
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
            <KakaoMapWrite
              lat={props.lat}
              lng={props.lng}
              setLat={props.setLat}
              setLng={props.setLng}
              address={props.address}
            ></KakaoMapWrite>
          </LocationMap>
          <LocationDetail>
            <GPS>
              <Label>GPS</Label>
              <Geography>
                <GeographyInput value={props.lat} />
                <LocationOnIcon src="/images/ic_location_on-24px.svg" />
                <GeographyInput value={props.lng} />
              </Geography>
            </GPS>
            <Address>
              <Label>주소</Label>
              <AddressInput
                onClick={() => props.onClickAddressSearch(true)}
                value={props.address}
                defaultValue={
                  props.data?.fetchUseditem.useditemAddress?.address
                }
              />
            </Address>
          </LocationDetail>
        </Location>
        <Images>
          <Label>사진 첨부</Label>
          {new Array(4).fill(1).map((data, index) => (
            <Uploads01
              prevImg={props.prevImg}
              key={`${data}_${index}`}
              index={index}
              onChangeFiles={props.onChangeFiles}
              setPrevImg={props.setPrevImg}
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
        {props.isEdit ? (
          <Button type="submit">수정하기</Button>
        ) : (
          <Button type="submit">등록하기</Button>
        )}
      </Wrapper>
    </form>
  );
}
