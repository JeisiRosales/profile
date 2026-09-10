export interface TechItem {
    name: string;
    icon: string;
}

export const TECH_STACK: Record<string, TechItem> = {
    // FRONTEND
    nextjs: { name: "Next.js", icon: "devicon:nextjs" },
    react: { name: "React", icon: "material-icon-theme:react-ts" },
    tailwind: { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    iconify: { name: "Iconify", icon: "thesvg-color:iconify" },
    framer: { name: "Framer Motion", icon: "devicon:framermotion" },
    zustand: { name: "Zustand", icon: "devicon:zustand" },

    // BACKEND & DATA
    nodejs: { name: "Node.js", icon: "devicon:nodejs" },
    nestjs: { name: "NestJS", icon: "devicon:nestjs" },
    postgres: { name: "PostgreSQL", icon: "devicon:postgresql" },
    prisma: { name: "Prisma", icon: "devicon:prisma" },
    supabase: { name: "Supabase", icon: "devicon:supabase" },
    sanity: { name: "Sanity CMS", icon: "bxl:sanity" },
    auth: { name: "Auth & cookies", icon: "ph:cookie-bold" },
    rls: { name: "RLS & Triggers", icon: "ph:lock-key-bold" },

    // INFRASTRUCTURE & DEVOPS
    docker: { name: "Docker", icon: "devicon:docker" },
    vercel: { name: "Vercel", icon: "devicon:vercel" },
    cloudflare: { name: "Cloudflare", icon: "devicon:cloudflare" },
    render: { name: "Render", icon: "simple-icons:render" },
    cicd: { name: "CI/CD", icon: "ph:infinity-bold" },
    githubActions: { name: "GitHub Actions", icon: "devicon:githubactions" },

    // WORKFLOW, TOOLS & CORE
    typescript: { name: "TypeScript", icon: "devicon:typescript" },
    cleanarchitecture: { name: "Clean Architecture", icon: "ph:hexagon-bold" },
    git: { name: "Git", icon: "devicon:git" },
    github: { name: "GitHub", icon: "devicon:github" },
    openapi: { name: "OpenAPI", icon: "devicon:openapi" },
    Postman: { name: "Postman", icon: "devicon:postman" },
    figma: { name: "Figma", icon: "devicon:figma" },
    gemini: { name: "Gemini", icon: "logos:google-gemini-icon" },
    lighthouse: { name: "Lighthouse", icon: "logos:lighthouse" },
    seo: { name: "SEO", icon: "ph:trend-up-bold" },
    antigravity: { name: "Antigravity", icon: "logos:antigravity" },
};