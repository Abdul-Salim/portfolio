import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdul Salim | Software Engineer",
  description: "Frontend Developer with 4 years of experience specializing in React, Next.js, and modern web technologies",
  keywords: ["frontend developer", "software engineer", "React", "Next.js", "Tailwind CSS", "Abdul Salim"],
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  authors: [{ name: "Abdul Salim" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdulsalim.com",
    title: "Abdul Salim | Software Engineer",
    description: "Frontend Developer with 4 years of experience specializing in React, Next.js, and modern web technologies",
    siteName: "Abdul Salim Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Salim | Software Engineer",
    description: "Frontend Developer with 4 years of experience specializing in React, Next.js, and modern web technologies",
    creator: "@abdulsalim",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <main className="min-h-screen bg-background">
          {children}
        </main>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
