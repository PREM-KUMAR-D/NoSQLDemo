const mongoConnect = require('../util/database');
const getDb = require('../util/database').getDb;
const {mongoDb,ObjectId} = require('mongodb');

class User {
  constructor(name,email){
    this.name = name;
    this.email = email;
  }

  save(){
    const db = getDb();
    return db.collection('users').insertOne(this);



  }

  static findById(userId){
    const db = getDb();
    return db.collection('users').find({_id :new ObjectId(userId)}).next();
  }


}


module.exports = User;
