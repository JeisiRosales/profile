import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
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
  icons: {
    icon: "/assets/logos/pixel-icon.webp",
    apple: "/assets/logos/pixel-icon.webp",
  },
  title: "Desarollador de software en Nueva Esparta - Jeisi Rosales",
  description: "Jeisi Rosales | Desarrollador Full-Stack. Construcción de sistemas web escalables, soluciones digitales para negocios y aplicaciones de alto rendimiento.",
  keywords: [
    "Desarrollador de software",
    "Desarrollo web",
    "Paginas Web",
    "Aplicaciones Web",
    "Nueva Esparta",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${syne.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}