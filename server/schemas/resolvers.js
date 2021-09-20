const { User } = require('../models');

const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('..utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, { user }) => {
          // if (context.user) {
          //   const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
          //   return userData;
          // }  
      return User.findOne({ _id: user._id }).populate('SavedBooks')
      },
  },

  Mutation: {
    login: async (parent, body) => {
      const user = await User.findOne({ email: body.email });
      if (!user) {
        return { message: 'User not found!' };
        }
      
      const correctPw = await user.isCorrectPassword(body.password);
      if (!correctPw) {
        return { message: 'Incorrect password!' };
        }
      
      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, body) => {
      const user = await User.create(body);

        if (!user) {
          return { message: 'Something is wrong.' };
        }
        const token = signToken(user);
        return { token, user };
    },
        
    SaveBook: async (parent, args, { user }) => {
      try {
        const updatedUser = await User.findOneAndUpdate(
          { _id: user._id },
          { $addToSet: { savedBooks: args } },
          { new: true }
          );
        return updatedUser;
      } catch (err) {
        return err
      }
    },

    RemoveBook: async (parent, args, { user }) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $pull: { savedBooks: { bookId: args.bookId} } },
        { new: true }
      );
      if (!updatedUser) {
        return { message: 'No user found with this ID.' };
      }
      return updatedUser;
    },
  },
};

module.exports = resolvers;