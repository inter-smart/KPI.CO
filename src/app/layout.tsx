"use client";

import { usePathname } from "next/navigation";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Change this route as needed
  const removeHeight = pathname === "/404";

  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased font-poppins`}>
        <Header />
        <main className={removeHeight ? "" : "min-h-screen"}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
