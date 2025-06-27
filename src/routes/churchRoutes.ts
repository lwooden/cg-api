import { Router } from "express"
import { createChurch, getChurches, getChurchById } from "../controllers/churchController"

const router = Router()

router.get("/", getChurches)
router.get("/:id", getChurchById)
router.post("/", createChurch)

export default router
