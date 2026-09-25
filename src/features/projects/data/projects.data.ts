import type { TechKey } from "@/data/tech.data";

export type ProjectCategory = "Tiendas Oline" | "Custom" | "Web";

export interface ProjectStory {
    challenge: string;
    satisfaction: string;
    lessonsLearned: string;
}

export interface Project {
    id: string;
    slug: string;
    title: string;
    category: ProjectCategory;
    description: string;
    mainStack: TechKey[];
    fullStack: TechKey[];
    highlights: string[];
    imagePath?: string;
    deploymentDate: string;
    liveUrl: string;
    githubUrl?: string;
    gallery?: string[];
    story?: ProjectStory;
    clientId?: string;
}

export const PROJECTS: Project[] = [
    {
        id: "kairos-center",
        slug: "kairos-center-saas",
        title: "Kairos Center",
        category: "Custom",
        description: "Plataforma multi-tenant diseñada para la gestión centralizada de centros deportivos. Permite el control detallado de membresías, recepción, alertas de vencimiento, distribución de planes y análisis financiero, respaldado por logs de actividad y un sistema robusto de importación masiva de datos.",
        mainStack: ["react", "supabase", "nestjs"],
        fullStack: ["react", "typescript", "tailwind", "supabase", "auth", "rls", "cleanarchitecture", "zustand", "prisma", "render", "cicd", "githubActions", "docker", "figma", "gemini", "lighthouse", "seo", "antigravity"],
        highlights: ["Arquitectura Multi-Tenant", "Motor de Importación de Datos", "Control de Membresías", "Reportes Financieros"],
        deploymentDate: "2026-08-11",
        liveUrl: "https://kairos-ejig.onrender.com/",
        story: {
            challenge: "Diseñar toda la lógica del backend para gestionar los estados de las membresías, las alertas de vencimiento y desarrollar el motor de importación de datos masivos sin impactar el rendimiento.",
            satisfaction: "Lograr desplegar la plataforma a producción y conseguir mi primer cliente oficial respaldado por el software.",
            lessonsLearned: "Comprendí mediante la práctica que aplicar Clean Architecture es estrictamente necesario en proyectos de esta magnitud para asegurar que el código pueda escalar eficientemente."
        }
    },
    {
        id: "quinta-esencia",
        slug: "quinta-esencia-botica",
        title: "Quinta Esencia",
        category: "Tiendas Oline",
        description: "Desarrollo de un e-commerce headless enfocado en la experiencia del usuario y la narrativa de la marca. Se implementó un flujo de compra sin fricción que compila el carrito y redirige al cliente a WhatsApp para cerrar la venta directamente con los dueños, humanizando el proceso comercial.",
        mainStack: ["react", "sanity", "tailwind"],
        fullStack: ["react", "sanity", "typescript", "tailwind", "framer", "seo", "cloudflare", "figma", "gemini", "lighthouse", "antigravity"],
        highlights: ["Headless E-commerce", "Checkout vía WhatsApp API", "Gestión de Contenido Dinámico"],
        deploymentDate: "2026-08-29",
        liveUrl: "https://quintaesencia.pages.dev/",
        githubUrl: "https://github.com/JeisiRosales/QuintaEsencia",
        clientId: "quinta-esencia",
        story: {
            challenge: "Diseñar una tienda que no solo venda, sino que eduque sobre los beneficios de cada producto antes del checkout.",
            satisfaction: "Lograr un embudo de ventas hiper-personalizado a través de WhatsApp.",
            lessonsLearned: "Aprendí a optimizar estrictamente el renderizado de imágenes dinámicas y a implementar configuraciones avanzadas de SEO técnico para garantizar un rendimiento óptimo y mayor visibilidad orgánica."
        }
    },
    {
        id: "jeisi-rosales-portfolio",
        slug: "portafolio-arquitectura-b2b",
        title: "Mi Portafolio",
        category: "Web",
        description: "Construcción de este portafolio interactivo utilizando Domain-Driven Design (DDD). Cuenta con un sistema de enrutamiento inteligente, animaciones delegadas a la GPU mediante Framer Motion y una base de datos relacional interna para modularizar proyectos y clientes. [ Me quedó espectacular :) ]",
        mainStack: ["nextjs", "tailwind", "framer", "cloudflare", "typescript"],
        fullStack: ["nextjs", "typescript", "tailwind", "framer", "iconify", "cleanarchitecture"],
        highlights: ["Domain-Driven Design", "Animaciones a 60fps (GPU)", "Enrutamiento Inteligente (Smart Links)", "Diseño Brutalista"],
        deploymentDate: "2026-08-18",
        liveUrl: "/",
        githubUrl: "https://github.com/JeisiRosales/profile"
    }
    /*{
        id: "Krumly",
        slug: "Krumly-pedidos",
        title: "Krumly",
        category: "Tiendas Oline",
        description: "Tienda virtual diseñada para un emprendimiento local, optimizada para gestionar el flujo de pedidos programados. Conecta directamente el catálogo interactivo con el cliente a través de WhatsApp, facilitando la gestión de inventario diario.",
        mainStack: ["nextjs", "sanity", "tailwind"],
        fullStack: ["nextjs", "sanity", "typescript", "tailwind", "framer", "seo"],
        highlights: ["Agendamiento de Pedidos", "Catálogo Administrable", "Integración Directa WhatsApp"],
        imagePath: "/assets/projects/crumly.webp",
        deploymentDate: "2024-05-15",
        clientId: "crumly"
    }*/
];
