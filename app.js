const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const path = require("path");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const app = express();

// MongoDB connection
require("dotenv").config();
mongoose.connect(process.env.MONGO_URL || "mongodb://localhost/portfolio-cms")
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

// Cloudinary setup
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "your-secret", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
const projectRoutes = require("./routes/projects");
app.use("/api/projects", projectRoutes);

// Start server
app.listen(8080, () => console.log("Server running on 8080"));