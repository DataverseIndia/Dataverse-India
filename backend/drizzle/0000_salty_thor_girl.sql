CREATE TABLE IF NOT EXISTS "admins" (
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "blogs" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"password" text,
	"main_heading" text,
	"main_paragraph" text,
	"sub_heading_1" text,
	"para_1" text,
	"sub_heading_2" text,
	"para_2" text,
	"sub_heading_3" text,
	"para_3" text,
	"sub_heading_4" text,
	"para_4" text,
	"sub_heading_5" text,
	"para_5" text,
	"sub_heading_6" text,
	"para_6" text,
	"sub_heading_7" text,
	"para_7" text,
	"sub_heading_8" text,
	"para_8" text,
	"image_url" text,
	"published_at" timestamp
);
