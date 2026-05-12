import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chiropractic India – Setting Standards for Chiropractic in India",
  description:
    "Chiropractic India is the national voice for chiropractic awareness, education, and advocacy. We promote drug-free, non-invasive, and holistic spinal care across India.",
  keywords: "chiropractic india, spinal health, chiropractic education, spine care india, chiropractic awareness",
  openGraph: {
    title: "Chiropractic India – Setting Standards for Chiropractic in India",
    description: "India's leading chiropractic awareness and education platform.",
    url: "https://chiropracticindia.com",
    siteName: "Chiropractic India",
    locale: "en_IN",
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
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
