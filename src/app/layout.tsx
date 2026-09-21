import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://profile.jeisi.workers.dev"),
  verification: {
    google: "SmhnsOccZ7BDBIqJ4ux5aX3TS2yBOMXGYPPbZipIfKI",
  },
  title: "Desarrollador de software en la Isla de Margarita, Nueva Esparta | Jeisi Rosales",
  description: "Desarrollo páginas web, e-commerce y productos digitales a medida que convierten ideas complejas en experiencias rápidas, sólidas y listas para crecer.",
  keywords: [
    "Desarrollador de software en Nueva Esparta",
    "Desarrollo web Margarita",
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

  // Open Graph (Redes Sociales y WhatsApp)
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: "https://profile.jeisi.workers.dev",
    title: "Jeisi Rosales | Desarrollo Web de Alto Rendimiento",
    description: "Desarrollo páginas web, e-commerce y productos digitales a medida que convierten ideas complejas en experiencias rápidas, sólidas y listas para crecer.",
    siteName: "Jeisi Rosales Portfolio",
    images: [
      {
        url: "/assets/logos/pixel-icon.png",
        width: 1200,
        height: 630,
        alt: "Jeisi Rosales - Desarrollador Full-Stack",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Jeisi Rosales | Desarrollador Full-Stack",
    description: "Desarrollo páginas web, e-commerce y productos digitales a medida que convierten ideas complejas en experiencias rápidas, sólidas y listas para crecer.",
    images: ["/assets/logos/pixel-icon.png"],
  },

  icons: {
    icon: "/assets/logos/pixel-icon.png",
    apple: "/assets/logos/pixel-icon.png",
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

        {/* Schema markup para el nombre del sitio */}
        <Script id="schema-person" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jeisi Rosales",
              "url": "https://profile.jeisi.workers.dev/",
              "image": "https://profile.jeisi.workers.dev/assets/logos/pixel-icon.png",
              "jobTitle": "Desarrollador Full-Stack",
              "description": "Desarrollador de páginas web, e-commerce y productos digitales a medida.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Isla de Margarita",
                "addressRegion": "Nueva Esparta",
                "addressCountry": "VE"
              },
              "knowsAbout": [
                "Desarrollo Web", "React", "Next.js", "Node.js", "Arquitectura Limpia", "SEO Técnico"
              ],
              "sameAs": [
                "https://github.com/JeisiRosales",
                "https://www.linkedin.com/in/jeisi-rosales/"
              ]
            }
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BVSSFFNQW4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BVSSFFNQW4');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ykhph862v7");
          `}
        </Script>
      </body>
    </html>
  );
}