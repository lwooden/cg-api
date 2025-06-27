import { Request, Response, NextFunction } from "express"
import { drizzle } from "drizzle-orm/node-postgres"
import { eq } from 'drizzle-orm';

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
    console.log("Getting all churches from the database");
    // Fetch all churches from the database
    const churches = await db.select().from(churchesTable)
    console.log("Getting all churches from the database: ", churches)

    res.status(201).json(churches)
  } catch (error) {
    next(error)
  }
}

// Add controller to get churches by id
export const getChurchById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let db = drizzle(process.env.DATABASE_URL!)

    const churchId = parseInt(req.params.id, 10)
    console.log("Getting church by id: ", churchId);
    if (isNaN(churchId)) {
      return res.status(400).json({ message: "Invalid church ID" })
    }

    const church = await db.select().from(churchesTable).where(eq(churchesTable.id, churchId));

    if (church.length === 0) {
      return res.status(404).json({ message: "Church not found" })
    }

    console.log("Getting church by id from the database: ", church[0])
    res.status(200).json(church[0])
  } catch (error) {
    next(error)
  }
}

