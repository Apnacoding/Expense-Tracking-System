const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    Email:{
        type:'string',
        required:[true,'email is required'],
        unique:true
    },
    Password:{
        type:'string',
        required:[true,'password is required']
    }
})

module.exports=mongoose.model('User',userSchema)