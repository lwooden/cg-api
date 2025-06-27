import { Router } from "express"
import { createUser } from "../controllers/userController"

const router = Router()

// router.get("/api/v1/products", getProducts)
router.post("/", createUser)

export default router
