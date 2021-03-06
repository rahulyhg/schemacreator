var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate')(mongoose);
var uniqueValidator = require('mongoose-unique-validator');
var timestamps = require('mongoose-timestamp');
var validators = require('mongoose-validators');
var monguurl = require('monguurl');
require('mongoose-middleware').initialize(mongoose);

var Schema = mongoose.Schema;

var schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        uniqueCaseInsensitive: true
    },
    type: {
        type: String,
        required: true,

    },
    isPrimary: {
        type: Boolean,
        default: true
    },
    input: {
        type: JSON
        
    },
    SchemaJson: {
        type: JSON,
        required: true,

    },
    SchamaPageJsonView: {
        type: Boolean,
        default: true,
        

    },
    SchamaPageJsonCreate: {
        type: Boolean,
        default: true,
       

    },
    SchamaPageJsonEdit: {
        type: Boolean,
        default: true,
       

    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Types', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);