"use client";

import { motion, useSpring, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function BlogReadingProgress({
    children,
}: {
    children: React.ReactNode;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const clampedProgress = useTransform(scrollYProgress, [0, 1], [0, 1], {
        clamp: true,
    });

    const scaleX = useSpring(clampedProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div ref={containerRef} className="relative w-full">
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX,
                    position: "fixed",
                    top: "var(--header-y)",
                    left: 0,
                    right: 0,
                    height: 6,
                    transformOrigin: "0% 50%",
                    backgroundColor: "#FFC916",
                    zIndex: 9999,
                }}
            />
            {children}
        </div>
    );
}
