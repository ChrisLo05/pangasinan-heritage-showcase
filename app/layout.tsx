import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pangasinan Heritage Digital Showcase",
  description: "Explore the iconic heritage sites of Pangasinan - Hundred Islands, Bolinao Lighthouse, and Balungao Hot Spring",
  keywords: ["Pangasinan", "tourism", "heritage", "Philippines", "travel"],
  authors: [{ name: "Christian Lozada" }],
  openGraph: {
    title: "Pangasinan Heritage Digital Showcase",
    description: "Discover Pangasinan&apos;s most iconic heritage sites",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
