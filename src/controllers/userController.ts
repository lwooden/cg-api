import { Request, Response, NextFunction } from "express"
import { drizzle } from "drizzle-orm/node-postgres"

import { usersTable } from "../db/schema"

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let db = drizzle(process.env.DATABASE_URL!)

    const { name, email } = req.body

    const user: typeof usersTable.$inferInsert = {
      name: name,
      email: email,
    }
    await db.insert(usersTable).values(user)
    console.log("User created")
    res.status(201).json(user)
  } catch (error) {
    next(error)
  }
}
