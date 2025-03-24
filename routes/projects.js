const express = require("express");
const router = express.Router();
const Project = require("../models/project");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

// Multer setup for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Get all projects
router.get("/", async (req, res) => {
  const projects = await Project.find({});
  res.json(projects);
});

// Add a project with image upload
router.post("/", upload.single("image"), async (req, res) => {
  try {
    let imageUrl = "";
    if (req.file) {
      const result = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "portfolio" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        uploadStream.end(req.file.buffer);
      });
      imageUrl = result.secure_url;
    }

    const newProject = new Project({
      title: req.body.title,
      description: req.body.description,
      url: req.body.url,
      image: imageUrl
    });
    await newProject.save();
    res.json(newProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a project
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    let imageUrl;
    if (req.file) {
      const result = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "portfolio" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        uploadStream.end(req.file.buffer);
      });
      imageUrl = result.secure_url;
    }

    const updateData = {
      title: req.body.title,
      description: req.body.description,
      url: req.body.url
    };
    if (imageUrl) updateData.image = imageUrl;

    const updatedProject = await Project.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(updatedProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a project
router.delete("/:id", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Project deleted" });
});

module.exports = router;