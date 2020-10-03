import express from 'express';
import mongoose from 'mongoose';
const app = express();



mongoose.connect('mongodb://localhost:27017/JWTFlux',{
  useCreateIndex:true,
  useNewUrlParser:true,
  useUnifiedTopology:true
});
app.listen(3330, ()=>{
  console.log('O servidor está rodando na porta http://localhost:3330');
})