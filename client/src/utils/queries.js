import { gql } from '@apollo/client';

export const GET_ME = gql`
  query getUser {
    user {  
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
`;
