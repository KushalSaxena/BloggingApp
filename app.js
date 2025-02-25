const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const PORT = 5001;
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const { checkForAuthenticationCookie } = require("./middlewares/auth");

mongoose.connect("mongodb+srv://kushalsaxena2902:KBwM995SLEuvJfHL@cluster0.nkbdk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(console.log("mongodbConnected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(checkForAuthenticationCookie('token'));

app.get("/", (req, res) => {
    res.render("home", {
        user: req.user
    });
});

app.use("/user", userRoutes);
app.use("/blog", blogRoutes);

app.listen(PORT, () => console.log(`Server started on PORT : ${PORT}`));