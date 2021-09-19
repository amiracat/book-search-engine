import { gql } from '@apollo/client';
// possibly need to modify query me line 4
export const QUERY_ME = gql`
  {
    me {
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
  }
`;
