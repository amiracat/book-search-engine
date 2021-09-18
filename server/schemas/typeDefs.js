const { gql } = require('apollo-server-express');
const { JsonWebTokenError } = require('jsonwebtoken');

const typeDefs = gql`
type Book {
    _id: ID!
    author: String!
    description: String
    title: String!
    bookId: String!
    image: String
    link: String
}

type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
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
    addUser(username: String!, password: String!, email: String!): Auth
    saveBook(body: saveBookInput): User
    removeBook(bookId: String!): User
}

type saveBookInput {
    description: String
    title: String
    bookId: String
    image: String
    link: String
    author: String
}
`;

module.exports = typeDefs;