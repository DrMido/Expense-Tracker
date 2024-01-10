require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const errorHandlerMiddleware = require("./errors/ErrorHandler");
const connectDB = require("./db/connect");
const {readdirSync} =require("fs")

// Middlewares
app.use(express.json());
app.use(cors());
app.use(errorHandlerMiddleware);

// Routes
readdirSync("./routes").map((route) => {
    app.use("/api/v1/", require(`./routes/`+route));
})
app.get("/", (req, res) => {
    res.send("Hello World");
})

const start = async () => {
    try {
        await connectDB();
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()