import { PROJECTS } from "@/features/projects/data/projects.data";
import { CLIENTS } from "@/data/client.data";

// Contador calculado desde Proyectos
export const TRUST_METRICS = {
    totalProjects: PROJECTS.length,
};

// Lista completa de clientes para el Marquee Vertical
export const TRUSTED_CLIENTS = CLIENTS;

// Filtro automático: Solo clientes que dejaron testimonio
export const TRUSTED_TESTIMONIALS = CLIENTS
    .filter((client) => client.testimonial !== undefined)
    .map((client) => ({
        client: client.name,
        text: client.testimonial!,
    }));

// Filtra el último proyecto dinámicamente
export const LATEST_PROJECT = [...PROJECTS].sort(
    (a, b) => new Date(b.deploymentDate).getTime() - new Date(a.deploymentDate).getTime()
)[0];