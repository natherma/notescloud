// initilizing expresss
let express = require('express');
let app = express();


// requiring mongodb connection
let dbConnect = require('./mongodb_connection.js');
// connecting to mongodb
dbConnect();

app.get('/',()=>
{
    console.log('Home page');
})

app.listen(3000,()=>
{
    console.log("Listening to port 3000");
})