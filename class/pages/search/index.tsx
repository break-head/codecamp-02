import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import styled from "@emotion/styled";
import { ChangeEvent, MouseEvent, useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const Column = styled.span`
  padding: 0px 50px;
`;

const Page = styled.span`
  padding: 0px 10px;
`;

interface IProps {
  isMatched: boolean;
}
const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function onClickSearch() {
    refetch({ search: search });
    setKeyword(search);
  }

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    refetch({ search: keyword, page: Number((event.target as Element).id) });
  }

  return (
    <>
      <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색하기</button>
      {data?.fetchBoards.map((data) => (
        <div key={data._id}>
          <Column>{data.writer}</Column>
          <Column>
            {data.title
              .replaceAll(keyword, `@#$%${keyword}@#$%`)
              .split("@#$%")
              .map((data, index) => (
                <Word key={index} isMatched={keyword === data}>
                  {data}
                </Word>
              ))}
          </Column>
          <Column>{data.createdAt}</Column>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <Page key={index} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </Page>
      ))}
    </>
  );
}
