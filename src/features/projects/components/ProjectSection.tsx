"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SmartLink } from "@/components/ui/SmartLink";
import { PROJECTS } from "../data/projects.data";
import { ProjectTabs, TabId } from "./ProjectTabs";
import { ProjectCard } from "./ProjectCard";
import { StackInfraView } from "./StackInfraView";
import { SvgMascot } from "@/components/ui/mascot/SvgMascot";

const TABS: { id: TabId; label: string }[] = [
    { id: "Web", label: "WEB" },
    { id: "Tiendas Oline", label: "TIENDAS ONLINE" },
    { id: "Custom", label: "CUSTOM" },
    { id: "infra", label: "STACK & INFRA" },
];

export function ProjectsSection() {
    // Iniciamos con "Custom" por defecto para que de entrada se muestre "Kairos Center"
    const [activeTab, setActiveTab] = useState<TabId>("Custom");

    const filteredProjects = PROJECTS.filter((p) => p.category === activeTab);

    // Solo contamos los proyectos activos que no están comentados en tu array
    const activeProjectsCount = PROJECTS.length;

    return (
        <section id="proyectos" className="w-full border border-primary/50">
            <Container>

                {/* Cabecera Técnica */}
                <div className="flex flex-col mb-12 md:mb-16">
                    <h2 className="text-h2 uppercase text-primary mb-2">
                        SISTEMAS EN PRODUCCIÓN
                    </h2>
                    <p className="text-tech-3 text-primary/80">
                        &gt;_ TOTAL_DE_REGISTROS: +{activeProjectsCount} | FAIL_RATE: 0.00%
                    </p>
                </div>

                <ProjectTabs
                    tabs={TABS}
                    activeTab={activeTab}
                    onChange={setActiveTab}
                />

                {/* Contenedor con altura mínima para evitar saltos agresivos del DOM */}
                <div className="min-h-[200px]">
                    <AnimatePresence mode="wait">
                        {activeTab === "infra" ? (
                            <StackInfraView key="infra-view" />
                        ) : (
                            <div key={`projects-${activeTab}`} className="flex flex-col gap-12">
                                {filteredProjects.length > 0 ? (
                                    filteredProjects.map((project) => (
                                        <ProjectCard key={project.id} project={project} />
                                    ))
                                ) : (
                                    <div className="p-12 border border-dashed border-primary/50 flex items-center justify-center bg-primary/5">
                                        <p className="text-primary/60 font-mono italic text-center">
                                            &gt;_ SISTEMA_EN_ESPERA: No hay registros activos en este clúster.
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Call To Action Inferior */}
                <div className="mt-16 md:mt-24 flex items-center gap-4 md:gap-6 w-full">
                    <SmartLink href="#contacto" className="shrink-0 z-10">
                        <Button
                            variant="solid"
                            size="md"
                        >
                            COTIZAR_PROYECTO
                        </Button>
                    </SmartLink>
                    <style>{`
                        @keyframes mascot-move-mobile {
                            0% { left: 0%; transform: translateX(0%); }
                            100% { left: 100%; transform: translateX(-100%); }
                        }
                        @keyframes mascot-move-desktop {
                            0% { left: 0%; transform: translateX(0%); }
                            100% { left: 30%; transform: translateX(-30%); }
                        }
                        .animate-mascot-project {
                            animation: mascot-move-mobile 8s ease-in-out infinite alternate;
                        }
                        @media (min-width: 768px) {
                            .animate-mascot-project {
                                animation: mascot-move-desktop 8s ease-in-out infinite alternate;
                            }
                        }
                    `}</style>
                    <div className="flex-1 relative h-[60px]">
                        <div
                            className="absolute top-0 animate-mascot-project hover:[animation-play-state:paused] active:[animation-play-state:paused]"
                        >
                            <SvgMascot
                                action="loop"
                                accessory="headset"
                                size={60}
                                message="He ayudado en estos proyectos (o eso me gusta decir)"
                                bubbleAlign="right"
                            />
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    );
}