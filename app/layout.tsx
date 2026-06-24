import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SSSABSTUDIO — Elevating Digital Experiences",
  description: "SSSABSTUDIO is a premium digital agency crafting bold designs and seamless interactions using cutting-edge typography.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/ClashDisplay_Compete_Font/css/clash-display.css" />
      </head>
      <body style={{ justifyContent: "center", alignItems: "center", display: "flex", height: "100vh", width: "100vw" }}>
        {children}
      </body>
    </html>
  );
}
