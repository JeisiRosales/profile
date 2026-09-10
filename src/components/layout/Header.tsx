"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import pixelPortail from "../../../public/assets/logos/pixel-portail.webp";

const NAV_LINKS = [
    { label: "[ PROYECTOS ]", href: "#proyectos" },
    { label: "[ SOLUCIONES ]", href: "#soluciones" },
    { label: "[ SOBRE MI ]", href: "#sobre-mi" },
    { label: "[ CONTACTO ]", href: "#contacto" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Lógica avanzada de Scroll: Dirección y Fondo
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // 1. Cambia el color del Navbar si pasamos de 50px
            setIsScrolled(currentScrollY > 50);

            // 2. Oculta/Muestra dependiendo de la dirección (si el menú está cerrado)
            if (!isMenuOpen) {
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    setIsVisible(false); // Scrolleando hacia abajo
                } else {
                    setIsVisible(true);  // Scrolleando hacia arriba
                }
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMenuOpen]);

    // Bloquear el scroll del body cuando el menú móvil está abierto
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isMenuOpen]);

    const isSolid = isScrolled || isMenuOpen;

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
                    ${isSolid ? "bg-primary text-cream shadow-md py-4 md:py-2" : "bg-transparent text-primary py-6 md:py-4"}
                    ${isVisible ? "translate-y-0" : "-translate-y-full"}
                `}
            >
                <div className="max-w-[1400px] mx-auto px-6 md:px-8 flex justify-between items-center">

                    <Link
                        href="/"
                        className="relative w-10 h-10 md:w-12 md:h-12 block shrink-0 z-50"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Image
                            src={pixelPortail}
                            alt="Jeisi Rosales Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        <nav className="hidden md:flex gap-8">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="hover:text-accent transition-all duration-100 tracking-widest text-tech-3 active:scale-95"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <Link
                            href="#contacto"
                            className={`hidden text-tech-2 md:block px-6 py-3 text-strong transition-colors ${isSolid
                                ? "bg-accent text-primary hover:bg-cream"
                                : "bg-primary text-cream hover:bg-accent"
                                }`}
                        >
                            ENVIAR_MENSAJE
                        </Link>
                    </div>
                    <button
                        className="md:hidden z-50 p-2 cursor-pointer transition-colors hover:text-accent"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <Icon icon={isMenuOpen ? "ph:x-bold" : "ph:list-bold"} className="w-8 h-8" />
                    </button>
                </div>
            </header >


            {/* Menu Mobile */}
            <div
                className={`fixed inset-0 bg-primary z-40 flex flex-col px-6 pt-16 pb-10 transition-transform duration-300 md:hidden overflow-hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <Icon
                    icon="ph:terminal-window-bold"
                    className="absolute -bottom-12 -left-12 w-[110vw] h-[110vw] text-background/5 -z-10 pointer-events-none"
                />

                {/* 1. Eliminamos items-center y agregamos w-full para que los hijos se estiren */}
                <nav className="flex flex-col gap-8 mt-12 w-full font-mono text-cream">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            /* 2. justify-between empuja el texto a la izquierda y el ícono a la derecha */
                            className="flex items-center justify-between w-full hover:text-accent transition-all duration-100 tracking-widest text-tech-3 active:scale-95"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span>{link.label}</span>
                            <Icon icon="ph:caret-right-bold" className="w-5 h-5" />
                        </Link>
                    ))}
                </nav>

                <div className="mt-auto">
                    <Link
                        href="#contacto"
                        className="block w-full text-center bg-accent text-primary py-4 text-tech-2 hover:text-cream transition-all duration-100 tracking-widest text-tech-3 active:scale-95"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        [ ENVIAR_MENSAJE ]
                    </Link>
                </div>
            </div>
        </>
    );
}