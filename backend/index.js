// initilizing expresss
let express = require('express');
let app = express();

// requiring dotenv for using env variable
require('dotenv').config();

// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');



// requiring module
const User = require('./modules/Users');

// middleware
app.use(express.json());

// requiring mongodb connection
let dbConnect = require('./mongodb_connection.js');
// connecting to mongodb
dbConnect();


// End points of our App
app.post('/api/auth/createuser',[
    body('username').isLength({min:3}),
    body('email').isEmail(),
    body('password').isLength({min:5})
],(req,res)=>
{    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let user = User(req.body);
    user.save().then(()=>
    {
        res.json({message:"data received"});
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


app.listen(process.env.PORT,()=>
{
    console.log(`Listening to port ${process.env.PORT}`);
})