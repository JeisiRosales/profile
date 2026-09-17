import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
    return (
        <section className="w-full min-h-screen flex items-center justify-center pt-16">
            <Container className="flex flex-col items-center text-center">
                <div className="border border-primary/50 p-12 md:p-24 flex flex-col items-center bg-background/50">
                    <span className="text-[6rem] md:text-[10rem] leading-none text-primary mb-4">
                        [404]
                    </span>
                    <h1 className="text-h2 uppercase text-primary mb-6">
                        SISTEMA NO ENCONTRADO
                    </h1>
                    <p className="text-lead text-primary/70 max-w-md mb-10">
                        &gt;_ La ruta que intentas consultar no existe en este servidor o el proyecto fue movido.
                    </p>
                    <Link
                        href="/"
                        className="text-h3 uppercase border border-primary/50 px-8 py-4 hover:bg-primary hover:text-background transition-colors"
                    >
                        VOLVER AL INICIO
                    </Link>
                </div>
            </Container>
        </section>
    );
}