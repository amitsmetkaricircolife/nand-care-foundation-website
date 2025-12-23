import { Inter } from "next/font/google";

import Footer from "@/components/layout/Footer";
import "./globals.css";
import { Providers } from "@/lib/provides";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "Nand Care Foundation | Making a Difference",
    template: "%s | Nand Care Foundation",
  },
  description:
    "Making a positive impact in communities through compassionate care and sustainable development programs",
  keywords: ["ngo", "charity", "donation", "campaigns", "social welfare"],
  authors: [{ name: "Nand Care Foundation" }],
  creator: "Nand Care Foundation",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yourdomain.com",
    siteName: "Nand Care Foundation",
    title: "Nand Care Foundation | Making a Difference",
    description:
      "Making a positive impact in communities through compassionate care",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nand Care Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nand Care Foundation",
    description: "Making a positive impact in communities",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
