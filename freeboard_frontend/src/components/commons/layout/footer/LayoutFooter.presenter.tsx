import {
  Wrapper,
  InnerBoxWrapper,
  TitleIcon,
  IconWrapper,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  CopyRightWrapper,
} from "./LayoutFooter.styles";

export default function LayoutFooterUI() {
  return (
    <Wrapper>
      <InnerBoxWrapper>
        <TitleIcon src="/ebs_logo.png" />
        <IconWrapper>
          <FacebookIcon />
          <InstagramIcon />
          <YoutubeIcon />
        </IconWrapper>
        <CopyRightWrapper>
          Copyright ⓒ EBS. All Rights Reserved.
        </CopyRightWrapper>
      </InnerBoxWrapper>
    </Wrapper>
  );
}
