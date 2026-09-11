"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

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
        <section id="servicios" className="w-full py-16 md:py-24 scroll-mt-20 bg-primary">
            <Container>
                <h2 className="text-h2 uppercase text-cream mb-12">
                    SERVICIOS DE INFRAESTRUCTURA
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