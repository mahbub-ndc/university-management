import { IUser } from "./users.interface";
import { User } from "./users.model"
import config from '../../index'
import { generatedUserId } from "./users.utils";

const createUser = async(user:IUser):Promise<IUser|null> =>{
   

    const id = await generatedUserId();
    user.id = id;
    
    if(!user.password){
        user.password = config.student_pass as string
    }

     const newUser = await User.create(user);

    if(!createUser){
        throw new Error('failed to create user')
        
    }
    return newUser; 
}
export default{
    createUser,
}