"use client";
import "./globals.css";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReactLenis from "lenis/react";

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
        <ReactLenis
          root
          options={{
            lerp: 0.07,
            wheelMultiplier: 0.8,
            touchMultiplier: 1.5,
            smoothWheel: true,
          }}
        >
          <Header />
          <main className={removeHeight ? "" : "min-h-screen"}>
            {children}
          </main>
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
