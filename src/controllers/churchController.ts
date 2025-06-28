import { Request, Response, NextFunction } from "express"
import { connectToDatabase } from "../database/mongoose"
import Church from "../database/church.model"

export const createChurch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await connectToDatabase()

    const { name, address, city, state, zipcode, description, picture } =
      req.body

    const newChurch = await Church.create({
      name,
      address,
      description,
      city,
      state,
      zipcode,
    })
    console.log("Church created")
    res.status(201).json(newChurch)
  } catch (error) {
    next(error)
  }
}

export const getAllChurches = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await connectToDatabase()

    const churches = await Church.find() // Assuming Church is a Mongoose model
    console.log("Getting all churches from the database")
    res.status(200).json(churches)
  } catch (error) {
    next(error)
  }
}
