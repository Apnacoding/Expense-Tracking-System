const User=require('../model/userModel')
const jwt=require('jsonwebtoken')

const signupController=async(req,res)=>{
    const {Email,Password}=req.body
    try {
        const existingUser=await User.findOne({Email})
        if(existingUser){
            res.status(400).json({message:'user already exist'})
        }
        const newUser=new User({Email,Password})
        await newUser.save()
        res.status(201).json({message:'registration successfull'})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'signup server error'})
    }
}

const loginController=async(req,res)=>{
    const {Email,Password}=req.body
    try {
        const user=await User.findOne({Email})
        if(!user){
            res.status(400).json({message:'invalid email or password'})
        }
        const ismatch=User.comparePassword({Password})
        if(!ismatch){
            res.status(400).json({message:'invalid email or password'})
        }
        const payload={userId: User._id,email: Email}
        const token=jwt.sign(
            payload,process.env.JWT_SECRET,{expiresIn:'1h'}
        )
        res.status(200).json({message:'login successfull',token})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'login server error'})
    }
}

module.exports={signupController,loginController}