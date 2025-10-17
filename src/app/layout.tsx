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
  title: "GitHub Finder | Repo Finder & Profile Explorer",
  description:
    "Find your favorite GitHub repositories and users with ease using GitHub Finder. Search by username or repository name to get detailed information, followers, and insights.",
  verification: {
    google: "dlz20u5jtY4PZ1vkpYl1KEcVk77U30NSR4Xsp_9n3G4",
  },
  keywords: [
    "GitHub Finder",
    "GitHub Repo Finder",
    "GitHub Profile Search",
    "GitHub Repositories",
    "Developer Tools",
    "GitHub User Explorer",
  ],
  openGraph: {
    title: "GitHub Finder | Explore GitHub Profiles & Repositories",
    description:
      "Search any GitHub user or repository to explore their followers, following, and detailed insights instantly.",
    url: "https://github-finder-olive-iota.vercel.app/",
    siteName: "GitHub Finder",
    images: [
      {
        url: "https://github-finder-olive-iota.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "GitHub Finder App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GitHub Finder | Repo & Profile Search Tool",
    description:
      "Find and explore GitHub users, followers, and repositories instantly.",
    images: ["https://github-finder-olive-iota.vercel.app/og-image.png"],
  },
  alternates: {
    canonical: "https://github-finder-olive-iota.vercel.app/",
  },
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
