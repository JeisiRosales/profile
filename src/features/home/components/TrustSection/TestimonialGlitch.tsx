"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TRUSTED_TESTIMONIALS } from "@/features/home/data/trust.data";

export function TestimonialGlitch({ TRUSTED_TESTIMONIALS_LIST }: { TRUSTED_TESTIMONIALS_LIST: typeof TRUSTED_TESTIMONIALS }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!TRUSTED_TESTIMONIALS_LIST || TRUSTED_TESTIMONIALS_LIST.length === 0) return;

        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % TRUSTED_TESTIMONIALS_LIST.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [TRUSTED_TESTIMONIALS_LIST]);

    if (!TRUSTED_TESTIMONIALS_LIST || TRUSTED_TESTIMONIALS_LIST.length === 0) {
        return (
            <div className="flex flex-col min-h-[120px] justify-center text-primary/50">
                <p className="text-lead italic">
                    [ Esperando datos del servidor... ]
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-[120px] justify-between">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, filter: "blur(10px)", x: -10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                    exit={{ opacity: 0, filter: "blur(10px)", x: 10 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-6"
                >
                    <p className="text-lead text-primary/70 max-w-4xl">
                        {TRUSTED_TESTIMONIALS_LIST[index].text}
                    </p>
                    <span className="text-subtitle uppercase text-primary/70">
                        ~ {TRUSTED_TESTIMONIALS_LIST[index].client}
                    </span>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}