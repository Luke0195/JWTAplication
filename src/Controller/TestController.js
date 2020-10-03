import User from '../models/User';

class TestController {
 async index(request, response){
     try{
     const user = await User.findById(request.userId);
     return response.json(user);
     }catch(e){
         return response.status(401).json({message: 'Token Invalido'})
     }
}

}
export default new TestController();