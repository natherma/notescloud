// requiring dotenv for using env variable
require('dotenv').config();

const mongoose = require('mongoose');

const connectionUrl = process.env.CONNECTION_URL;

const connectToMongo = () =>
{
    mongoose.connect(connectionUrl).then(()=>
    {
        console.log("connected to mongodb")
    })
    .catch(error=>
        {
            console.log(error)
        })
}

module.exports = connectToMongo;