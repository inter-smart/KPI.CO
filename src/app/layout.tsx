"use client";
import "./globals.css";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReactLenis from "lenis/react";
import { NuqsAdapter } from 'nuqs/adapters/next/app'

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

  const removeHeight = pathname === "/404";

  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased font-poppins`}>
        <NuqsAdapter> 

        <ReactLenis
          root
          options={{
            lerp: 0.1,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            smoothWheel: true,
          }}
        >
          <Header />
          <main className={removeHeight ? "" : "min-h-screen"}>
            {children}
          </main>
          <Footer />
        </ReactLenis>
          </NuqsAdapter>
      </body>
    </html>
  );
}
