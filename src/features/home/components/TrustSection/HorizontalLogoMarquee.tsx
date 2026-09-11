"use client";

import { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { TRUSTED_CLIENTS } from "@/features/home/data/trust.data";

const MarqueeItem = ({ client, containerRef }: { client: typeof TRUSTED_CLIENTS[0], containerRef: React.RefObject<HTMLDivElement | null> }) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const scale = useMotionValue(0.7);
    const opacity = useMotionValue(0.3);

    useAnimationFrame(() => {
        if (!itemRef.current || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const itemRect = itemRef.current.getBoundingClientRect();

        const containerCenter = containerRect.left + containerRect.width / 2;
        const itemCenter = itemRect.left + itemRect.width / 2;

        const distance = Math.abs(containerCenter - itemCenter);
        const maxDist = containerRect.width / 2;

        const progress = Math.max(0, 1 - (distance / maxDist));

        scale.set(0.7 + progress * 0.5);
        opacity.set(0.3 + progress * 0.7);
    });

    return (
        <motion.div
            ref={itemRef}
            style={{ scale, opacity }}
            className="flex-shrink-0 mx-2 flex items-center justify-center w-[200px]"
        >
            {client.logoPath ? (
                <div
                    className="w-full h-12 bg-primary"
                    style={{
                        WebkitMaskImage: `url(${client.logoPath})`,
                        maskImage: `url(${client.logoPath})`,
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                    }}
                    title={client.name}
                />
            ) : (
                <span className="text-h3 uppercase tracking-widest text-primary text-center break-words leading-none">
                    {client.name}
                </span>
            )}
        </motion.div>
    );
};

export function HorizontalLogoMarquee({ clients }: { clients: typeof TRUSTED_CLIENTS }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

    if (!clients || clients.length === 0) return null;

    return (
        <div
            ref={containerRef}
            className="relative h-[100px] w-full flex items-center overflow-hidden"
            style={{
                maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
            }}
        >
            <motion.div
                className="flex items-center w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
            >
                {duplicatedClients.map((client, idx) => (
                    <MarqueeItem key={`${client.id}-${idx}`} client={client} containerRef={containerRef} />
                ))}
            </motion.div>
        </div>
    );
}