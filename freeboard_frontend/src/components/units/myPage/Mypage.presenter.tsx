import { MenuWrapper, MenuTitle } from "./Mypage.styles";
import List01 from "../../commons/List/List1";
import List02 from "../../commons/List/List2";

export default function MypageUI(props) {
  return (
    <>
      {props.isMypage && (
        <div>
          <MenuWrapper>
            <MenuTitle onClick={props.onClickMymarket}>나의상품</MenuTitle>|
            <MenuTitle onClick={props.onClickMyPicked}>마이찜 </MenuTitle>
          </MenuWrapper>
          <List01
            rowTitle={props.rowTitle}
            data={props.data}
            index={props.index}
          />
        </div>
      )}

      {props.isMypoint && (
        <div>
          <MenuWrapper>
            <MenuTitle onClick={props.onClickTotalTransaction}>
              전체내역
            </MenuTitle>
            |
            <MenuTitle onClick={props.onClickLoadingTransaction}>
              충전내역
            </MenuTitle>
            |
            <MenuTitle onClick={props.onClickBuyingTransaction}>
              구매내역
            </MenuTitle>
            |
            <MenuTitle onClick={props.onClickSellingTransaction}>
              판매내역
            </MenuTitle>
          </MenuWrapper>
          <List02
            rowTitle={props.rowTitle}
            data={props.data}
            index={props.index}
          />
        </div>
      )}
    </>
  );
}
