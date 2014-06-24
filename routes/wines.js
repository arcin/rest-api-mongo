// bring in mongo db
var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.db,
    BSON = mongo.BSONPure;

// configure database server
var server = new Server('localhost', 27017, {auto_reconnect: true}),
    db = new Db('winedb', server);

exports.findAll = function(req,res){
  res.send([{name: "wine1"}, {name: "wine2"}, {name: "wine3"}]);
};

exports.findById = function(req,res){
  res.send({id: req.params.id, name: "The Name", description: "description"});
};
