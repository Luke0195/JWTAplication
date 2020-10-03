import User from '../models/User';
import bcrypt from 'bcryptjs';
class SessionController {

  async store(request, response){
     const  { email, password } = request.body;
     const user = await User.findOne({email});
     
     if(!user)
      return response.status(400).json({message: 'Email Invalido'});
     

     const validatePassword = await bcrypt.compare(password, user.passwordHASH);

     if(!validatePassword)
     return response.status(401).json({message: 'Senha Invalida'});
  }

}


export default new SessionController();