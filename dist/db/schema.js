"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.churchesTable = exports.usersTable = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.usersTable = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.integer)().primaryKey().generatedAlwaysAsIdentity(),
    name: (0, pg_core_1.varchar)({ length: 255 }).notNull(),
    email: (0, pg_core_1.varchar)({ length: 255 }).notNull().unique(),
    //   churchId: integer().references(() => churchesTable.id),
});
exports.churchesTable = (0, pg_core_1.pgTable)("churches", {
    id: (0, pg_core_1.integer)().primaryKey().generatedAlwaysAsIdentity(),
    name: (0, pg_core_1.varchar)({ length: 255 }).notNull(),
    address: (0, pg_core_1.varchar)({ length: 255 }).notNull(),
    email: (0, pg_core_1.varchar)({ length: 255 }).notNull().unique(),
    //   primaryAdminUserId: integer().references(() => usersTable.id),
    //   secondaryAdminUserId: integer().references(() => usersTable.id),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow(),
});
