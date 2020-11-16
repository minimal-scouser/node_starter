const MongoClient = require('mongodb').MongoClient;
const uri =
  'mongodb+srv://m001-student:GgwMOyutlsssQc9X@cluster0.uuao3.mongodb.net/products?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

dbWrapper = {};

// await client.connect();

dbWrapper.client = client;

// dbFunctions.readFromDb = async (vara) => {
//   console.log("hello to you from inside");
//   await client.db('products').collection("featured").find({}).forEach(
//     item => {
//       console.log("hello to you from loop");
//       console.log(item);
//     })
// }

module.exports = dbWrapper;
