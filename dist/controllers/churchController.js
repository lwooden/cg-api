"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChurches = exports.createChurch = void 0;
const node_postgres_1 = require("drizzle-orm/node-postgres");
const schema_1 = require("../db/schema");
const createChurch = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let db = (0, node_postgres_1.drizzle)(process.env.DATABASE_URL);
        const { churchName, churchAddress, churchEmail } = req.body;
        const church = {
            name: churchName,
            address: churchAddress,
            email: churchEmail,
        };
        yield db.insert(schema_1.churchesTable).values(church);
        console.log("Church created");
        res.status(201).json(church);
    }
    catch (error) {
        next(error);
    }
});
exports.createChurch = createChurch;
const getChurches = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let db = (0, node_postgres_1.drizzle)(process.env.DATABASE_URL);
        const churches = yield db.select().from(schema_1.churchesTable);
        console.log("Getting all churches from the database: ", churches);
        res.status(201).json(churches);
    }
    catch (error) {
        next(error);
    }
});
exports.getChurches = getChurches;
