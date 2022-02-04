// requiring mongoose
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const NotesSchema = new schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        tag:{
            type:String,
            default:general
        },
        
        date:{
            type:Date,
            default:Date.now
        },     

    })

module.exports = mongoose.model('notes',NotesSchema);