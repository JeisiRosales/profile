"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SmartLink } from "@/components/ui/SmartLink";
import { Icon } from "@iconify/react";
import background from "@public/assets/hero/bg-hero.webp"
import { SOCIALS } from "@/data/social.data";
import { Button } from "@/components/ui/Button";

const FULL_TEXT = "DESARROLLO WEB DE ALTO RENDIMIENTO";
const CHAR_DELAY_MS = 40;

export function HeroSection() {
    const [visibleCount, setVisibleCount] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (visibleCount >= FULL_TEXT.length) {
            setIsComplete(true);
            return;
        }

        const timer = setTimeout(() => {
            setVisibleCount((prev) => prev + 1);
        }, CHAR_DELAY_MS);

        return () => clearTimeout(timer);
    }, [visibleCount]);

    function renderTypewriterText() {
        const chars: React.ReactNode[] = [];

        const cursor = !isComplete ? (
            <span
                key="cursor"
                className="inline-block w-[3px] h-[0.85em] bg-accent align-middle ml-[1px]"
                style={{ animation: "blink-caret 0.7s step-end infinite" }}
                aria-hidden="true"
            />
        ) : null;

        // Si no hay caracteres visibles aún, cursor al inicio
        if (visibleCount === 0 && cursor) {
            chars.push(cursor);
        }

        for (let i = 0; i < FULL_TEXT.length; i++) {
            // Insertar <br> después de "WEB " (posición 14 = inicio de "DE")
            if (i === 14) {
                chars.push(<br key="br" className="hidden md:block" />);
            }

            const isVisible = i < visibleCount;
            chars.push(
                <span
                    key={i}
                    style={{ opacity: isVisible ? 1 : 0 }}
                >
                    {FULL_TEXT[i]}
                </span>
            );

            // Cursor justo después del último carácter escrito
            if (i === visibleCount - 1 && cursor) {
                chars.push(cursor);
            }
        }

        return chars;
    }

    // Clases compartidas para las animaciones de entrada post-typewriter
    const revealBase = "transition-all duration-500 ease-out";
    const revealHidden = "opacity-0 -translate-x-8";
    const revealVisible = "opacity-100 translate-x-0";

    return (
        <section id="hero" className="relative w-full min-h-screen flex flex-col pt-32 pb-12 overflow-hidden">

            {/* IMAGEN DE FONDO */}
            <Image
                src={background}
                alt="Textura de fondo retro tech"
                fill
                className="object-[70%_0%] object-cover z-[-1] opacity-90"
                priority
            />

            {/* OVERLAY DE LECTURA (Degradado crema desde abajo/izquierda) */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t md:bg-gradient-to-tr from-background via-background/20  to-transparent md:via-background/20" />

            <div className="max-w-[1400px] w-full mx-auto px-6 md:px-16 lg:px-32 flex-1 flex flex-col justify-between relative z-10">

                {/* BLOQUE SUPERIOR (Alineado a la derecha) */}
                <div className="flex flex-col items-end text-left mt-4 md:mt-8">
                    <span className="text-display uppercase tracking-[0.1em] text-primary leading-none mb-4 opacity-30">
                        CRAFT
                    </span>

                    <div className="flex flex-col gap-1 text-tech-3 text-primary opacity-50">
                        <span>&gt;_ STATUS: DISPONIBLE PARA PROYECTOS</span>
                    </div>
                </div>

                {/* BLOQUE INFERIOR (Izquierda: Textos / Derecha: Redes) */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-12 mt-20">
                    <div className="flex flex-col max-w-4xl">
                        <h1 className="sr-only">
                            Desarrollo Web de Alto Rendimiento, Software a Medida y E-commerce en Nueva Esparta
                        </h1>

                        <div
                            aria-hidden="true"
                            className="text-h1 uppercase text-primary leading-[1.1] mb-6"
                        >
                            {renderTypewriterText()}
                        </div>

                        {/* Párrafo — aparece primero (delay 0ms) */}
                        <p
                            className={`text-lead text-primary/80 mb-10 max-w-xl leading-relaxed ${revealBase}
                                ${isComplete ? revealVisible : revealHidden}`}
                        >
                            Desarrollo páginas web, e-commerce y productos digitales a medida que convierten ideas complejas en experiencias rápidas, sólidas y listas para crecer.
                        </p>

                        {/* CTA — aparece segundo (delay 150ms) */}
                        <div
                            className={`${revealBase} [transition-delay:150ms]
                                ${isComplete ? revealVisible : revealHidden}`}
                        >
                            <SmartLink href="#contacto">
                                <Button
                                    variant="solid"
                                    size="md"
                                    label="COTIZAR_PROYECTO"
                                />
                            </SmartLink>
                        </div>
                    </div>

                    {/* Redes sociales — aparecen tercero (delay 300ms) */}
                    <div
                        className={`flex md:flex-col text-tech-2 text-primary md:text-cream ${revealBase} [transition-delay:300ms]
                            ${isComplete ? revealVisible : revealHidden}`}
                    >
                        <a
                            href={SOCIALS[0].url!}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 hover:text-accent transition-colors active:scale-95 [-webkit-tap-highlight-color:transparent]"
                        >
                            <span>[</span>
                            <Icon icon="ph:github-logo-fill" className="w-6 h-6" />
                            <span>]</span>
                        </a>

                        <a
                            href={SOCIALS[1].url!}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 hover:text-accent transition-colors active:scale-95 [-webkit-tap-highlight-color:transparent]"
                        >
                            <span>[</span>
                            <Icon icon="ph:linkedin-logo-fill" className="w-6 h-6" />
                            <span>]</span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}