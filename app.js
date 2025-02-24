const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const PORT = 5001;
const userRoutes = require("./routes/userRoutes");

mongoose.connect("mongodb+srv://kushalsaxena2902:KBwM995SLEuvJfHL@cluster0.nkbdk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(console.log("mongodbConnected"));

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.use("/user", userRoutes);

app.listen(PORT, () => console.log(`Server started on PORT : ${PORT}`));