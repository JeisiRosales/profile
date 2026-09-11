import { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <section className={`w-full max-w-[1400px] mx-auto px-6 md:px-8 ${className}`}>
            {children}
        </section>
    );
}