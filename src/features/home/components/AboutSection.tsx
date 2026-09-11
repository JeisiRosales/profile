"use client";

import { motion, type Variants } from "framer-motion";
import { Icon } from "@iconify/react";
import { Container } from "@/components/ui/Container";
import { TECH_STACK, TechKey } from "@/data/tech.data";
import { TechBadge } from "@/components/ui/TechBadge";

const FOCUS_KEYS: TechKey[] = [
    "nextjs",
    "react",
    "nestjs",
    "postgres",
    "cleanarchitecture",
    "typescript",
    "auth",
    "seo"
];

export function AboutSection() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section id="sobre-mi">
            <Container>
                {/* HEADER ESTÁTICO */}
                <div className="flex flex-col mb-12">
                    <h2 className="text-h2 uppercase text-primary mb-2">
                        EL CREADOR
                    </h2>
                    <p className="text-tech-3 text-primary/80">
                        &gt;_ STATUS: ACTIVE
                    </p>
                </div>

                {/* CONTENIDO ANIMADO */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-col"
                >
                    <motion.div variants={itemVariants} className="mb-16">

                        {/* IMAGEN FLOTANTE (Float Right) */}
                        <div className="float-right ml-6 md:ml-10 mb-4 w-32 h-32 md:w-48 md:h-48 relative overflow-hidden border border-primary shrink-0">
                            {/* Cuando tengas tu foto, usa:
                            <Image src="/tu-foto.webp" alt="Jeisi Rosales" fill className="object-cover grayscale" /> 
                            */}
                        </div>

                        {/* TEXTO PRINCIPAL (Envuelve a la imagen) */}
                        <div className="text-lead font-mono text-primary leading-relaxed">
                            <p className="inline">
                                &gt;. Soy Jeisi Rosales. Más allá de las etiquetas, soy un apasionado de la tecnología y un desarrollador Full-Stack comprometido con hacer software bien hecho. Creo en la responsabilidad, la atención al detalle y en construir herramientas que de verdad le faciliten la vida a las personas.
                            </p>

                            <p className="text-base text-primary/80 mt-8">
                                En el backend me mueve el orden y la precisión: estructuro sistemas bajo una arquitectura limpia, analizando cada flujo y caso de usabilidad, cuido la seguridad de cada dato y documento la lógica con el rigor que un proyecto serio merece. Para mí, un buen backend no solo funciona, sino que es transparente y mantenible a largo plazo. <br /> <br />
                                En la interfaz busco la mejor experiencia posible, desplegando en infraestructura ágil. Me involucro activamente con cada equipo o cliente: escucho, comunico cada avance con claridad y me aseguro de que el proceso sea tan fluido como el producto final.
                            </p>
                        </div>

                        {/* Limpiador de flotación (Asegura que el contenedor no colapse si el texto es muy corto) */}
                        <div className="clear-both"></div>
                    </motion.div>

                    {/* Separador y Focus Técnico */}
                    <motion.div variants={itemVariants} className="border-t border-primary/50 pt-10">
                        <p className="text-tech-3 text-primary mb-6">
                            [ FOCUS_TÉCNICO ]
                        </p>

                        {/* Grid de píldoras técnicas */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {FOCUS_KEYS.map((key) => (
                                <TechBadge key={key} techKey={key} />
                            ))}
                        </div>
                    </motion.div>

                </motion.div>
            </Container>
        </section>
    );
}