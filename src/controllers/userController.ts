import { Request, Response, NextFunction } from "express"
import { connectToDatabase } from "../database/mongoose"
import User from "../database/user.model"

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await connectToDatabase()

    const { name, username, email } = req.body

    const newUser = User.create({
      name,
      username,
      email,
    })
    console.log("User Created")
    console.log(newUser)
    res.status(201).json(newUser)
  } catch (error) {
    next(error)
  }
}
