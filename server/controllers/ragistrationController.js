const User=require("../models/usersModels")
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const registrationController=(req,res)=>{
    const {fullname,email,password,confirmPassword,terms}=req.body
    let emailTest=emailRegex.test(email)
    const errors={}
    if(!fullname || !email || !password || !confirmPassword || !terms){
        if(!fullname)errors.fullname="name is required"
        if(!email)errors.email="email is required"
        if(!password)errors.password="password is required"
        if(!confirmPassword)errors.confirmPassword="confirmPassword is required"
        if(!terms)errors.terms="terms is required"
      return res.status(400).json({
        success:false,
        message:{errors}
      })
    }
    if(!emailTest){
        return res.status(400).json({
            success:false,
            message:"please enter a valid email"
        })
    }
    if(password !== confirmPassword){
        return res.status(400).json({
            success:false,
            message:"confirmpassword should be match with password"
        })
    }

    res.status(200).json({
        success:true,
        message:"Ragistration successfully done"
    })

    const dataStored= new User({
        fullname:fullname,
        email:email,
        password:password,
        terms:terms
    })
    

}
module.exports={registrationController}