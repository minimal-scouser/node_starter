const db = require('../db');
const products = {};

async function connectDb() {
  await db.client.connect();
}

products.createProduct = async () => {
  // db.mongoose.connection.once()
  return getAllFeatured();
};

function getAllFeatured() {
  return db.client.db('products').collection('featured').find({}).toArray();
}

connectDb();

module.exports = products;
