import { envClient } from "@/env-client";

export function getSiteUrl(): string {
  return envClient.NEXT_PUBLIC_WEB_URL;
}
