const express=require("express")
require('dotenv').config()
const app=express()
var cors = require('cors')
const mongodbconnection=require("./config/databaseConfiguration")
const {registrationController}=require("./controllers/ragistrationController")
app.use(express.json())
app.use(cors())
mongodbconnection()

let port=process.env.PORT || 5000

app.post("/ragistration",registrationController)

app.listen(port,()=>{
    console.log("server is running")
})

