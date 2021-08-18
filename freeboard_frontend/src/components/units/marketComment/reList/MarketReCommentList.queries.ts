import { gql } from "@apollo/client";

// export const FETCH_USEDITEM_QUESTIONS = gql`
//   query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
//     fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
//       _id
//       contents
//       user {
//         name
//       }
//       createdAt
//     }
//   }
// `;

// export const DELETE_USEDITEM_QUESTION = gql`
//   mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
//     deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
//   }
// `;

export const DELETE_USEDITEM_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;
