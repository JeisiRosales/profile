"use client";

import { ProjectCategory } from "../data/projects.data";

// Fusionamos tus categorías reales con la pestaña extra de infraestructura
export type TabId = ProjectCategory | "infra";

interface Tab {
    id: TabId;
    label: string;
}

interface ProjectTabsProps {
    tabs: Tab[];
    activeTab: TabId;
    onChange: (id: TabId) => void;
}

export function ProjectTabs({ tabs, activeTab, onChange }: ProjectTabsProps) {
    return (
        <div
            className="
                flex items-center gap-2 md:gap-8
                border-b border-primary/50 mb-8 md:mb-12
                overflow-x-auto overflow-y-hidden scrollbar-hide
                -mx-2 px-2 md:mx-0 md:px-0
            "
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
            {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                    <button
                        key={tab.id}
                        onClick={() => onChange(tab.id)}
                        className={`
                            relative pb-3 md:pb-4 whitespace-nowrap
                            text-tech-3 md:text-tech-2 tracking-widest uppercase transition-colors
                            shrink-0
                            ${isActive ? "text-green-800 font-bold" : "text-primary/50 hover:text-primary/80"}
                        `}
                    >
                        [ {isActive && <span className="inline-block mr-1 md:mr-2">•</span>} {tab.label} ]

                        {/* Línea indicadora activa brutalista */}
                        {isActive && (
                            <span className="absolute left-0 bottom-[-1px] w-full h-[2px] bg-green-800" />
                        )}
                    </button>
                );
            })}
        </div>
    );
}