import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saapless",
  description: "Fullstack monorepo starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
