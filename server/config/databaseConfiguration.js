const mongoose=require("mongoose")
function mongodbconnection(){
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("database connected!")
    })

}

module.exports=mongodbconnection