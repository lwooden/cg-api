import { Request, Response, NextFunction } from "express"
import { drizzle } from "drizzle-orm/node-postgres"

import { churchesTable } from "../db/schema"

export const createChurch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let db = drizzle(process.env.DATABASE_URL!)

    const { churchName, churchAddress, churchEmail } = req.body

    const church: typeof churchesTable.$inferInsert = {
      name: churchName,
      address: churchAddress,
      email: churchEmail,
    }
    await db.insert(churchesTable).values(church)
    console.log("Church created")
    res.status(201).json(church)
  } catch (error) {
    next(error)
  }
}

export const getChurches = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let db = drizzle(process.env.DATABASE_URL!)

    const churches = await db.select().from(churchesTable)
    console.log("Getting all churches from the database: ", churches)

    res.status(201).json(churches)
  } catch (error) {
    next(error)
  }
}
