import { envServer as core } from "@repo/next-config/env-server";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  extends: [core],
  server: {},
  client: {},
  experimental__runtimeEnv: process.env,
});
