import express from 'express'
import dotenv from 'dotenv'
import color from 'colors';
import connectDB from './config/db.js'
import productRouter from './routers/productRoute.js'
import userRouter from './routers/userRouter.js'
dotenv.config();

connectDB();
const app=express();

app.use(express.json())

app.use('/api/products',productRouter)
app.use('/api/users',userRouter)
app.use((err,req,res,next)=>{
  console.log(res);
  const statusCode=res.statusCode===200?500:res.statusCode
  res.status(statusCode);
  res.json({
    message:err.message,
    stack:process.env.NODE_ENV === "production"?null:err.stack
  })
})
const port = process.env.PORT || 9000
app.listen(port,console.log(`${process.env.NODE_ENV} Running ${port}`.green.bold));