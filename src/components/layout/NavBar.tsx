"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import pixelPortail from "@public/assets/logos/pixel-portail.webp";
import { MAIN_NAV } from "@/data/navigation.data";
import { SmartLink } from "../ui/SmartLink";
import { Button } from "../ui/Button";

export function NavBar() {
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

                    <SmartLink
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
                    </SmartLink>
                    <div className="hidden md:flex items-center gap-8">
                        <nav className="hidden md:flex gap-8">
                            {MAIN_NAV.map((link) => (
                                <SmartLink
                                    key={link.id}
                                    href={link.href}
                                    className="hover:text-accent transition-all duration-100 tracking-widest text-tech-3 active:scale-95"
                                >
                                    {link.label}
                                </SmartLink>
                            ))}
                        </nav>

                        <SmartLink
                            href="#contacto"
                        >
                            <Button
                                variant={isSolid ? "accent" : "solid"}
                                size="md"
                                label="ENVIAR_MENSAJE"
                            />
                        </SmartLink>
                    </div>
                    <button
                        className={`md:hidden p-2 cursor-pointer transition-colors hover:text-accent z-50 ${isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Open Menu"
                    >
                        <Icon icon="pixel:bars" className="w-6 h-6" />
                    </button>
                </div>
            </header >


            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] md:hidden transition-opacity duration-300"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            {/* Menu Mobile */}
            <div
                className={`fixed top-0 right-0 bottom-0 w-[80%] max-w-[400px] bg-background z-[60] flex flex-col px-6 pt-6 pb-10 transition-transform duration-300 md:hidden overflow-hidden shadow-2xl ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Drawer Header */}
                <div className="flex items-center justify-between w-full mb-8">
                    <span className="text-primary text-h3 uppercase tracking-widest">Menú</span>
                    <button
                        className="p-2 -mr-2 cursor-pointer transition-colors hover:text-accent text-primary"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close Menu"
                    >
                        <Icon icon="ph:x-bold" className="w-6 h-6" />
                    </button>
                </div>

                <nav className="flex flex-col gap-8 mt-4 w-full font-mono text-primary">
                    {MAIN_NAV.map((link) => (
                        <SmartLink
                            key={link.id}
                            href={link.href}
                            className="flex items-center justify-between w-full hover:text-accent transition-all duration-100 tracking-widest text-tech-3 active:scale-95"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span>{link.label}</span>
                            <Icon icon="ph:caret-right-bold" className="w-5 h-5" />
                        </SmartLink>
                    ))}
                </nav>

                <div className="mt-auto">
                    <SmartLink
                        href="#contacto"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <Button
                            variant="solid"
                            size="md"
                            label="ENVIAR_MENSAJE"
                            className="w-full"
                        />
                    </SmartLink>
                </div>
            </div>
        </>
    );
}