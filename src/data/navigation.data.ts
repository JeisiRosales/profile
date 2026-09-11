export interface NavItem {
    id: string;
    label: string;
    href: string;
    isExternal?: boolean;
}

// Navegación principal (Navbar)
export const MAIN_NAV: NavItem[] = [
    { id: "nav-trabajos", label: "[ PROYECTOS ]", href: "#proyectos" },
    { id: "nav-servicios", label: "[ SOLUCIONES ]", href: "#soluciones" },
    { id: "nav-resultados", label: "[ SOBRE MI ]", href: "#sobre-mi" },
    { id: "nav-contacto", label: "[ CONTACTO ]", href: "#contacto" },
];

// Si tu Footer tiene links adicionales (ej: legales), los separas aquí:
export const FOOTER_NAV: NavItem[] = [
    ...MAIN_NAV,
    { id: "nav-github", label: "[ REPOSITORIO ]", href: "https://github.com/JeisiRosales/profile.git", isExternal: true },
];