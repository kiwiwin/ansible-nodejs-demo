var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Product = new Schema({
    name: {type: String},
    description: {type: String}
}); 

module.exports = mongoose.model("Product", Product);