import "@/env/client"; // env validation at build time
import "@/env/server";

import type { NextConfig } from "next";
import baseNextConfig from "@repo/next-config/next-config";

const nextConfig: NextConfig = {
  ...baseNextConfig,
};

export default nextConfig;
