// initilizing expresss
let express = require('express');
let app = express();

// requiring dotenv for using env variable
require('dotenv').config();

// requiring express validator to make validation easy
const { body, validationResult } = require('express-validator');

// requiring bcrypt
const bcrypt = require('bcrypt');

// requiring jwt
var jwt = require('jsonwebtoken');

// requiring mongodb connection
let dbConnect = require('./mongodb_connection.js');
// connecting to mongodb
dbConnect();

// requiring mongodb module
const User = require('./modules/Users');

// middleware
app.use(express.json());

// End points of our App

// endpoint for creating user
app.post('/api/auth/createuser',[
    body('username').isLength({min:3}),
    body('email').isEmail(),
    body('password').isLength({min:5})
    // using express-validator
],async(req,res)=>
{    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // password hashing for security reasons
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password,salt);
    let user = User({
        username:req.body.username,
        email:req.body.email,
        password:hash
    });
    user.save().then(()=>
    {
        var token = jwt.sign({ id: user.id }, 'shhhhh');
        res.json({token:token});
    })
    .catch(e=>
        {
            res.status(400).json({error:e.message});
        })
    
})


app.get('/api/notes',(req,res)=>
{
   res.send('notes');
})


// api port
app.listen(process.env.PORT,()=>
{
    console.log(`Listening to port ${process.env.PORT}`);
})