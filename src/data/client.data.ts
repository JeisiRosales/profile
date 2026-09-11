export interface Client {
    id: string;
    name: string;
    logoPath: string | null;
    testimonial?: string;
}

export const CLIENTS: Client[] = [
    {
        id: "quinta-esencia",
        name: "QUINTA ESENCIA",
        logoPath: "/assets/clients/quinta-esencia.png",
        testimonial: '"Jeisi no entregó una simple tienda, creó un santuario digital para nuestra marca. La integración del carrito directo a nuestro WhatsApp simplificó y multiplicó nuestras ventas."',
    },
    /*
    {
        id: "crumly",
        name: "KRUMLY",
        logoPath: null,
        testimonial: '"El diseño capturó exactamente nuestra esencia local. Ahora nuestros clientes pueden agendar pedidos sin fricción, conectando con la marca incluso antes de comprar."',
    }
    */
    {
        id: "ncn-gimnasios",
        name: "NCN GIMNASIOS",
        logoPath: null,
        testimonial: '[ Cliente de Kairos Center ]: "Dejar atrás los registros en Excel cambió nuestra operación diaria. Gracias a este sistema tenemos control absoluto y automatizado de nuestras membresías e inventario."',
    },
];