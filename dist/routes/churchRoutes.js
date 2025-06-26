"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const churchController_1 = require("../controllers/churchController");
const router = (0, express_1.Router)();
router.get("/", churchController_1.getChurches);
// router.get("/:id", getChurchById)
router.post("/", churchController_1.createChurch);
exports.default = router;
