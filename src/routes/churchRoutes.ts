import { Router } from "express"

import { createChurch, getAllChurches } from "../controllers/churchController"

const router = Router()

router.get("/", getAllChurches)
//router.get("/:id", getChurch)
router.post("/", createChurch)

export default router
