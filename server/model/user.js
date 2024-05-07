const mongoose= require("mongoose")
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        require:true,
        trim: true
    },
    lastname:{
        type:String,
        require:true,
        trim: true
    },
    password:{
        type:String,
        require:true,
        trim: true
    },
    email:{
        type:String,
        require:true,
        trim: true
    },
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"item"
    }],

    image:{
        type:String
        ,
        require:true
    }
});

module.exports = mongoose.model("User",userSchema)