import { Page } from "./Paginations01.styles";
import { IPaginations01UIProps } from "./Paginations01.types";

export default function Paginations01UI(props: IPaginations01UIProps) {
  return (
    <div>
      <Page onClick={props.onClickPrevPage}>{`<`}</Page>
      {new Array(10).fill(1).map((_, index) => {
        const currentPage = props.startPage + index;
        return (
          currentPage <= props.lastPage && (
            <Page
              key={currentPage}
              onClick={props.onClickPage}
              id={String(currentPage)}
              isActive={currentPage === props.activedPage}
            >
              {currentPage}
            </Page>
          )
        );
      })}
      <Page onClick={props.onClickNextPage}>{`>`}</Page>
    </div>
  );
}
