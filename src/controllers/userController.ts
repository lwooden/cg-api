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

    console.log(req.body)

    const { name, picture, email } = req.body

    const newUser = await User.create({
      name,
      picture,
      email,
    })
    console.log("User Created")
    res.status(201).json(newUser)
  } catch (error) {
    next(error)
  }
}
