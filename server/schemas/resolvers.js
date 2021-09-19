const { Book, User } = require('../models');

const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('..utils/auth');

const resolvers = {
    Query: {
        book: async () => {
            return Book.find({});
        },
        user: async () => {
            return User.find({});
        },
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
      
            return { token, user };
          },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });
      
            if (!user) {
              throw new AuthenticationError('This username not found!');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect password!');
            }
      
            const token = signToken(user);
            return { token, user };
          },
        
        SaveBook: async (parent, { bookData }, context) => {
            if (context.user) {
              const updatedUser = await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { savedBooks: bookData } },
                { new: true }
              );
              return updatedUser;
            }
        },
        RemoveBook: async (parent, { bookId }, context) => {
          if (context.user) {
            const updatedUser = await User.findOneAndUpdate(
              { _id: context.user._id },
              { $pull: { savedBooks: { bookId} } },
              { new: true }
            );
            return updatedUser;
          }
        },
    },
};

module.exports = resolvers;