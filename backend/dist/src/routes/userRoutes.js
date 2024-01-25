import express from "express";
import { upload_blog } from "../controllers/upload-blog.js";
import { login } from "../controllers/login.js";
import { show_blog } from "../controllers/blog-tile.js";
import { blog } from "../controllers/single-blog.js";
export const router = express.Router();
router.post('/login', login);
router.post('/upload', upload_blog);
router.get('/blogs', show_blog);
router.get('/blog/:id', blog);
//# sourceMappingURL=userRoutes.js.map