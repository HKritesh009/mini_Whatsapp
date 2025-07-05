const mongoose = require("mongoose");

async function main(){
    await  mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
    }
    main()
    .then(()=>{
    console.log("Conection to DB Successfull");
    })
    .catch((error)=>{
    console.log(error);
    });
    
 const chat = require("./models/chat.js");

 chat.insertMany([
    {
        from:"Ritesh",
        to:"future_Ritesh",
        msg:"WHAT's going on tell me!!,im the Ritesh",
        created_at:new Date()
    }
    ,
      {
            from:"future_ritesh",
            to:"Ritesh",
            msg:"kEEP Going !! you are on Right Track , Hare Krishna!! Dont forget the Mission, that's it !! ",
            created_at:new Date()
     }
 ])
