import { type Config } from "drizzle-kit";

import { env } from "~/env";
if (!env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL");
}

const nonPoolingUrl = env.DATABASE_URL.replace(":6543", ":5432");


export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: nonPoolingUrl,
  },
  tablesFilter: ["testniprojekt_*"],
} satisfies Config;
