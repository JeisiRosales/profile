import { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <section className={`w-full max-w-[1400px] mx-auto px-8 md:px-24 lg:px-32 ${className}`}>
            {children}
        </section>
    );
}