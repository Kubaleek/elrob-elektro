import { BetweenHorizontalStart, KeySquare, LayoutGrid, Plug2, PlugZap } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton-block";

export const service = [
  {
    title: "Montaż i modernizacja instalacji elektrycznych",
    description: "Nasza firma oferuje kompleksowy montaż i modernizację instalacji elektrycznych, dostosowanych do indywidualnych potrzeb klienta.",
    header: <Skeleton />,
    icon: <LayoutGrid className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1 bg-transparent border-dashed border-neutral-600",
  },
  {
    title: "Aparatura kontrolno-pomiarowa i automatyka",
    description: "EL-ROB Elektro Usługi oferuje pełen zakres usług w zakresie aparatury kontrolno-pomiarowej oraz systemów automatyki do sterowania i zabezpieczania urządzeń elektrycznych.",
    header: <Skeleton />,
    icon: <BetweenHorizontalStart className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2 bg-transparent border-dashed border-neutral-600 shadow-md",
  },
  {
    title: "Serwis i konserwacja urządzeń elektrotermicznych",
    description:
      "Nasza firma oferuje profesjonalny serwis oraz konserwację urządzeń elektrotermicznych, które znajdują zastosowanie w przemyśle, w tym piecach, grzałkach i innych systemach grzewczych",
    header: <Skeleton />,
    icon: <KeySquare className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1 bg-transparent border-dashed border-neutral-600 shadow-md",
  },
  {
    title: "Urządzenia w wykonaniu przeciwwybuchowym",
    description: "W ramach naszych usług oferujemy montaż i serwis elektrycznych urządzeń w wykonaniu przeciwwybuchowym.",
    header: <Skeleton />,
    icon: <Plug2 className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1 bg-transparent border-dashed border-neutral-600 shadow-md",
  },
    {
    title: "Instalacja i konserwacja oświetlenia ulicznego",
    description: "EL-ROB Elektro Usługi oferuje kompleksową obsługę w zakresie projektowania, montażu i konserwacji oświetlenia ulicznego.",
    header: <Skeleton />,
    icon: <PlugZap className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1 bg-transparent border-dashed border-neutral-600 shadow-md",
  },
];