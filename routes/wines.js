// bring in mongo db
var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.db,
    ObjectID = mongo.ObjectID;

// configure database server
var server = new Server('localhost', 27017, {auto_reconnect: true}),
    db = new Db('winedb', server);

// initialize database connection
db.open(function(err, db){
  if (!err) {
    console.log("Connected to 'winedb' database");
    db.collection('wines', {strict: true}, function(err, collection){
      if (err) {
        console.log("The 'wines' collection doesn't exist. Creating it with with the sample data...");
        populateDB();
      }
    });
  }
});

exports.findAll = function(req,res){
  // find all wines and return an array of objects.
  db.collection('wines', function(err, collection){
    collection.find().toArray(function(err, items){
      res.send(items);
    });
  });
};

exports.findById = function(req,res){
  var id = req.params.id;
  console.log("Retrieving wine: " + id);
  db.collection('wines', function(err, collection){
    collection.findOne({'id': new ObjectID(id), function(err, item){
      res.send(item);
    }});
  });
};