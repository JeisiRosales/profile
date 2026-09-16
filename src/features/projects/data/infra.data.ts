import { TechKey } from "@/data/tech.data";

export interface InfraCategory {
    id: string;
    title: string;
    description: string;
    techKeys: TechKey[];
}

export const INFRA_DATA: InfraCategory[] = [
    {
        id: "frontend",
        title: "// FRONTEND",
        description: "Renderizado híbrido (SSR/SSG), interfaces sin dependencias pesadas y optimización SEO técnica desde la raíz.",
        techKeys: ["nextjs", "react", "tailwind", "framer", "zustand", "iconify"]
    },
    {
        id: "datos",
        title: "// DATOS & API",
        description: "Lógica de negocio escalable, gestión de contenido estructurado y bases de datos con seguridad a nivel de fila (RLS).",
        techKeys: ["nodejs", "nestjs", "supabase", "postgres", "prisma", "sanity", "auth", "rls"]
    },
    {
        id: "infra",
        title: "// INFRAESTRUCTURA",
        description: "Despliegue global en CDNs de baja latencia, certificados SSL automáticos y protección nativa contra ataques.",
        techKeys: ["vercel", "cloudflare", "render", "docker", "cicd", "githubActions"]
    },
    {
        id: "workflows",
        title: "// WORKFLOWS & CORE",
        description: "Tiempos de respuesta (TTFB) sub-segundo, semántica estricta y arquitectura orientada a maximizar la tasa de conversión.",
        techKeys: ["typescript", "cleanarchitecture", "seo", "lighthouse", "git", "github", "openapi", "Postman", "figma", "gemini", "antigravity"]
    }
];