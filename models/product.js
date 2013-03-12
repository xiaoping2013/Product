var async = require('async')
,   util = require('util')
,   url = require('url')
,   mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var GridStore = mongo.GridStore;
var Server = mongo.Server;
var ReplSetServers = mongo.ReplSetServers;
var Db = mongo.Db;
var result = {};
exports.queryMetadata = function(req,res){
    try{
        _queryMetadata(req,res);
    }catch (ex){
        result.code = '500';
        result.message = '服务器发生错误';
        result.isSuccessed = false;
        result.result = {};
        res.send(result);
        res.end();
    }
};
var _queryMetadata = function(req,res){
};