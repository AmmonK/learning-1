var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BeanSchema = new Schema({
  name: String,
  tootiness: Number

})

module.exports = mongoose.model("Bean", BeanSchema);