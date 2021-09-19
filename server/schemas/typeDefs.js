const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type User {
    _id: ID!
    username: String!
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
}

type Mutation {
    login(email: String!, password, String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: saveBookInput!): User
    removeBook(bookId: ID!): User
}

input saveBookInput {
    description: String
    title: String
    bookId: String
    image: String
    link: String
    authors: [String]
}
`;

module.exports = typeDefs;