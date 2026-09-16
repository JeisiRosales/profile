import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tudominio.com"), // Cambia esto por tu dominio real
  title: "Jeisi Rosales | Desarrollador de Software y Arquitectura Web",
  description: "Desarrollador Full-Stack. Construcción de sistemas web escalables, soluciones digitales para negocios y aplicaciones de alto rendimiento.",
  keywords: [
    "Desarrollador de software en Nueva Esparta",
    "Desarrollo web Isla de Margarita",
    "Programador web en Venezuela",
    "Desarrollo de software a medida",
    "Sistemas B2B escalables",
    "Desarrollo de e-commerce headless",
    "Creación de SaaS",
    "Arquitectura Limpia (DDD)",
    "Desarrollo frontend React y Next.js",
    "Backend Node.js y Supabase",
    "Optimización SEO técnico",
  ],
  authors: [{ name: "Jeisi Rosales" }],
  creator: "Jeisi Rosales",

  // 🚀 Open Graph (Redes Sociales y WhatsApp)
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: "https://tudominio.com",
    title: "Jeisi Rosales | Desarrollo Web de Alto Rendimiento",
    description: "Desarrollador Full-Stack. Construcción de sistemas web escalables, soluciones digitales para negocios y aplicaciones de alto rendimiento.",
    siteName: "Jeisi Rosales Portfolio",
    images: [
      {
        url: "/assets/logos/pixel-icon.webp",
        width: 1200,
        height: 630,
        alt: "Jeisi Rosales - Desarrollador Full-Stack",
      },
    ],
  },

  // 🐦 Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Jeisi Rosales | Desarrollador Full-Stack",
    description: "Desarrollador Full-Stack. Construcción de sistemas web escalables, soluciones digitales para negocios y aplicaciones de alto rendimiento.",
    images: ["/assets/logos/pixel-icon.webp"],
  },

  icons: {
    icon: "/assets/logos/pixel-icon.webp",
    apple: "/assets/logos/pixel-icon.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${syne.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}