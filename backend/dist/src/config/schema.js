import { serial, text, pgTable, timestamp } from "drizzle-orm/pg-core";
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { eq } from "drizzle-orm";
export const blogs = pgTable('blogs', {
    id: serial('id').primaryKey(),
    email: text('email').notNull(),
    password: text('password'),
    main_heading: text('main_heading'),
    main_paragraph: text('main_paragraph'),
    sub_heading_1: text('sub_heading_1'),
    para_1: text('para_1'),
    sub_heading_2: text('sub_heading_2'),
    para_2: text('para_2'),
    sub_heading_3: text('sub_heading_3'),
    para_3: text('para_3'),
    sub_heading_4: text('sub_heading_4'),
    para_4: text('para_4'),
    sub_heading_5: text('sub_heading_5'),
    para_5: text('para_5'),
    sub_heading_6: text('sub_heading_6'),
    para_6: text('para_6'),
    sub_heading_7: text('sub_heading_7'),
    para_7: text('para_7'),
    sub_heading_8: text('sub_heading_8'),
    para_8: text('para_8'),
    image_url: text('image_url'),
    published_at: timestamp('published_at')
});
export const admins = pgTable('admins', {
    name: text('name').notNull(),
    email: text('email').notNull(),
    password: text('password').notNull(),
    last_login: timestamp('last_login')
});
// export type Blogs = typeof blogs.$inferSelect;
// export type New = typeof blogs.$inferInsert;
const client = postgres(process.env.DATABASE_URL);
export const db = drizzle(client);
export const getUserByEmail = async (email) => await db.select().from(admins).where(eq(admins.email, email));
//# sourceMappingURL=schema.js.map