const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose');
const cors=require('cors');

const config = require('./db');
const BlogRoute=require('./BlogRouter');

mongoose.connect(config.DB,{useNewUrlParser:true}).then(
    ()=> {console.log('Database is connected!')},err => {console.log('Can not Connect to the databse',err)}
);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true}))
app.use(cors());
app.use(BlogRoute);


app.listen(8084, () => console.log('Blog server running on port 8084!'));