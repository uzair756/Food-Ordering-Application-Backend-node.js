// or as an es module:
// import { MongoClient } from 'mongodb'

const { request } = require("http");

// Connection URL
// const url = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.3';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'sale';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('chain');

//   // the following code examples can be pasted here...

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());

// const {MongoClient} = require('mongodb');
// const url = 'mongodb://127.0.0.1:27017';
// const database = 'sale'
// const client = new MongoClient(url);


// async function getdata(){
//     let result = await client.connect();
//     console.warn("connected to database successfully")
//     let db = result.db(database)
//     let collection = db.collection('chain');
//     let response = await collection.find({}).toArray();
//     console.log(response)
// }

// getdata();
// const {MongoClient} = require('mongodb')
// const url = 'mongodb://127.0.0.1:27017';
// const database = 'sale';
// const  client = new MongoClient(url);


// async function getdata(){
//     let result = await client.connect();
//     console.log('connected successfully')
//     let db = result.db(database);
//     let collection = db.collection('chain')
//     let response = await collection.find({}).toArray()
//     console.warn(response);
// }

// getdata();

// getconnect().then((resp)=>{
//     resp.find({}).toArray().then((data)=>{console.warn(data)})
// })
// const main=async()=>{
//     let data = await getconnect();
//     data =await data.find({}).toArray();
//     console.warn(data)
// }
// main()
// const {MongoClient} = require('mongodb')
// const url = "mongodb://127.0.0.1:27017";
// const database = "sale";
// const client = new MongoClient(url);

// const getconnect=async()=>{
//     let result = await client.connect();
//     db = result.db(database)
//     return db.collection('chain')

// }


// const add = async () => {

//     let data = await getconnect();
//     data = await data.insertOne(
//         { name: "a10", brand: "apple" }
//     );
//     if (data.acknowledged) {
//         console.warn("data entry successfull")
//     }
//     else {
//         console.warn("data entry unsuccessfull")
//     }

// }

// add();

// const {MongoClient} = require('mongodb');
// const url = 'mongodb://127.0.0.1:27017';
// const database = 'sale';
// const client = new MongoClient(url);

// const getconnect=async()=>{
//     let result = await client.connect();
//     db = await result.db(database);
//     return db.collection('chain')
// }

// const get=async()=>{
//     let data = await getconnect();
//     data = await data.insertOne({name:"s21",brand:"nokia"});
//     if (data.acknowledged){
//         console.warn("data aagya")
//     }
//     else
//     {
//         console.warn("nahi aaya data bhai")
//     }


// }


// const updatedata=async()=>{
//     let data = await getconnect();
//     data = await data.updateOne({name:'s21'},{$set: {name:"s22",brand:"apple"}})
//     // console.warn(data.modifiedCount)
//     if (data.acknowledged){
//         console.warn("data updated")
//     }
//     else
//     {
//         console.warn("not updated")
//     }
// }


// const deldata=async()=>{
//     let data = await getconnect();
//     data = await data.deleteOne({name:"s22"});
//     if (data.acknowledged){
//         console.warn("data deleted")
//     }
//     else
//     {
//         console.warn("not deleted")
//     }

// }

// deldata();
// const {MongoClient} = require('mongodb');
// const express = require('express');
// const url = 'mongodb://127.0.0.1:27017'
// const database = 'sale';
// const client = new MongoClient(url);
// const app = express();
// const mongodb = require('mongodb')

// const getconnect=async()=>{
//     let result = await client.connect();
//     db = await result.db(database);
//     return db.collection('chain');
// }

// app.use(express.json())

// app.get('/',async(req,resp)=>{
//     let data = await getconnect();
//     data = await data.find().toArray();
//     console.warn(data)
//     resp.send(data)
// })


// app.post('/',async(req,resp)=>{
//     let data = await getconnect();
//     data = await data.insertOne(req.body)
//     resp.send(data)
// })

// app.put('/:name',async(req,resp)=>{
//     let data = await getconnect();
//     data = await data.updateOne({name:req.params.name},{$set:req.body})
//     resp.send(data)
// })

// app.delete('/:id', async(req,resp) => {
//     let data = await getconnect();
//     data = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
//     resp.send(data);
// });

// app.listen(3000);

// const mongoose = require('mongoose')

// const main=async()=>{
//     await mongoose.connect('mongodb://127.0.0.1:27017/sale')
//     const productschema = new mongoose.Schema({
//         name:String
//     });
//     const productmodel = mongoose.model('chain',productschema)
//     let data = new productmodel({name:"Anil"})
//     let result = await data.save();
//     console.warn(result)


// }


// main()

// const mongoose = require('mongoose');
// await mongoose.connect('mongodb://127.0.0.1:27017/sale')
// const productschema = await mongoose.Schema({
//     name:String,
//     password:Number
// });

