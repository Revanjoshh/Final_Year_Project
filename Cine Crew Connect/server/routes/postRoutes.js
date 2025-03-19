import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

// Get All Posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create Post
router.post("/", async (req, res) => {
  try {
    const { userId, image, caption } = req.body;
    const newPost = new Post({ userId, image, caption });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;


