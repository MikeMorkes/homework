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

  var collection = db.collection('emails')
  collection.find({}).toArray(function(err, docs) {
    console.log(" ");
    console.log("Number of emails: " + docs.length)
    db.close()
  })

})


MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  findOldest(db, function() {
  });


  findNewest(db, function() {
  });

  findMoney(db, function() {
  });

  mostProlific(db, function() {
    db.close();
  });

});


var findOldest = function(db, callback) {
   var cursor =db.collection('emails').find().sort( { "date": 1 } ).limit(1);
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.log(" ");
         console.log("******** Oldest Email ********");
         console.dir(doc);
      } else {
         callback();
      }
   });
};

var findNewest = function(db, callback) {
   var cursor =db.collection('emails').find().sort( { "date": -1 } ).limit(1);
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        console.log(" ");
        console.log("********* Newest Email *********");
         console.dir(doc);
      } else {
         callback();
      }
   });
};

var findMoney = function(db, callback) {
   var cursor =db.collection('emails').find( { "text": /money/i }, { "text": 1 } ).limit(1);
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        console.log(" ");
        console.log("********* An Email With Money In It *********");
         console.dir(doc);
      } else {
         callback();
      }
   });
};

var mostProlific = function(db, callback) {
   db.collection('emails').aggregate(
     [
       { $group: { "_id": "$sender", "count": { $sum:1 } } }, {$sort: {count: -1}}
     ]).limit(1).toArray(function(err, result) {
     assert.equal(err, null);
     console.log(" ");
     console.log("*********** Most Prolific Emailer **************")
     console.log(result);
     callback(result);
   });
};
