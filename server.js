const express = require('express')
const app = express()
const db = require('./db');
const MenuList = require('./models/menuList');

const bodyParser = require('body-parser');
app.use(bodyParser.json());   // jo bhi data aa rha he use hm body parser ke thorugh store karte he



app.post('/menu',async (req,res)=>{
  try {
   const data =  req.body;
   const newMenu =  new MenuList(data);
   const response = await newMenu.save();
   console.log("data saved successfully");
   res.status(200).json(response);
  } catch (error) {
   console.log(error);
   res.status(500).json({error:'internal server error'});
  }
})

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)