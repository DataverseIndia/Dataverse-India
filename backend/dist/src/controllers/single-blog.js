import { blogs, db } from '../config/schema.js';
import { eq } from 'drizzle-orm';
export const blog = async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await db.select().from(blogs).where(eq(blogs.id, Number(id)));
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
//# sourceMappingURL=single-blog.js.map