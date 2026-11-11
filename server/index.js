const express=require("express")
const app=express()
var cors = require('cors')
const {registrationController}=require("./controllers/ragistrationController")
app.use(express.json())
app.use(cors())

let port=process.env.PORT || 5000

app.post("/ragistration",registrationController)
app.listen(port,()=>{
    console.log("server is running")
})