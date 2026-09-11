import Image from "next/image";
import pixelIcon from "@public/assets/logos/pixel-icon.webp";
import { FOOTER_NAV } from "@/data/navigation.data";
import { SmartLink } from "../ui/SmartLink";

export function Footer() {
    return (
        <footer className="bg-secundary text-cream pt-20 pb-10 px-6 md:px-12 overflow-hidden border-t border-primary/20">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
                <div className="w-full">
                    <h2 className="text-display leading-none tracking-tighter uppercase text-background/30 select-none text-center">
                        JEISI ROSALES
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-y-8 text-tech-3 w-full">

                    <div className="flex items-center gap-4 shrink-0">
                        <div className="relative w-12 h-12 shrink-0 border border-primary">
                            <Image
                                src={pixelIcon}
                                alt="Jeisi Rosales Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="flex flex-col text-left">
                            <span>Nueva Esparta</span>
                            <span>Venezuela</span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                        {FOOTER_NAV.map((link) => (
                            link.isExternal ? <SmartLink
                                key={link.id}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-accent transition-transform active:scale-95 duration-100 whitespace-nowrap"
                            >
                                {link.label}
                            </SmartLink> : <a
                                key={link.id}
                                href={link.href}
                                className="hover:text-accent transition-transform active:scale-95 duration-100 whitespace-nowrap"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <span className="text-center md:text-right whitespace-pre-line shrink-0">
                        Hecho con amor, insomnio<br />y demasiadas horas frente a la pc.
                    </span>
                </div>
            </div>
        </footer>
    );
}