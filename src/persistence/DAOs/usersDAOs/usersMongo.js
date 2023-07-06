
import { usersModel } from '../../mongo/models/user.model.js';
import UsersDTO from '../../DTOs/users.dto.js';


export default class UserMongoManger {  

  async getUser(id) {
    try {
      const user = await usersModel.findById(id);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
  
  async getAllUsers() {
    try {
      const users = await usersModel.find();
      return users;
    } catch (error) {
      console.log(error);
    }
  }

  async createUser(objUser) {
    try {
      const userDTO = new UsersDTO(objUser); 
      const newUser = await usersModel.create(userDTO);
      return newUser;
    } catch (error) {
      console.log(error);
    }
  }

  async editUser(id, field, value){
    try {
      
    } catch (error) {
      
    }
  }

  
}
