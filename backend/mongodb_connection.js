// requiring dotenv for using env variable
require('dotenv').config();

const mongoose = require('mongoose');

const connectionUrl = process.env.CONNECTION_URL;

const connectToMongo = () =>
{
    mongoose.connect(connectionUrl,()=>
{
    console.log('connected to mongodb ');
})

}

module.exports = connectToMongo;