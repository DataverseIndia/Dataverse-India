import { blogs, db } from "../config/schema";
import express from "express";

export const show_blog = async (req: express.Request, res: express.Response) => {
    try {
      const main_plate = await db.select().from(blogs);
      if (main_plate && main_plate.length > 0) {
        const simplifiedBlogs = main_plate.map((blog: { main_heading: string; main_paragraph: string; id: number; }) => ({
          main_heading: blog.main_heading,
          main_paragraph: blog.main_paragraph,
          id: blog.id,
        }));
        return res.status(200).send({
          msg: 'All Blogs',
          blogs: simplifiedBlogs,
        });
      } else {
        return res.status(404).send({
          msg: 'No Blogs found',
          blogs: null
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        msg: 'Internal Server Error',
        blogs: null
      });
    }
  }