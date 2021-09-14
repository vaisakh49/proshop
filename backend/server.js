import colors from "colors"
import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"

import { errorHandler, notFound } from "./middileware/errorMiddleware.js"

import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `API running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
)
