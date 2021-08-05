import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  @font-face {
    font-family: "live";
    src: url("/fonts/scifibit.ttf");
  }

  #__next {
    height: 100%;
  }
`;
