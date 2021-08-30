import { MenuWrapper, MenuTitle } from "./Mypage.styles";
import List01 from "../../commons/List/List1";
import List02 from "../../commons/List/List2";

export default function MypageUI(props) {
  return (
    <>
      {props.isMypage && (
        <div>
          <MenuWrapper>
            <MenuTitle onClick={props.onClickMovePage("myproduct")}>
              나의상품
            </MenuTitle>
            |
            <MenuTitle onClick={props.onClickMovePage("mypick")}>
              마이찜
            </MenuTitle>
          </MenuWrapper>
          <List01 rowTitle={props.rowTitle} data={props.data} />
        </div>
      )}

      {props.isMypoint && (
        <div>
          <MenuWrapper>
            <MenuTitle onClick={props.onClickMovePage("totallist")}>
              전체내역
            </MenuTitle>
            |
            <MenuTitle onClick={props.onClickMovePage("loadinglist")}>
              충전내역
            </MenuTitle>
            |
            <MenuTitle onClick={props.onClickMovePage("buyinglist")}>
              구매내역
            </MenuTitle>
            |
            <MenuTitle onClick={props.onClickMovePage("sellinglist")}>
              판매내역
            </MenuTitle>
          </MenuWrapper>
          <List02 rowTitle={props.rowTitle} data={props.data} />
        </div>
      )}
    </>
  );
}
