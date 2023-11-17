const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const morgan = require("morgan");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

mongoose
    .connect(process.env.MONGO_URI)
    .then((res) => {
        console.log(
            `MongoDB Connected: ${res.connection.host}`.white.bold.italic
        );
        app.listen(PORT, () => {
            console.log(`Server listening at port ${PORT}`.white.bold.italic);
        });
    })
    .catch((error) => console.log(error));

// routes
app.get("/", (req, res) => {
    res.status(200).json({ message: "Server is running! Bring it on!" });
});
