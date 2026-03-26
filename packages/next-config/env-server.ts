import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
import { vercel } from "@t3-oss/env-nextjs/presets-zod";

export const envServer = createEnv({
  extends: [
    vercel(), // Vercel System Environment Variables
  ],
  server: {
    NEXT_RUNTIME: z.enum(["nodejs", "edge"]).optional(), // Vercel environment variables
  },
  emptyStringAsUndefined: true,
  experimental__runtimeEnv: process.env,
});
