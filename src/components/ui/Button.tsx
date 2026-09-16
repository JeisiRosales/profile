"use client";

import React from "react";

// 1. Interfaz dentro del mismo archivo
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "solid" | "outline" | "ghost" | "accent";
    size?: "sm" | "md" | "lg";
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    label?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className = "",
            variant = "solid",
            size = "md",
            icon,
            label,
            children,
            ...props
        },
        ref
    ) => {
        // 2. Clases globales inmutables (Efectos y estructura base)
        const baseClasses = "cursor-pointer inline-flex items-center justify-center gap-3 uppercase tracking-widest transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

        // 3. Diccionario de Tamaños (Controlando la tipografía Tech)
        const sizeClasses = {
            sm: "text-tech-3 px-4 py-2",
            md: "text-tech-2 px-6 py-3",
            lg: "text-tech-1 px-12 py-5",
        };

        // 4. Diccionario de Apariencias (Variantes)
        const variantClasses = {
            solid: "bg-primary text-background border border-primary hover:bg-accent hover:text-primary",
            outline: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-background",
            accent: "bg-accent border border-primary text-primary hover:bg-cream hover:text-primary",
            ghost: "bg-transparent text-primary",
        };

        // 5. Compilación de clases
        const compiledClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

        return (
            <button
                ref={ref}
                className={compiledClasses}
                {...props}
            >
                <span>{children || label}</span>
                {icon && <span className="shrink-0">{icon}</span>}
            </button>
        );
    }
);

Button.displayName = "Button";