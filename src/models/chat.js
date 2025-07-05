
const mongoose= require("mongoose");
const chatSchema = new mongoose.Schema({
    from:{
        type:String ,
        required:true
    },
    to:{
        type:String,
        required : true,
    }
    ,
    msg:{
        type:String,
        required:true,
        maxLength:100
    },
    created_at:{
       type:Date,
       required:true
    },
    last_update:{
        type:Date,
     }
});

const chat =  mongoose.model("chat",chatSchema);

module.exports = chat;