// const main=async()=>{
//     const product = new mongoose.model('chain',productschema)
//     const data = new product({name:"anil",password:10,age:10});
//     const result = await data.save();
//     console.warn(result)
// }
// main()
// const mongodb =require('mongodb')
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/sale');
// const productschema = new mongoose.Schema({
//     name:String,
//     age:Number,
//     email:String,
//     password:Number,
// })

// const enterdata = async()=>{
//     const product = new mongoose.model('chain',productschema);
//     let data = new product({ name:"Ahmed",email:"ahmed@gmail.com",age:21,password:2312});
//     let result = await data.save();


// }
// enterdata();
// const updatedata=async()=>{
//     const product = new mongoose.model('chain',productschema);
//     let data = await product.updateOne({name:"Ahmed"},{$set:{password:2121}})
//     console.log(data)
// }
// updatedata();

// const deletedata=async()=>{
//     const product = mongoose.model('chain',productschema)
//     let data = await product.deleteOne({name:"anil"})
//     console.warn(data)
// }
// deletedata();

// const finddata = async()=>{
//     const product = await mongoose.model('chain',productschema)
//     let data = await product.find({name:"Ahmed"})
//     console.log(data)

// }
// finddata();
// const mongoose = require('mongoose');
// const express = require('express');

// mongoose.connect('mongodb://127.0.0.1:27017/sale');

// const productschema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     email: String,
//     password: Number,
// });

// const app = express();
// app.use(express.json());



// app.post('/create', async (req, resp) => {
//     const product = mongoose.model('chain', productschema);
//     let data = new product({ name: 'Ali', age: 25, email: 'aali@gmail.com', password: 3131 });
//     let result = await data.save();
//     console.log(result);
//     resp.send(result);
// });


// app.get('/list', async (req, resp) => {
//     const product = mongoose.model('chain', productschema);
//     let data = await product.find();
//     console.log(data)
//     resp.send(data);
// });


// app.delete('/delete/:_id',async(req,resp)=>{
//     const product = await mongoose.model('chain',productschema);
//     let data = await product.deleteOne(req.params);
//     console.warn(data)
//     resp.send(data)
// })

// app.put('/enter/:_id',async(req,resp)=>{
//     const product = await mongoose.model('chain',productschema);
//     let data = await product.updateOne(req.params,{$set:req.body})
//     console.warn(data)
//     resp.send(data)

// })

// app.get('/search/:key', async (req, resp) => {
//     const product = mongoose.model('chain', productschema);
//     let data = await product.find({
//         '$or': [
//             { 'name': { $regex: req.params.key} },
//             { 'email': { $regex: req.params.key} }, 
//         ],
//     });
//     console.log(data);
//     resp.send(data);
// });


// app.listen(3000)

// const os = require('os')
// console.log(os.hostname())
// console.log(os.platform())
// console.warn(os.userInfo())
``
// const express = require('express')
// const EventEmitter = require('events');
// const app = express();

// const event = EventEmitter();

// let count = 0;
// event.on("apicalled",()=>{
//     count++;
//     console.log('event called',count)
// })


// event.emit('apicalled');//we will use this in the get post update delete function at the end 


// const express = require('express');
// const multer = require('multer');
// const app = express();


// const upload = multer({
//     storage:multer.diskStorage({
//         destination: function (req,file,cb){
//             cb(null,'uploads')
//         },
//         filename:function(req,file,cb){
//             cb(null,file.fieldname +"-"+Date.now()+".jpg")
//         }
//     })
// }).single("user_file")

// app.post('/upload',upload,async(req,resp)=>{
//     console.log('file upload')
// })
// app.listen(5000);


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { escape } = require("querystring");
const e = require("express");
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/sale');
const productschema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: Number,
});

app.post('/register', async (req, resp) => {
  const product = await mongoose.model('chains', productschema);
  let data = await new product(req.body);
  let result = await data.save();
  console.log(result);
  resp.send(result);
});

app.post('/login', async (req, resp) => {
  // const product = await mongoose.model('chains', productschema);
  // if (req.body.email && req.body.password) {
  //   let data = await product.findOne(req.body);
  //   if (data) {
  //     resp.send(req.body)
  //     console.log(req.body)
  //   }
  //   else {
//       resp.send({ result: "no results found" })
//     }
//   }
//   else {
//     resp.send({ result: "no result found" })
//   }
// })
  const product = await mongoose.model('chains', productschema);
  if (req.body.email && req.body.password) {
    let data = await product.findOne(req.body);
    if (data) {
      console.log(data);
      resp.send(data)
    }
    else {
      resp.send({ result: 'No user found' })
    }
  }
  else {
    resp.send({ result: 'no user found' })
  }
});



app.listen(3000);
