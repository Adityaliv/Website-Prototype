import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "LuxeDrops - Premium Dropshipping Store",
  description: "Discover premium products with fast worldwide shipping. Your one-stop destination for trending, high-quality items delivered straight to your door.",
  keywords: "dropshipping, premium products, fast shipping, online store, trending items",
  openGraph: {
    title: "LuxeDrops - Premium Dropshipping Store",
    description: "Discover premium products with fast worldwide shipping.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
