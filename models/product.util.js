var url = require('url')
,   util = require('util');
var QueryMetadataHelper = function(query){
    this.queryObj = query;
};
//javascript中的每个对象都有prototype属性,Javascript中对象的prototype属性解释是:
//返回对象类型原型的引用.
QueryMetadataHelper.prototype = {
    queryObj : {},
    parseQueryParam : function(){
        var query = this.queryObj;
        var params = {
            code : '0',
            message : '',
            isSuccessed : true,
            result : {}
        };
        var result = {};
        if(query.fileID){
            result["metadata.fileID"] = query.fileID;
            params.result.condition = result;
            params.result.fields = this.paraseQueryFields(query);
            return params;
        }
    },
    paraseQueryFields : function(query){
        var fieldType = query.fieldType || '0001';
        if('0001' == fieldType){
            return {'metadata.summary' : 0 };
        }else if('0002' == fieldType){
            return null;
        }
    }
};