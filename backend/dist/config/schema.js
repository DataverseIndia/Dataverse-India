"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByEmail = exports.db = exports.admins = exports.blogs = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const postgres_1 = __importDefault(require("postgres"));
const postgres_js_1 = require("drizzle-orm/postgres-js");
const drizzle_orm_1 = require("drizzle-orm");
exports.blogs = (0, pg_core_1.pgTable)('blogs', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    email: (0, pg_core_1.text)('email').notNull(),
    password: (0, pg_core_1.text)('password'),
    main_heading: (0, pg_core_1.text)('main_heading'),
    main_paragraph: (0, pg_core_1.text)('main_paragraph'),
    sub_heading_1: (0, pg_core_1.text)('sub_heading_1'),
    para_1: (0, pg_core_1.text)('para_1'),
    sub_heading_2: (0, pg_core_1.text)('sub_heading_2'),
    para_2: (0, pg_core_1.text)('para_2'),
    sub_heading_3: (0, pg_core_1.text)('sub_heading_3'),
    para_3: (0, pg_core_1.text)('para_3'),
    sub_heading_4: (0, pg_core_1.text)('sub_heading_4'),
    para_4: (0, pg_core_1.text)('para_4'),
    sub_heading_5: (0, pg_core_1.text)('sub_heading_5'),
    para_5: (0, pg_core_1.text)('para_5'),
    sub_heading_6: (0, pg_core_1.text)('sub_heading_6'),
    para_6: (0, pg_core_1.text)('para_6'),
    sub_heading_7: (0, pg_core_1.text)('sub_heading_7'),
    para_7: (0, pg_core_1.text)('para_7'),
    sub_heading_8: (0, pg_core_1.text)('sub_heading_8'),
    para_8: (0, pg_core_1.text)('para_8'),
    image_url: (0, pg_core_1.text)('image_url'),
    published_at: (0, pg_core_1.timestamp)('published_at')
});
exports.admins = (0, pg_core_1.pgTable)('admins', {
    name: (0, pg_core_1.text)('name').notNull(),
    email: (0, pg_core_1.text)('email').notNull(),
    password: (0, pg_core_1.text)('password').notNull(),
    last_login: (0, pg_core_1.timestamp)('last_login')
});
// export type Blogs = typeof blogs.$inferSelect;
// export type New = typeof blogs.$inferInsert;
const client = (0, postgres_1.default)(process.env.DATABASE_URL);
exports.db = (0, postgres_js_1.drizzle)(client);
const getUserByEmail = async (email) => await exports.db.select().from(exports.admins).where((0, drizzle_orm_1.eq)(exports.admins.email, email));
exports.getUserByEmail = getUserByEmail;
//# sourceMappingURL=schema.js.map