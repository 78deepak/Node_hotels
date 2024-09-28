const mongoose = require('mongoose');

const mongoUrl = 'mongodb://127.0.0.1:27017/hotels';

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
