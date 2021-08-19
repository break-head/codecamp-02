import { MenuItem, Wrapper } from "./LayoutNavigation.styles";

export default function LayoutNavigationUI(props: any) {
  return (
    <Wrapper>
      <MenuItem onClick={props.onClickMove}>여우게시판</MenuItem>
      <MenuItem onClick={props.onClickMoveBoards}>라이브게시판</MenuItem>
      <MenuItem onClick={props.onClickMoveMarket}>라이브상품</MenuItem>
      <MenuItem onClick={props.onClick}>마이페이지</MenuItem>
    </Wrapper>
  );
}
