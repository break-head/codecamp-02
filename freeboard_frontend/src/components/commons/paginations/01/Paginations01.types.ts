import { MouseEvent, SetStateAction } from "react";

export interface IPaginations01Props {
  refetch: any;
  count?: number;
  startPage: number;
  setStartPage: (value: SetStateAction<number>) => void;
}

export interface IPaginations01UIProps {
  startPage: number;
  lastPage: number;
  activedPage: number;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}
