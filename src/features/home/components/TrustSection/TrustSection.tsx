"use client";

import { SmartLink } from "@/components/ui/SmartLink";
import { Container } from "@/components/ui/Container";
import { TRUST_METRICS, TRUSTED_CLIENTS, TRUSTED_TESTIMONIALS, LATEST_PROJECT } from "@/features/home/data/trust.data";
import { AnimatedCounter } from "./AnimatedCounter";
import { HorizontalLogoMarquee } from "./HorizontalLogoMarquee";
import { TestimonialGlitch } from "./TestimonialGlitch";
import { section } from "framer-motion/client";

export function TrustSection() {
    const boxMinHeight = "min-h-[280px] md:min-h-[300px]";

    return (
        <section id="trust" className="border-t border-primary/50">
            <Container>
                {/* HEADER DE LA SECCIÓN */}
                <div className="flex flex-col mb-12">
                    <h2 className="text-h2 uppercase text-primary mb-2">
                        INGENIERÍA PENSADA PARA ESCALAR
                    </h2>
                    <p className="text-tech-3 text-primary/80">
                        &gt;_ No creo en webs pesadas ni en plantillas saturadas.
                    </p>
                </div>

                {/* CONTENEDOR BRUTALISTA CON GRID FIJO */}
                <div className="flex flex-col w-full border border-primary/50">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary">

                        {/* COL 1: Contador */}
                        <div className={`flex flex-col items-end justify-end p-6 md:p-8 text-right bg-background/50 ${boxMinHeight}`}>
                            <span className="text-display text-primary leading-none">
                                +<AnimatedCounter value={TRUST_METRICS.totalProjects} />
                            </span>
                            <span className="text-h3 uppercase mt-4">
                                PROYECTOS EN PRODUCCIÓN
                            </span>
                            <span className="text-tech-3 text-primary/70 mt-2">
                                Tiendas Online, Software a medida y más...
                            </span>
                        </div>

                        {/* COL 2: Lo más reciente */}
                        <div className="flex flex-col h-full relative">
                            <a
                                href={LATEST_PROJECT.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group flex flex-col justify-between p-6 h-full hover:bg-primary/5 transition-colors [-webkit-tap-highlight-color:transparent] ${boxMinHeight}`}
                            >
                                <span className="text-h3 uppercase text-left">
                                    LO MÁS RECIENTE
                                </span>

                                <div className="flex-1 w-full flex flex-col items-center justify-center text-center gap-2">
                                    <span className="text-lead font-semibold text-primary uppercase leading-tight group-hover:scale-105 transition-transform duration-300">
                                        {LATEST_PROJECT.title}
                                    </span>
                                    <span className="text-tech-3 text-primary/60">
                                        {LATEST_PROJECT.mainStack.join(" + ")}
                                    </span>
                                </div>

                                <span className="text-subtitle text-left uppercase group-hover:text-accent transition-colors">
                                    HAZ CLICK PARA VER
                                </span>
                            </a>
                        </div>

                        {/* COL 3: Marquee Horizontal */}
                        <div className={`flex flex-col justify-between p-6 bg-background/50 overflow-hidden ${boxMinHeight}`}>
                            <span className="text-h3 uppercase text-left">
                                ELLOS CONFÍAN
                            </span>

                            <div className="flex-1 flex items-center justify-center -mx-6">
                                <HorizontalLogoMarquee clients={TRUSTED_CLIENTS} />
                            </div>

                            <span className="text-subtitle text-left uppercase">
                                SÉ PARTE DE ESTA LISTA
                            </span>
                        </div>
                    </div>

                    {/* FILA INFERIOR */}
                    <div className="flex flex-col justify-between p-6 md:p-8 min-h-[220px] border-t border-primary/50">
                        <span className="text-h3 uppercase mb-6">
                            OPINIONES DE MI TRABAJO
                        </span>
                        <TestimonialGlitch TRUSTED_TESTIMONIALS_LIST={TRUSTED_TESTIMONIALS} />
                    </div>
                </div>
            </Container>
        </section>
    );
}