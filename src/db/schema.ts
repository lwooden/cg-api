import {
  integer,
  pgTable,
  varchar,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core"

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  churchId: integer().references(() => churchesTable.id),
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

export const productStatusEnum = pgEnum("product_status", [
  "available",
  "given",
  "pending",
])

export const productsTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
  status: productStatusEnum().notNull(),
  churchId: integer()
    .references(() => churchesTable.id)
    .notNull(),
  ownerId: integer()
    .references(() => usersTable.id)
    .notNull(),
  createdAt: timestamp("created_at").defaultNow(),
})
