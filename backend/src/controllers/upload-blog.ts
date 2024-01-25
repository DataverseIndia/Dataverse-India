import { blogs, db } from '../config/schema';
import express from 'express';

export const upload_blog = async (req: express.Request, res: express.Response) => {
    const { main_heading, sub_heading_1, sub_heading_2, sub_heading_3, sub_heading_4, sub_heading_5, sub_heading_6, sub_heading_7, sub_heading_8 } = req.body;
    const { main_paragraph, para_1, para_2, para_3, para_4, para_5, para_6, para_7, para_8 } = req.body;
    const { image_url, published_at } = req.body
  
    const isUploaded = await db.insert(blogs).values({ email: req.body.mail, main_heading: main_heading, sub_heading_1: sub_heading_1, sub_heading_2: sub_heading_2, sub_heading_3: sub_heading_3, sub_heading_4: sub_heading_4, sub_heading_5: sub_heading_5, sub_heading_6: sub_heading_6, sub_heading_7: sub_heading_7, sub_heading_8: sub_heading_8, main_paragraph: main_paragraph, para_1: para_1, para_2: para_2, para_3: para_3, para_4: para_4, para_5: para_5, para_6: para_6, para_7: para_7, para_8: para_8, image_url: image_url, published_at: published_at });
    if (isUploaded) {
      return res.status(200).send({
        msg: 'Uploaded',
      });
    } else {
      return res.status(409).send({
        msg: 'Failed to upload',
      });
    }
  }