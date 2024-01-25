"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show_blog = void 0;
const schema_1 = require("../config/schema");
const show_blog = async (req, res) => {
    try {
        const main_plate = await schema_1.db.select().from(schema_1.blogs);
        if (main_plate && main_plate.length > 0) {
            const simplifiedBlogs = main_plate.map((blog) => ({
                main_heading: blog.main_heading,
                main_paragraph: blog.main_paragraph,
                id: blog.id,
            }));
            return res.status(200).send({
                msg: 'All Blogs',
                blogs: simplifiedBlogs,
            });
        }
        else {
            return res.status(404).send({
                msg: 'No Blogs found',
                blogs: null
            });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({
            msg: 'Internal Server Error',
            blogs: null
        });
    }
};
exports.show_blog = show_blog;
//# sourceMappingURL=blog-tile.js.map