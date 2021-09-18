const db = require('../config/connection');
const { Book, User } = require('../models');

const bookData = require('./bookData.json');

db.once('open', async () => {
  await Book.deleteMany({});

  const bookList = await Book.insertMany(bookData);

  console.log('Data seeded!');
  process.exit(0);
});
