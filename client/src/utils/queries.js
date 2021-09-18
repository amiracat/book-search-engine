import { gql } from '@apollo/client';
// possibly need to modify query me line 4
export const GET_ME = gql`
  query me {
    _id
    email
    username
    savedBooks {
      bookId
      author
      description
      title
      image
      link
    }
  }
`;


// REVISE BELOW
// export const QUERY_USERS = gql`
//   query user {
//     user {
//       _id
//       username
//       email
//       password
//       savedBooks {

//       }
//     }
//   }
// `;

// export const QUERY_BOOKS = gql`
//   query book($_id: String) {
//     book(_id: $_id) {
//       _id
//       authors
//       description
//       bookId
//       image
//       link
//       title
//     }
//   }
// `;
