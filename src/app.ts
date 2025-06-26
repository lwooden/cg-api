import express from "express"
import churchRoutes from "./routes/churchRoutes"

const app = express()

app.use(express.json())

// Routes
app.use("/api/churches", churchRoutes)

// Global error handler (should be after routes)
// app.use(errorHandler)

export default app
