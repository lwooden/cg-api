import { Request, Response, NextFunction } from "express"
import { drizzle } from "drizzle-orm/node-postgres"

import { productsTable } from "../db/schema"

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let db = drizzle(process.env.DATABASE_URL!)

    const { name, description, status, churchId, ownerId } = req.body

    const product: typeof productsTable.$inferInsert = {
      name,
      description,
      status,
      churchId,
      ownerId,
    }
    await db.insert(productsTable).values(product)
    console.log("Product created")
    res.status(201).json(product)
  } catch (error) {
    next(error)
  }
}

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let db = drizzle(process.env.DATABASE_URL!)

    const products = await db.select().from(productsTable)
    console.log("Getting all products from the database: ", products)

    res.status(201).json(products)
  } catch (error) {
    next(error)
  }
}
