const { MongoClient } = require('mongodb');
const database = module.exports;

database.connect = async function connect() {
  database.client = await MongoClient.connect('mongodb://localhost:27017/', { useUnifiedTopology: true });
};
