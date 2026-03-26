import { envClient as core } from "@repo/next-config/env-client";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  extends: [core],
  server: {},
  client: {},
  runtimeEnv: {},
});
