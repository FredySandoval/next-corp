import type { ReactNode } from "react";

type RootLayoutProperties = {
  readonly children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProperties) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
