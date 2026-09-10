"use client";

import { Icon } from "@iconify/react";
import { TECH_STACK } from "@/data/tech.data";

interface TechBadgeProps {
    techKey?: string;
    name?: string;
    icon?: string;
    className?: string;
}

export function TechBadge({ techKey, name, icon, className = "" }: TechBadgeProps) {
    const tech = techKey ? TECH_STACK[techKey] : null;
    const displayName = name || tech?.name || techKey || "Tech";
    const displayIcon = icon || tech?.icon;

    return (
        <span
            className={`inline-flex items-center gap-2 border border-primary/40 bg-cream/60 px-2.5 py-1 font-mono text-subtitle text-primary transition-colors hover:border-primary hover:bg-cream ${className}`}
        >
            {displayIcon && (
                <Icon icon={displayIcon} className="w-4 h-4 shrink-0" />
            )}
            <span>{displayName}</span>
        </span>
    );
}