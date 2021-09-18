import { gql } from '@apollo/client';
// REVISE Below
export const SAVE_BOOK = gql`
  mutation saveBook($body: saveBookInput!) {
    saveBook(body: $body) {
      _id
      username
      email
      bookCount
      savedBooks {
          author
          description
          image
          link
          title
          bookId
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId)
        _id
        username
        email
        bookCount
        savedBooks {
          author
          description
          image
          link
          title
          bookId
      }
    }
  }
`;
// add more here
export const LOGIN_USER = gql ``;

export const ADD_USER = gql ``;