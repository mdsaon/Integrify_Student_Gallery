const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path= require('path');
const students = require('./routes/api/students');
const app = express();

//app.use(express.static(path.join(__dirname, 'uploads')));
app.use(express.static('uploads'));
//bodyParser middleware
app.use(bodyParser.json());

//db Config
const db = require('./config/keys').mongoURI;

//connect to mongo
//Connect to DataBase
mongoose.connect(db, {useNewUrlParser: true})
        .then (() => console.log('MongoDB Connected'))
        .catch(err => console.log(err));
//use Routes
 app.use('/api/students' , students);
 //serve static assets if in production
 if(process.env.NODE_ENV === 'production') {
   //set static folder
   app.use(express.static('client/build'));

   app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
   });
 }
//Run the application to the server
const port = process.env.PORT || 5000;
app.listen(port, () =>console.log(`server is running on ${port}`));
