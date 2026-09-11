import Image from "next/image";
import { SmartLink } from "@/components/ui/SmartLink";
import { Icon } from "@iconify/react";
import background from "@public/assets/hero/bg-hero.webp"
import { SOCIALS } from "@/data/social.data";

export function HeroSection() {
    return (
        <section id="hero" className="relative w-full min-h-screen flex flex-col pt-32 pb-12 overflow-hidden border border-primary">

            {/* IMAGEN DE FONDO */}
            <Image
                src={background}
                alt="Textura de fondo retro tech"
                fill
                className="object-bottom object-cover z-[-1] opacity-90"
                priority
            />

            <div className="max-w-[1400px] w-full mx-auto px-6 md:px-8 flex-1 flex flex-col justify-between relative z-10">

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
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mt-20">
                    <div className="flex flex-col max-w-4xl">
                        <h1 className="text-h1 uppercase text-primary leading-[1.1] mb-6">
                            DESARROLLO WEB <br className="hidden md:block" />
                            DE ALTO RENDIMIENTO
                        </h1>

                        <p className="text-lead text-primary/80 mb-10 max-w-xl leading-relaxed">
                            Desarrollo páginas web, e-commerce y productos digitales a medida que convierten ideas complejas en experiencias rápidas, sólidas y listas para crecer.
                        </p>

                        <SmartLink
                            href="#contacto"
                            className="inline-flex w-fit bg-primary text-cream hover:bg-accent hover:text-primary transition-colors text-tech-2 px-8 py-4 active:scale-95 [-webkit-tap-highlight-color:transparent]"
                        >
                            COTIZAR_PROYECTO
                        </SmartLink>
                    </div>

                    <div className="flex md:flex-col text-tech-2 text-primary md:text-cream">
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