import { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <section className={`
            w-full max-w-[1400px] mx-auto 
            px-6 md:px-16 lg:px-32
            py-12 md:py-24 lg:py-32
            ${className}`}>
            {children}
        </section>
    );
}