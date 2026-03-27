import type { ReactNode } from "react";

type RootLayoutProperties = {
  readonly params: Promise<{ locale: string }>;
  readonly children: ReactNode;
};

export default function RootLayout({ params, children }: RootLayoutProperties) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
