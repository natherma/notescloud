// initilizing expresss
let express = require('express');
let app = express();


// requiring mongodb connection
let dbConnect = require('./mongodb_connection.js');
// connecting to mongodb
dbConnect();

app.get('/api/auth',(req,res)=>
{
    res.send('auth');
})

app.get('/api/notes',(req,res)=>
{
    res.send('notes');
})


app.listen(3000,()=>
{
    console.log("Listening to port 3000");
})