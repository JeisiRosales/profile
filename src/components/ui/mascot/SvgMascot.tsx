"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sprite } from "./sprite-engine";

export type MascotAction = "idle" | "walk" | "work" | "loop";

interface SvgMascotProps {
    action: MascotAction;
    className?: string;
    size?: number;
    message?: string;
    variant?: "light" | "dark";
    bubbleAlign?: "left" | "center" | "right";
    accessory?: "none" | "headset" | "glasses" | "cap" | "band";
}

export function SvgMascot({
    action,
    className = "",
    size = 120,
    message,
    variant = "light",
    bubbleAlign = "center",
    accessory = "none"
}: SvgMascotProps) {
    const [isVisible, setIsVisible] = useState(false);

    // Paleta de colores y estilo
    const MASCOT_SKIN = {
        skin: 'terracotta' as const,
        hair: 'crop' as const,
        hairColor: 'ink' as const,
        eyes: 'square' as const,
        outfit: 'hoodie' as const,
        outfitMain: '#EB900C' as const,
        outfitTrim: '#394E27' as const,
        accessory: accessory as any,
    };

    const alignClasses = {
        left: "left-0 origin-bottom-left",
        right: "right-0 origin-bottom-right",
        center: "origin-bottom",
    };

    return (
        <div
            className={`relative inline-flex flex-col items-center justify-center ${className}`}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onClick={() => setIsVisible(!isVisible)}
        >

            {/* GLOBO DE DIÁLOGO ANIMADO */}
            <AnimatePresence>
                {isVisible && message && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className={`absolute bottom-full mb-2 w-max max-w-[220px] px-3 py-2 shadow-sm z-50 pointer-events-none border ${alignClasses[bubbleAlign]} ${variant === "dark"
                            ? "bg-primary border-cream/50 text-cream"
                            : "bg-cream border-primary/50 text-primary"
                            }`}
                    >
                        <p className="text-subtitle font-mono">
                            <span className={`animate-pulse mr-2 ${variant === "dark" ? "text-accent" : "text-secundary"}`}>&gt;_</span>
                            {message}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* (El Motor) */}
            <Sprite
                seed="b7d213"
                state={action}
                parts={MASCOT_SKIN}
                withStyles={true}
                size={size}
            />
        </div>
    );
}