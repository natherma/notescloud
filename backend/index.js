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

// Auth endpoints
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
        var token = jwt.sign({ id: user.id },process.env.JWTSECRET);
        res.json({token:token});
    })
    .catch(e=>
        {
            res.status(400).json({error:e.message});
        })
    
})

// login endpoint
app.post('/api/auth/login',[
    body('email','Enter a valid Email').isEmail(),
    body('password',"password can't be empty").exists()
    // using express-validator
],async(req,res)=>
{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let {email,password} = req.body;
    try
    {
        let user = await User.findOne({email});
        if(!user)
        {
             return res.status(400).json({message:"enter correct credentails"});
        }

        const passwordcompare = await bcrypt.compare(password,user.password);
        if(!passwordcompare)
        {
           return res.status(400).json({message:"enter correct credentails"});
        }
        var token = jwt.sign({ id: user.id },process.env.JWTSECRET);
        res.json({token:token});
    }
    catch(error)
    {
        res.status(500).json({error:error.message});
    }
})

// logedin user credentails
app.get('/api/auth/getuser',async (req,res)=>
{
    let token = req.query.token;
    try
    {
        let data_id = jwt.verify(token,process.env.JWTSECRET).id;
        let user = await User.findById(data_id).select('-password');
        res.send(user); 
    }
    catch(e)
    {
       res.status(401).json({message:e});
    }
})



// notes endpoint

app.get('/api/notes',(req,res)=>
{
   res.send('notes');
})


// api port
app.listen(process.env.PORT,()=>
{
    console.log(`Listening to port ${process.env.PORT}`);
})