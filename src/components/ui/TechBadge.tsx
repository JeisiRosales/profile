"use client";

import { Icon } from "@iconify/react";
import { TECH_STACK, TechKey } from "@/data/tech.data";

interface TechBadgeProps {
    techKey?: TechKey;
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
            className={`inline-flex items-center justify-center gap-2 border border-primary/50 bg-primary/5 p-2 font-mono text-subtitle text-primary ${className}`}
        >
            {displayIcon && (
                <Icon icon={displayIcon} className="w-4 h-4 shrink-0" />
            )}
            <span>{displayName}</span>
        </span>
    );
}