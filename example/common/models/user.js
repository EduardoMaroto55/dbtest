const moongose = require('mongoose');

//Define the new schema
const Schema = moongose.Schema;

const userSchema = new Schema({
    username: String,
    fullname: String,
    email: String,
    birthday: Date,
    isActive: Boolean
});

const userModel = moongose.model('user',userSchema);

module.exports=userModel;