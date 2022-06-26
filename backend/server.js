const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const connection = require("./config/db");

connection();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/products", require("./routes/products"));
app.use("/api/users", require("./routes/users"));
app.use("/api/transactions", require("./routes/transactions"));

app.use(express.static(path.join(__dirname, "..", "frontend", "build")));
app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "..", "frontend", "build", "index.html"))
);

app.all("*", (req, res, next) => {
    res.status(404).json({ message: "resource not found" });
});

app.listen(PORT, () => console.log("server started"));