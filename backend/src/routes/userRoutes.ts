import express from "express";
import { upload_blog } from "../controllers/upload-blog";
import { login } from "../controllers/login";
import { show_blog } from "../controllers/blog-tile";
import { blog } from "../controllers/single-blog";

export const router = express.Router();

router.post('/login', login)
router.post('/upload', upload_blog)
router.get('/blogs', show_blog)
router.get('/blog/:id', blog)
