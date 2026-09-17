"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Project } from "../data/projects.data";
import { TechBadge } from "@/components/ui/TechBadge";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col border border-primary/50 bg-background"
        >
            {/* --- BLOQUE SUPERIOR: Título, Fecha y Links --- */}
            <div className="flex flex-col md:flex-row md:items-center justify-between p-4 md:p-6 gap-4 bg-primary/5">

                {/* IZQUIERDA: Nombre y Fecha */}
                <div className="flex flex-row items-center gap-2 md:gap-4">
                    <h3 className="text-h3 text-primary uppercase">{project.title}</h3>
                    <span className="text-tech-3 text-primary/70 border-l border-primary/50 pl-3">
                        {project.deploymentDate}
                    </span>
                </div>

                {/* DERECHA: Links de Visitar y GitHub */}
                <div className="flex flex-row items-start gap-2 text-tech-3 text-primary hover:text-primary/70 transition-colors flex items-center">
                    {project.liveUrl && project.id !== "jeisi-rosales-portfolio" && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            VISITAR SITIO
                        </a>
                    )}

                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            VER REPOSITORIO
                        </a>
                    )}
                </div>
            </div>

            {/* --- BLOQUE INFERIOR: Efecto marquee de highlights --- */}
            <div className="relative flex flex-wrap w-full overflow-hidden border-y border-primary/50 bg-primary/5 p-4 md:px-6 md:py-4 md:gap-4">
                {project.highlights.map((highlight, idx) => (
                    <span
                        key={idx}
                        className="flex items-center text-tech-3 md:text-subtitle text-primary/80"
                    >
                        [ • {highlight} ]
                    </span>
                ))}
            </div>

            {/* Caja Interior de Contenido */}
            <div className="p-6 md:p-10 flex flex-col gap-6">
                <p className="text-primary/90 leading-relaxed max-w-4xl text-base">
                    {project.description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-6 items-center gap-2">
                    {project.mainStack.map((techKey) => (
                        <TechBadge
                            key={techKey}
                            techKey={techKey}
                        />
                    ))}
                </div>
            </div>

        </motion.div>
    );
}