import connectDB from "./src/config/db.js";
import dotenv from 'dotenv'
import express from 'express'
import cors from "cors"
import helmet from "helmet"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser";
import authRoutes from "./src/routes/auth.Routes.js"
dotenv.config()
connectDB()

const app = express()
app.use(express.json())
app.use(helmet())
app.use(cors({
     origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}))
app.use(cookieParser())
app.use(bodyParser.json()) // Use .json() for API requests
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api',authRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})