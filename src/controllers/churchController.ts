import { Request, Response, NextFunction } from "express"
//import { drizzle } from "drizzle-orm/node-postgres"
import { connectToDatabase } from "../database/mongoose"
import Church from "../database/church.model"


export const createChurch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await connectToDatabase()

    const { churchId, name, address, city, state, zipcode } = req.body

    const newChurch = Church.create({
      churchId,
      name,
      address,
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

// //create controller for getting all churches from mongoose database
// export const getChurch = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     await connectToDatabase()

//     const churchId = req.params.id
//     if (!churchId) {
//       return res.status(400).json({ message: "Church ID is required" })
//     }

//     const church = await Church.findById(churchId)  // Assuming Church is a Mongoose model
//     if (!church) {

//       return res.status(404).json({ message: "Church not found" })
//     } else {
//       console.log("Getting church from the database: ", church)
//       res.status(200).json(church)
//     }
//   } catch (error) {
//     next(error)
//   }

// }

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