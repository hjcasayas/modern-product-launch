import type { Metadata } from "next";

import { Providers } from "@/components/providers";
import { LayoutComponent } from "@/components/layout.component";

import "./globals.css";

export const metadata: Metadata = {
  title: "Area",
  description:
    "Build buzz around your launch with this bold product template. A clean, focused design that makes it easy to highlight features, share updates, and drive early interest.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-7xl">
        <Providers>
          <LayoutComponent>{children}</LayoutComponent>
        </Providers>
      </body>
    </html>
  );
}
