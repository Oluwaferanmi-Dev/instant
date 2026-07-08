import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Instant | Pro-Service Velocity",
  description: "Connect with service professionals instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col font-sans antialiased text-gray-900 bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
