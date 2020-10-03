import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config({path: '.env'})
export default (request, response, next ) => {
  const  { authorization} = request.headers;

  if(!authorization)
    return response.status(401).json({message:'Token not provided'});

    const [, token] = authorization.split(' ');

    try{
      const dados = jwt.verify( token, process.env.TOKEN_SECRET) // Vamos verificar se o token é valido
      request.userId = dados.userId;
      return next();
    }catch(err){
      response.status(401).json({message: 'Token Expirado!'});
    }

}