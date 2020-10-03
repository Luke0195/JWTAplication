import User from '../models/User';
import dotenv from 'dotenv';
dotenv.config({path: '.env'})
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
class SessionController {

  async store(request, response){
     const  { email, password } = request.body;
     const user = await User.findOne({email});
     
     if(!user)
      return response.status(400).json({message: 'Email Invalido'});
     

     const validatePassword = await bcrypt.compare(password, user.passwordHASH);

     if(!validatePassword)
     return response.status(401).json({message: 'Senha Invalida'},); 
      
     return  response.json({
       token:jwt.sign({ userId:  user._id}, process.env.TOKEN_SECRET,{
         expiresIn: process.env.TOKEN_EXPIRATION,
       })
     })
  }

}


export default new SessionController();