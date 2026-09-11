"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SmartLinkProps extends React.ComponentProps<typeof Link> {
    href: string;
    children: React.ReactNode;
}

export function SmartLink({ href, children, className, onClick, ...props }: SmartLinkProps) {
    const pathname = usePathname();

    const isAnchor = href.startsWith("#");
    const finalHref = isAnchor && pathname !== "/" ? `/${href}` : href;

    // Función interceptora
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Si es un ancla y ya estamos en el Home (donde viven las secciones)
        if (isAnchor && pathname === "/") {
            e.preventDefault(); // Apagamos el motor de Next.js para este clic

            const targetId = href.substring(1); // Removemos el "#" (ej: "#proyectos" -> "proyectos")
            const element = document.getElementById(targetId);

            if (element) {
                // Forzamos el salto a la sección
                element.scrollIntoView({ behavior: "smooth" });
                // Actualizamos la URL silenciosamente para mantener la referencia
                window.history.pushState(null, "", href);
            }
        }

        // Si pasaste una función onClick adicional (como cerrar un menú móvil), la ejecutamos
        if (onClick) onClick(e);
    };

    return (
        <Link href={finalHref} className={className} onClick={handleClick} {...props}>
            {children}
        </Link>
    );
}