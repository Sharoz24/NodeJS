const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url ='mongodb+srv://namastedev:Junaid123@namastenode.yrpu0.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName ='Helloworld';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  const data= {
    firstname: "Deepika",
    lastname: "Padukone",
    city: "Mumbai",
    phonenumber: "456789",
  };

  //Insert a data
  // const insertResult = await collection.insertOne(data);
  // console.log('Inserted documents =>', insertResult);

  // // READ
  // const findResult = await collection.find({}).toArray();
  // console.log('Found documents =>', findResult);

  // const countResult= await collection.countDocuments({});
  // console.log("Count of documents in the user collection =>", countResult);

  const result = await collection.find({firstname: "Deepika"}).count();
  console.log("result =>", result);
  

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());