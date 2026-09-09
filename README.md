# Portfolio Profesional - Jeisi Rosales

Sitio web y portafolio profesional desarrollado con Next.js (App Router), TypeScript y Tailwind CSS. La plataforma está enfocada en la presentación de servicios B2B, arquitectura de software e integración de interfaces interactivas.

## Tecnologías Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Fuentes:** Google Fonts (`Syne` y `JetBrains Mono` vía `next/font`)
- **Despliegue:** Vercel / Render

## Estructura del Proyecto

```text
├── public/              # Archivos estáticos e imágenes
├── src/
│   ├── app/             # Rutas, layouts y hojas de estilo globales (App Router)
│   ├── components/      # Componentes de interfaz reutilizables
│   │   ├── mascot/      # Componente y lógica de la mascota interactiva
│   │   └── ui/          # Componentes visuales base
│   ├── data/            # Información estática (proyectos, servicios, stack)
│   └── hooks/           # Custom React Hooks
├── .eslintrc.json       # Configuración de ESLint
├── next.config.ts       # Configuración de Next.js
└── package.json         # Dependencias y scripts del proyecto