import express from "express"
import churchRoutes from "./routes/churchRoutes"
import productRoutes from "./routes/productsRoutes"
import userRoutes from "./routes/usersRoutes"

const app = express()

app.use(express.json())

// Routes
app.use("/api/churches", churchRoutes)
app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)

// Global error handler (should be after routes)
// app.use(errorHandler)

export default app
