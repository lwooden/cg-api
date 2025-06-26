import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core"

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  //   churchId: integer().references(() => churchesTable.id),
})

export const churchesTable = pgTable("churches", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  address: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  //   primaryAdminUserId: integer().references(() => usersTable.id),
  //   secondaryAdminUserId: integer().references(() => usersTable.id),
  createdAt: timestamp("created_at").defaultNow(),
})
