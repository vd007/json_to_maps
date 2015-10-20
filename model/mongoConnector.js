/**
 * Created by lowdisk on 21/10/15.
 */


var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/cinema'

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log('mongo conneced')
    var collections = {
        shopslist: db.collection('places')
    }

    exports.collections = collections;
});