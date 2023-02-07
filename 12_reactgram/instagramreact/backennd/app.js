const dotenv = require("dotenv").config()

const express = require("express")
const path = require("path")
const cors = require("cors")

const port = process.env.PORT

const app = express()

// config JSON an dorm data response
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Solve CORS
app.use(cors({credentials:true, origin: "http://localhost:3000"}))

// upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

// connection db
const db = require("./config/db") // senha db rkCePhmLvkh0SsqS

// routes
const router = require("./routes/Router")

app.listen(port, () => {
    console.log('App rodando na porta: ' + port)
})