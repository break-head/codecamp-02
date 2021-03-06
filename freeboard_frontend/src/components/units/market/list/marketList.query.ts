import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS_OF_THE_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      tags
      images
      pickedCount
      price
    }
  }
`;

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($search: String, $page: Int, $isSoldout: Boolean) {
    fetchUseditems(search: $search, page: $page, isSoldout: $isSoldout) {
      _id
      name
      remarks
      price
      tags
      images
      pickedCount
      seller {
        name
        picture
      }
    }
  }
`;
