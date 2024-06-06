const express=require('express')
const dotenv=require('dotenv')
const connectDB = require('./configuration/db')
const routes=require('./routes/userRoutes')

const app=express()
const port=8080

dotenv.config();
connectDB();

// router
// app.get('/',(req,res)=>{
//     res.send("welcome to my server")
// })
// hell0

app.use('/api/auth',routes)

app.listen(port,()=>{
    console.log('server running in port 8080')
})
