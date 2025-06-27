import { Router } from "express"
import { createProduct } from "../controllers/productController"

const router = Router()

// router.get("/api/v1/products", getProducts)
router.post("/", createProduct)

export default router
