import { User } from "./users.model";

export const findUserFromDB = async () => {
    const userId = await User.findOne({}, { id: 1, _id: 0 }).sort({ createdAt: -1 }).lean();
    return userId?.id;
}

export const generatedUserId = async () => {

    const currentUserId = (await findUserFromDB()) || (0).toString().padStart(5, '0');
    const updatedId = (parseInt(currentUserId)+1).toString().padStart(5,'0');
  
    return updatedId;

}
