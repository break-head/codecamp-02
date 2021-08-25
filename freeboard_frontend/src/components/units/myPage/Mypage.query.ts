import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS_ISOLD = gql`
  query fetchUseditemsIPicked {
    fetchUseditemsIPicked {
      _id
      name
      price
      buyer
      createdAt
    }
  }
`;

export const FETCH_USED_ITEMS_IPICKED = gql`
  query fetchUseditemsIPicked {
    fetchUseditemsIPicked {
      _id
      name
      price
      seller
      createdAt
      buyer
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions {
    fetchPointTransactions {
      createdAt
      status
      amount
      balance
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($search: String, $page: Int) {
    fetchPointTransactionsOfLoading(search: $search, page: $page) {
      _id
      impUid
      amount
      balance
      createdAt
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying($search: String, $page: Int) {
    fetchPointTransactionsOfSelling(search: $search, page: $page) {
      _id
      impUid
      useditem {
        name
      }
      amount
      balance
      createdAt
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_OF_SELLING = gql`
  query fetchPointTransactionsOfSelling($search: String, $page: Int) {
    fetchPointTransactionsOfSelling(search: $search, page: $page) {
      _id
      impUid
      useditem {
        name
      }
      amount
      balance
    }
  }
`;
