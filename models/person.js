const mongoose = require('mongoose');
const PORT = process.env.PORT;
  
const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    address:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    number:{
        type:String,
        required:true,
    },
    salary:{
        type:String,
        required:true
    }
});

const Person = mongoose.model('Person',personSchema);
module.exports = Person;