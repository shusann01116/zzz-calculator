import type { Metadata } from "next";
import { Inter as FontSans, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--fonto-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "ZZZ Calculator",
  description: "In game look Damage Calculator for Zennless Zone Zero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          notoSansJP.variable,
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
