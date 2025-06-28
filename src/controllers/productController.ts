import { Request, Response, NextFunction } from "express"
import { connectToDatabase } from "../database/mongoose"
import Product from "../database/product.model"
import User from "../database/user.model"
import Church from "../database/church.model"

// 1. Fetch the user
// 2. Stringify the _id
// 3. Then Parse the _id

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await connectToDatabase()

    const { name, description, status, category, ownerId, churchId, picture } =
      req.body

    const user = await User.findById({ _id: ownerId })
    console.log("user", user)
    const userId = JSON.stringify(user._id)
    console.log("userId", userId)

    const church = await Church.find({ churchId: churchId })
    console.log("church", church)
    const churchId2 = JSON.stringify(church[0].churchId)
    console.log("churchId2", churchId2)

    if (!user || !church) {
      throw new Error("User or Church not found")
    }

    const newProduct = await Product.create({
      name,
      description,
      status,
      category,
      ownerId: JSON.parse(userId),
      churchId: JSON.parse(churchId2),
      picture,
    })
    console.log("Product Created")
    console.log(newProduct)
    res.status(201).json(newProduct)
  } catch (error) {
    next(error)
  }
}
