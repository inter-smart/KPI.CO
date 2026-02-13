"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
       
        if (pathname === "/404") return;

        // If not reloaded yet → redirect once
        if (pathname !== "/404") {
            router.replace("/404");
        }
    }, [pathname, router]);
    return (
        <div
            style={{
                minHeight: "700px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "20px",
            }}
        >
            {/* Image */}
            <Image
                src="/images/404.svg"
                alt="Page not found"
                width={65}
                height={65}
                style={{
                    maxWidth: "100%",
                    height: "auto",
                    marginBottom: "16px",
                }}
            />

            {/* 404 Title */}
            <h1
                style={{
                    fontWeight: 700,
                    fontSize: "clamp(60px, 10vw, 96px)",
                    lineHeight: "120%",
                    color: "#1C5396",
                    margin: 0,
                }}
            >
                404
            </h1>

            {/* Yellow Line */}
            <div
                style={{
                    width: "66px",
                    height: "3px",
                    backgroundColor: "#FFC107",
                    margin: "5px auto",
                }}
            />

            {/* Subtitle */}
            <p
                style={{
                    fontWeight: 500,
                    fontSize: "clamp(20px, 4vw, 28px)",
                    marginTop: "10px",
                }}
            >
                Page not found.
            </p>

            {/* Description */}
            <p
                style={{
                    fontWeight: 400,
                    fontSize: "clamp(14px, 3.5vw, 16px)",
                    lineHeight: "150%",
                    color: "#585858",
                    maxWidth: "554px",
                    marginTop: "16px",
                }}
            >
                This page may no longer exist. You can head back home to continue.
            </p>

            {/* Button */}
            <Link
                href="/"
                style={{
                    marginTop: "32px",
                    padding: "12px 24px",
                    backgroundColor: "#FFC916",
                    color: "#212121",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: 500,
                }}
            >
                Go to Homepage
            </Link>
        </div>
    );
}
