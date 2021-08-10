import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      contents
      price
      tags
      images
      createdAt
      seller {
        name
        picture
      }
      useditemAddress {
        address
        addressDetail
      }
    }
  }
`;
