// const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({
  //   text: 'Eat lunch'
  // }).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({
  //   text: 'Eat lunch'
  // }).then((result) =>{
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({
  //   completed: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // delete same users
  // db.collection('Users').deleteMany({
  //   name: 'Stefan'
  // }).then((result) => {
  //   console.log(result);
  // });

  // delete user by ObjectID and return that user
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('59e6169ab5806e4314b7641c')
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});