import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EL-ROB Elektro Usługi Łódź – Profesjonalne Instalacje Elektryczne",
    short_name: "EL-ROB Elektro Usługi",
    description:
      "EL-ROB Elektro Usługi Łódź – specjalizujemy się w instalacjach elektrycznych, modernizacjach, serwisie i pomiarach. Gwarantujemy wysoką jakość usług i bezpieczeństwo. Skontaktuj się z nami!",
    start_url: "/",
    display: "standalone",
  };
}
