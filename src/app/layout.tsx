// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ClientLayoutWrapper } from "@/components/LayoutWrapper";

import { Space_Grotesk } from "next/font/google";
const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Udi Yolk | Farm Fresh Eggs Delivered",
  description:
    "Premium pasture-raised eggs delivered from our family farm to your table. Experience the Golden Yolk difference with our nutritious, delicious eggs.",
  keywords:
    "farm fresh eggs, pasture raised eggs, organic eggs, egg delivery, local eggs",
  authors: [{ name: "Udi Yolk Farm" }],
  creator: "Udi Yolk Farm",
  publisher: "Udi Yolk Farm",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Udi Yolk | Farm Fresh Eggs Delivered",
    description:
      "Premium pasture-raised eggs delivered from our family farm to your table.",
    url: "https://udi-farm.vercel.app",
    siteName: "Udi Yolk",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Udi Yolk | Farm Fresh Eggs Delivered",
    description:
      "Premium pasture-raised eggs delivered from our family farm to your table.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${font.className}`}>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
