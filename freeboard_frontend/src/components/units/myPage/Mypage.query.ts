import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS_ISOLD = gql`
  query fetchUseditemsISold {
    fetchUseditemsISold {
      _id
      name
      price
      buyer {
        name
      }
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
      seller {
        name
      }
      createdAt
      buyer {
        name
      }
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
      createdAt
      impUid
      amount
      balance
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying($search: String) {
    fetchPointTransactionsOfBuying(search: $search) {
      _id
      amount
      createdAt
      balance
      useditem {
        name
      }
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_OF_SELLING = gql`
  query fetchPointTransactionsOfSelling($search: String, $page: Int) {
    fetchPointTransactionsOfSelling(search: $search, page: $page) {
      _id
      useditem {
        name
      }
      amount
      balance
      createdAt
    }
  }
`;
