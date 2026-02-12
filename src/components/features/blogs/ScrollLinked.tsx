"use client";

import { motion, useSpring, useScroll } from "motion/react";

export function ScrollLinked() {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
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
    );
}
