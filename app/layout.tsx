import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "即到搬屋 | 即到有限公司 | 搬屋,搬office,裝修存倉,儲存盒,棄置傢俬,村屋,居屋,公屋,住宅  | Promptly Move",
  description: "即到提供一站式搬屋服務，包括女團 Pack 箱、裝修存倉、傢俬存倉、棄置傢俬等，無論村屋、公屋、居屋、住宅、辦公室、商舖，港九新界都幫到你。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
