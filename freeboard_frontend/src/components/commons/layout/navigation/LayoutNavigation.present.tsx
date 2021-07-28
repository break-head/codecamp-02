import LayoutNavigation from "./LayoutNavigation.container";
import { MenuItem, Wrapper } from "./LayoutNavigation.styles";

export default function LayoutNavigationUI(props: any) {
  return (
    <Wrapper>
      <LayoutNavigation />
      <MenuItem onClick={props.onClickMove}>openApi</MenuItem>
      <MenuItem>라이브게시판</MenuItem>
      <MenuItem>라이브상품</MenuItem>
      <MenuItem>마이페이지</MenuItem>
    </Wrapper>
  );
}
