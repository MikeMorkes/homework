var mongo = require('mongodb')
var MongoClient = mongo.MongoClient
var assert = require('assert');

// Connection URL
// localhost = ip
// 27017 is the port
// enron is the database
// make sure your mongod is running
var url = 'mongodb://localhost:27017/enron'

MongoClient.connect(url, function(err, db) {
  if (err) { console.log("error!") }

  var collection = db.collection('emails');
  collection.find({}).toArray(function(err, docs) {
    console.log(docs.length);
    db.close();
  });

   var cursor = db.collection('emails').find().sort( { "date": 1 } ).limit(1);
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         console.log('herpaderp');
      };
    db.close();
  });

})
