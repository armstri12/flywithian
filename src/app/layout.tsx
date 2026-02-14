import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fly With Ian — It's Your Turn To Fly",
  description:
    "After 20+ years of waiting, I finally learned to fly. Download the free guide and start your aviation journey today.",
  keywords: [
    "learn to fly",
    "student pilot",
    "flight training",
    "aviation",
    "private pilot",
    "discovery flight",
  ],
  openGraph: {
    title: "Fly With Ian — It's Your Turn To Fly",
    description:
      "After 20+ years of waiting, I finally learned to fly. Download the free guide and start your aviation journey today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
