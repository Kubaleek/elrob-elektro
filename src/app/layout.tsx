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
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
  alternates: {
    canonical: new URL(`${process.env.NEXT_PUBLIC_URL}`),
  },
  authors: [
    {
      name: "Kuba `Kubalek` Król",
      url: "https://kubalekdev.pl/",
    },
  ],
  keywords: ["elektryk łódź", "usługi elektryczne łódź", "usługi elektryczne", "instalacje elektryczne Łódź", "Łódź"],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: process.env.NEXT_PUBLIC_URL,
    title: "EL-ROB Elektro Usługi Łódź – Profesjonalne Instalacje Elektryczne",
    description: "EL-ROB Elektro Usługi Łódź – specjalizujemy się w instalacjach elektrycznych, modernizacjach, serwisie i pomiarach. Gwarantujemy wysoką jakość usług i bezpieczeństwo. Skontaktuj się z nami!",
    siteName: "EL-ROB Elektro Usługi Łódź",
    images: "/strona.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
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
