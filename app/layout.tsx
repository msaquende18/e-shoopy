import type { Metadata } from "next";
import { josephan } from "./fonts";
import * as React from "react";
import "./globals.css";


export const metadata: Metadata = {
  title: "Shopi",
  description: "Market Shopi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen  ${josephan.className}`}>{children}</body>
    </html>
  );
}
