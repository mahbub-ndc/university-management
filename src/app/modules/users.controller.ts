import { Request, Response } from "express";
import userInfo from './users.service'


const createUserInDb = async (req: Request, res: Response) => {
    try {
        const {user}  = req.body
        const result = await userInfo.createUser(user)
        res.status(200).json({
            success: true,
            message: "user created successfully",
            data: result,
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "ERROR"
        })
    }

}

export default {
    createUserInDb,
}