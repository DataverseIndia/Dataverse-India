"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blog = void 0;
const schema_1 = require("../config/schema");
const drizzle_orm_1 = require("drizzle-orm");
const blog = async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await schema_1.db.select().from(schema_1.blogs).where((0, drizzle_orm_1.eq)(schema_1.blogs.id, Number(id)));
        if (!blog) {
            res.status(404).json({ error: 'Blog not found' });
        }
        else {
            return res.status(200).send({
                msg: 'All Blogs',
                blog
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.blog = blog;
//# sourceMappingURL=single-blog.js.map