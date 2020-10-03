import User from '../models/User';

class UserController {


 async  store(request, response){
    const { email, password } = request.body;
    const user = await User.create({ email, password});
    const {_id } = user;
    return response.json(_id);
 
  
  }



}


export default new UserController();