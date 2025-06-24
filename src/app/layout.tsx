import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EL-ROB Elektro Usługi Łódź – Profesjonalne Instalacje Elektryczne",
  description: "EL-ROB Elektro Usługi Łódź – specjalizujemy się w instalacjach elektrycznych, modernizacjach, serwisie i pomiarach. Gwarantujemy wysoką jakość usług i bezpieczeństwo. Skontaktuj się z nami!",
  authors: [
    {
      name: "Kuba `Kubalek` Król",
      url: "https://kubalekdev.pl/",
    },
  ],
  keywords: ["elektryk łódź", "usługi elektryczne łódź", "usługi elektryczne", "instalacje elektryczne Łódź"],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "http://localhost:3000/",
    title: "EL-ROB Elektro Usługi Łódź – Profesjonalne Instalacje Elektryczne",
    description: "EL-ROB Elektro Usługi Łódź – specjalizujemy się w instalacjach elektrycznych, modernizacjach, serwisie i pomiarach. Gwarantujemy wysoką jakość usług i bezpieczeństwo. Skontaktuj się z nami!",
    siteName: "EL-ROB Elektro Usługi Łódź",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FAFAFA]`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
