import type { Config } from 'drizzle-kit';
import 'dotenv/config';

export default {
    schema: './src/config/schema.ts',
    driver: 'pg',
    out: './drizzle',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL,
    },
} satisfies Config;
