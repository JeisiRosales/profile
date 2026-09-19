import { Container } from "@/components/ui/Container";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
    return (
        <section id="contacto" className="w-full bg-cream/20 border-t border-primary/50">
            <Container>

                <h2 className="text-h3 text-primary uppercase tracking-widest">
                    [ SOLICITAR_CONEXIÓN ]
                </h2>

                <div className="flex flex-col my-12">
                    <ContactForm />
                </div>

                <div className="flex flex-col w-full">
                    <h3 className="text-lead font-semibold text-primary mb-6 uppercase">
                        ENCUÉNTRAME EN
                    </h3>

                    <ul className="flex flex-col border-b border-primary/30 divide-y divide-primary/30">
                        <li className="flex justify-between items-center py-6">
                            <span className="text-tech-3 text-primary/80">Email</span>
                            <a href="mailto:jeisirosales2003@gmail.com" className="text-primary hover:underline hover:underline-offset-4 transition-all">
                                jeisirosales2003@gmail.com
                            </a>
                        </li>
                        <li className="flex justify-between items-center py-6">
                            <span className="text-tech-3 text-primary/80">LinkedIn</span>
                            <a href="https://linkedin.com/in/jeisi-rosales" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline hover:underline-offset-4 transition-all">
                                in/jeisi-rosales
                            </a>
                        </li>
                        <li className="flex justify-between items-center py-6">
                            <span className="text-tech-3 text-primary/80">GitHub</span>
                            <a href="https://github.com/JeisiRosales" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline hover:underline-offset-4 transition-all">
                                github.com/JeisiRosales
                            </a>
                        </li>
                    </ul>
                </div>

            </Container>
        </section>
    );
}