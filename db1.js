const mongoose = require('mongoose');
require('dotenv').config();

// const mongoUrl = 'mongodb://127.0.0.1:27017/hotels';
const mongoUrl = process.env.mongoUrl;

mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;
db.on('connected', ()=>{
    console.log('connected to mongodb server');
});
db.on('error', (err)=>{
    console.log('error show when try to connected');
})

db.on('disconnected', ()=>{
    console.log('server is not connected');
})
module.exports = db;
