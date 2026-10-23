// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { ReduxProvider } from "./ReduxProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Research Ustad — Advancing Research. Empowering Scholars.",
    template: "%s | Research Ustad",
  },
  description:
    "Research Ustad is an interdisciplinary research platform empowering scholars through publications, mentorship, international conferences, and higher-study guidance.",
  keywords: [
    "Research Ustad",
    "research platform",
    "academic publication",
    "higher study",
    "international conference",
    "research mentorship",
  ],
  openGraph: {
    title: "Research Ustad",
    description:
      "Advancing Research. Empowering Global Scholars.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <ReduxProvider>
        <body suppressHydrationWarning className="font-sans antialiased">
          <Toaster position="top-right" richColors />
          {children}
        </body>
      </ReduxProvider>
    </html>
  );
}