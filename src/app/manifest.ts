import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EL-ROB Elektro Usługi Łódź – Profesjonalne Instalacje Elektryczne",
    short_name: "EL-ROB Elektro Usługi",
    description:
      "EL-ROB Elektro Usługi Łódź – specjalizujemy się w instalacjach elektrycznych, modernizacjach, serwisie i pomiarach. Gwarantujemy wysoką jakość usług i bezpieczeństwo. Skontaktuj się z nami!",
    start_url: "/",
    display: "standalone",
    lang: "PL",
    background_color: "#FAFAFA",
    theme_color: "#FF6600",
    icons: [
      {
        src: "/logo-36.png",
        sizes: "36x36",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo-48.png",
        sizes: "48x48",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo-72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo-96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo-144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ]
  };
}
