"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

// ── DecryptedText (self-contained, view-triggered, center reveal) ──
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()";

function DecryptedText({
    text,
    speed = 50,
    maxIterations = 10,
    className = "",
}: {
    text: string;
    speed?: number;
    maxIterations?: number;
    className?: string;
}) {
    const containerRef = useRef<HTMLSpanElement>(null);
    const [displayed, setDisplayed] = useState(text);
    const [hasAnimated, setHasAnimated] = useState(false);

    const scramble = useCallback(() => {
        const len = text.length;
        // Each character gets `maxIterations` scramble ticks before locking in.
        // Total ticks = len * iterationsPerChar  (one char locks every `maxIterations` ticks)
        const iterationsPerChar = maxIterations;
        let tick = 0;

        const interval = setInterval(() => {
            tick++;
            // How many characters are fully revealed so far
            const revealed = Math.floor(tick / iterationsPerChar);

            if (revealed >= len) {
                clearInterval(interval);
                setDisplayed(text);
                return;
            }

            const next = text
                .split("")
                .map((char, i) => {
                    if (char === " ") return " ";
                    if (i < revealed) return char;          // locked in
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                })
                .join("");

            setDisplayed(next);
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, maxIterations]);

    useEffect(() => {
        if (hasAnimated) return;
        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                    scramble();
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [hasAnimated, scramble]);

    // Start with scrambled text so it looks encrypted before entering view
    useEffect(() => {
        if (!hasAnimated) {
            setDisplayed(
                text
                    .split("")
                    .map((c) => (c === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]))
                    .join("")
            );
        }
    }, [text, hasAnimated]);

    return (
        <span ref={containerRef} className={className}>
            {displayed}
        </span>
    );
}

interface ServiceCardProps {
    service: Service;
    index: number;
}

interface Service {
    id: string;
    number: string;
    title: string;
    description: string;
}

const SERVICES: Service[] = [
    {
        id: "web",
        number: "01",
        title: "DESARROLLO WEB",
        description: "Diseño plataformas a la medida de tu modelo de negocio con un solo objetivo: convertir tráfico en oportunidades de alto valor."
    },
    {
        id: "ecommerce",
        number: "02",
        title: "TIENDAS ONLINE",
        description: "Plataformas de venta escalables con integraciones y flujos de compra sin fricción."
    },
    {
        id: "custom",
        number: "03",
        title: "DESARROLLO A MEDIDA",
        description: "Desarrollo Full-Stack a medida. Lógica compleja, bases de datos seguras y paneles de control operativos."
    }
];

function ServiceCard({ service, index }: ServiceCardProps) {
    return (
        <div className="group flex flex-col p-8 md:p-10 h-full hover:bg-primary/5 transition-colors overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                className="flex flex-col h-full"
            >
                <span className="text-[5rem] md:text-[6.5rem] lg:text-[8rem] leading-none text-cream mb-8 md:mb-12">
                    [{service.number}]
                </span>

                <h3 className="text-h3 uppercase text-cream mb-4">
                    {service.title}
                </h3>

                <p className="text-lead text-cream/80 max-w-sm">
                    {service.description}
                </p>
            </motion.div>
        </div>
    );
}

export function ServicesSection() {
    return (
        <section id="servicios" className="w-full bg-primary">
            <Container>
                <h2 className="text-h2 uppercase text-cream mb-12">
                    <DecryptedText
                        text="SERVICIOS DE INFRAESTRUCTURA"
                        speed={10}
                        maxIterations={2}
                    />
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 border border-cream divide-y md:divide-y-0 md:divide-x divide-cream">
                    {SERVICES.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            index={index}
                        />
                    ))}
                </div>

            </Container>
        </section>
    );
}