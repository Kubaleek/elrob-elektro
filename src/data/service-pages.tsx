import { AlignCenterVertical, AlignEndHorizontalIcon, AlignHorizontalDistributeCenter, AlignHorizontalJustifyEndIcon } from "lucide-react";

export const ServicePages = [
  {
    name: "Montaż i modernizacja instalacji elektrycznych",
    slug: "montaz-i-modernizacja-instalacji-elektrycznych",
    desc: "Nasza firma oferuje kompleksowy montaż i modernizację instalacji elektrycznych, dostosowanych do indywidualnych potrzeb klienta.",
    list: [
      {
        title: "Montaż instalacji elektrycznych niskiego napięcia",
        desc: "Profesjonalny montaż instalacji elektrycznych niskiego napięcia – bezpiecznie, solidnie i zgodnie z obowiązującymi normami.",
        className: "h-full md:col-span-2 bg-transparent border-dashed border-neutral-600",
        icon: <AlignCenterVertical className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "Modernizacja i rozbudowa istniejących instalacji",
        desc: "Unowocześniamy i rozbudowujemy instalacje elektryczne, zwiększając ich wydajność i bezpieczeństwo.",
        className: "h-full bg-transparent border-dashed border-neutral-600",
        icon: <AlignEndHorizontalIcon className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "Instalacja oświetlenia wewnętrznego i zewnętrznego",
        desc: "Montujemy nowoczesne systemy oświetlenia dopasowane do wnętrz i przestrzeni zewnętrznych.",
        className: "h-full  bg-transparent border-dashed border-neutral-600",
        icon: <AlignHorizontalDistributeCenter className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "Instalacja systemów zabezpieczeń (ochrona przeciwpożarowa, alarmowa)",
        desc: "Zakładamy niezawodne systemy alarmowe i przeciwpożarowe, dbając o bezpieczeństwo osób i mienia.",
        className: "h-full md:col-span-2 bg-transparent border-dashed border-neutral-600",
        icon: <AlignHorizontalJustifyEndIcon className="h-4 w-4 text-neutral-500" />,
      },
    ],
  },
  {
    name: "Fotowoltaika Instalacje solarne",
    slug: "fotowoltaika-Instalacje-solarne",
    desc: "EL-ROB Elektro Usługi specjalizuje się w projektowaniu, montażu oraz konserwacji instalacji fotowoltaicznych.",
    list: [
      {
        title: "Projektowanie i instalacja systemów fotowoltaicznych",
        desc: "Tworzymy i montujemy wydajne instalacje PV dopasowane do Twoich potrzeb.",
        className: "h-full bg-transparent border-dashed border-neutral-600",
        icon: <AlignCenterVertical className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "Podłączenie do sieci elektroenergetycznej",
        desc: "Zajmujemy się bezpiecznym i zgodnym z normami przyłączeniem instalacji do sieci.",
        className: "h-full bg-transparent border-dashed border-neutral-600",
        icon: <AlignEndHorizontalIcon className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "Serwis i konserwacja instalacji fotowoltaicznych",
        desc: "Zapewniamy regularny serwis i utrzymanie sprawności systemów PV.",
        className: "h-full bg-transparent border-dashed border-neutral-600",
        icon: <AlignHorizontalDistributeCenter className="h-4 w-4 text-neutral-500" />,
      },
    ],
  },
  {
    name: "Aparatura kontrolno-pomiarowa i automatyka",
    slug: "aparatura-kontrolno-pomiarowa-i-automatyka",
    desc: "EL-ROB Elektro Usługi oferuje pełen zakres usług w zakresie aparatury kontrolno-pomiarowej oraz systemów automatyki do sterowania i zabezpieczania urządzeń elektrycznych.",
    list: [
      {
        title: "Montaż aparatury kontrolno-pomiarowej",
        desc: "Profesjonalny montaż urządzeń do precyzyjnego monitorowania parametrów instalacji.",
        className: "h-full bg-transparent border-dashed border-neutral-600",
        icon: <AlignHorizontalDistributeCenter className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "Instalacja systemów automatycznej regulacji i sterowania",
        desc: "Wdrażanie nowoczesnych systemów automatyki dla zwiększenia efektywności i kontroli.",
        className: "h-full md:col-span-2 bg-transparent border-dashed border-neutral-600",
        icon: <AlignEndHorizontalIcon className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "Modernizacja i kalibracja urządzeń pomiarowych",
        desc: "Unowocześnianie oraz dokładna kalibracja aparatury w celu zapewnienia niezawodnych pomiarów.",
        className: "h-full md:col-span-2 bg-transparent border-dashed border-neutral-600",
        icon: <AlignCenterVertical className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "Przeglądy i konserwacja urządzeń kontrolnych",
        desc: "Regularna obsługa techniczna, minimalizująca ryzyko awarii i wydłużająca żywotność urządzeń.",
        className: "h-full bg-transparent border-dashed border-neutral-600",
        icon: <AlignCenterVertical className="h-4 w-4 text-neutral-500" />,
      },
    ],
  },
  {
    name: "Urządzenia w wykonaniu przeciwwybuchowym",
    slug: "urzadzenia-w-wykonaniu-przeciwwybuchowym",
    desc: "W ramach naszych usług oferujemy montaż i serwis elektrycznych urządzeń w wykonaniu przeciwwybuchowym.",
    list: [
      {
        title: "Montaż urządzeń elektrycznych w strefach zagrożonych wybuchem",
        desc: "Bezpieczny montaż zgodny z normami ATEX, przeznaczony dla stref Ex.",
        className: "h-full bg-transparent border-dashed border-neutral-600",
        icon: <AlignHorizontalJustifyEndIcon className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "Konserwacja i serwis urządzeń przeciwwybuchowych",
        desc: "Regularna obsługa i naprawy urządzeń Ex zapewniająca ich niezawodność i zgodność z przepisami.",
        className: "h-full md:col-span-2 bg-transparent border-dashed border-neutral-600",
        icon: <AlignHorizontalJustifyEndIcon className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "Przeglądy techniczne i diagnostyka urządzeń w wykonaniu przeciwwybuchowym",
        desc: "Dokładna kontrola i ocena stanu technicznego urządzeń stosowanych w strefach zagrożonych wybuchem.",
        className: "h-full md:col-span-2 bg-transparent border-dashed border-neutral-600",
        icon: <AlignCenterVertical className="h-4 w-4 text-neutral-500" />,
      },
    ],
  },
  {
    name: "Serwis i konserwacja urządzeń elektrotermicznych",
    slug: "serwis-i-konserwacja-urzadzen-elektrotermicznych",
    desc: "Nasza firma oferuje profesjonalny serwis oraz konserwację urządzeń elektrotermicznych, które znajdują zastosowanie w przemyśle, w tym piecach, grzałkach i innych systemach grzewczych",
    list: [
      {
        title: "Instalacja i modernizacja urządzeń elektrotermicznych",
        desc: "Montaż oraz unowocześnianie urządzeń grzewczych zasilanych energią elektryczną.",
        className: "h-full bg-transparent border-dashed border-neutral-600",
        icon: <AlignCenterVertical className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "Serwis i konserwacja urządzeń grzewczych",
        desc: "Bieżąca obsługa techniczna zapewniająca sprawność i bezpieczeństwo eksploatacji.",
        className: "h-full bg-transparent border-dashed border-neutral-600",
        icon: <AlignEndHorizontalIcon className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "Naprawy i diagnostyka urządzeń elektrotermicznych",
        desc: "Szybka identyfikacja usterek i skuteczne usuwanie awarii w urządzeniach grzewczych.",
        className: "h-full bg-transparent border-dashed border-neutral-600",
        icon: <AlignHorizontalDistributeCenter className="h-4 w-4 text-neutral-500" />,
      },
    ],
  },
  {
    name: "Instalacja i konserwacja oświetlenia ulicznego",
    slug: "instalacja-i-konserwacja-oswietlenia-ulicznego",
    desc: "EL-ROB Elektro Usługi oferuje kompleksową obsługę w zakresie projektowania, montażu i konserwacji oświetlenia ulicznego.",
    list: [
      {
        title: "Montaż oświetlenia ulicznego",
        desc: "Profesjonalna instalacja słupów i opraw oświetleniowych dla przestrzeni publicznych.",
        className: "h-full bg-transparent border-dashed border-neutral-600",
        icon: <AlignEndHorizontalIcon className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "Instalacja systemów energooszczędnych (LED)",
        desc: "Wdrażanie nowoczesnych rozwiązań LED w celu zmniejszenia zużycia energii i kosztów eksploatacji.",
        className: "h-full md:col-span-2 bg-transparent border-dashed border-neutral-600",
        icon: <AlignCenterVertical className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "Modernizacja istniejących instalacji oświetleniowych",
        desc: "Unowocześnianie przestarzałych systemów oświetlenia w celu poprawy efektywności i estetyki.",
        className: "h-full md:col-span-2 bg-transparent border-dashed border-neutral-600",
        icon: <AlignHorizontalDistributeCenter className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "Naprawa i konserwacja oświetlenia ulicznego",
        desc: "Bieżący serwis i usuwanie usterek dla zapewnienia ciągłości działania oświetlenia zewnętrznego.",
        className: "h-full  bg-transparent border-dashed border-neutral-600",
        icon: <AlignHorizontalDistributeCenter className="h-4 w-4 text-neutral-500" />,
      },
    ],
  },
];
