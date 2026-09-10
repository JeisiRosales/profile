import { TechBadge } from "@/components/ui/TechBadge";
import { TECH_STACK } from "@/data/tech.data";

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12 max-w-6xl mx-auto space-y-12">
      {/* 1. Header de Estado del Sistema */}
      <header className="border border-primary/30 p-4 flex justify-between items-center font-mono text-subtitle">
        <span>OPERADOR: JEISI_ROSALES</span>
      </header>

      {/* 2. Banner Principal (Hero Test) */}
      <section className="space-y-6 border-b border-primary/30 pb-12">
        <p className="font-mono text-subtitle text-accent font-bold">
          &gt; SYSTEM_READY // FULL_STACK_ENGINEER
        </p>
        {Object.entries(TECH_STACK).map(([key, tech]) => (<TechBadge key={key} techKey={key} />))}

        <h1 className="font-sans text-h1 md:text-display font-extrabold uppercase leading-none tracking-tight">
          Desarrollo Web <br />
          de Alto Rendimiento
        </h1>

        <p className="font-mono text-lead max-w-2xl text-primary/80">
          Arquitectura de software sólida, interfaces hiper-rápidas y sistemas escalables para empresas B2B.
        </p>

        {/* Botones con estilo Brutalista */}
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="bg-secundary text-background px-6 py-3 font-mono font-bold hover:bg-accent transition-colors cursor-pointer">
            [ SOLICITAR_DESPLIEGUE ]
          </button>

          <button className="border border-primary px-6 py-3 font-mono font-bold hover:bg-cream transition-colors cursor-pointer">
            // VER_PROYECTOS
          </button>
        </div>
      </section>

      {/* 3. Rejilla de Verificación de Tokens (Colores y Fuentes) */}
      <section className="space-y-6">
        <h2 className="font-sans text-h3 font-bold uppercase">
          // PRUEBA_DE_TOKENS_Y_ESTILOS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
          {/* Tarjeta 1: Fondo Cream */}
          <div className="border border-primary p-6 space-y-3 bg-cream">
            <span className="text-accent font-bold">[ 01 ]</span>
            <h3 className="font-sans text-h3 font-bold">FUENTE SYNE</h3>
            <p className="text-subtitle text-primary/80">
              Prueba del contenedor claro con el color cream (#EEEFE0) y bordes rectos.
            </p>
          </div>

          {/* Tarjeta 2: Fondo Verde Bosque (Invertido) */}
          <div className="border border-primary p-6 space-y-3 bg-secundary text-background">
            <span className="text-accent font-bold">[ 02 ]</span>
            <h3 className="font-sans text-h3 font-bold text-cream">VERDE BOSQUE</h3>
            <p className="text-subtitle text-background/80">
              Prueba del color secundario (#394E27) utilizado como fondo oscuro.
            </p>
          </div>

          {/* Tarjeta 3: Color Accent */}
          <div className="border border-primary p-6 space-y-3 bg-background">
            <span className="text-accent font-bold">[ 03 ]</span>
            <h3 className="font-sans text-h3 font-bold">ACCENT RETRO</h3>
            <div className="w-full h-10 bg-accent flex items-center justify-center text-primary font-bold text-subtitle">
              #EB900C (Naranja)
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}