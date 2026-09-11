"use client";

import { useMotionValue, useTransform, animate, motion } from "framer-motion";
import { useEffect } from "react";

export function AnimatedCounter({ value }: { value: number }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const controls = animate(count, value, { duration: 2, ease: "easeOut", delay: 0.5 });
        return controls.stop;
    }, [value, count]);

    return <motion.span>{rounded}</motion.span>;
}