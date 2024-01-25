"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const upload_blog_1 = require("../controllers/upload-blog");
const login_1 = require("../controllers/login");
const blog_tile_1 = require("../controllers/blog-tile");
const single_blog_1 = require("../controllers/single-blog");
exports.router = express_1.default.Router();
exports.router.post('/login', login_1.login);
exports.router.post('/upload', upload_blog_1.upload_blog);
exports.router.get('/blogs', blog_tile_1.show_blog);
exports.router.get('/blog/:id', single_blog_1.blog);
//# sourceMappingURL=userRoutes.js.map