import Link from "next/link";
import Image from "next/image";
import { Offers } from "@/data/offers";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-5xl mx-auto  border-x border-b border-neutral-300  sm:min-h-[300px] items-start justify-start w-full h-full  flex flex-col">
        <div className="grid md:grid-cols-2 gap-4 border-b border-dashed py-12 px-6  border-neutral-400">
          <div className="flex flex-col gap-2">
            <Link href={"/"} className="flex items-center gap-3">
              <Image src={"/logo.svg"} alt="Logo" width={35} height={35} className="w-[35px] h-[35px]" />
              <div className="text-sm">
                <p className="font-medium text-base">Robert Król</p>
                <p className="text-[#FF6600]">Elektryk Łódź</p>
              </div>
            </Link>
            <p className="leading-relaxed text-neutral-800">
              Czy szukasz dobrego elektryka w Łodzi i województwie łódzkim? Świadczymy usługi elektryczne z wykorzystaniem naszej wiedzy i wieloletniego doświadczenia. Dzięki temu jesteśmy w stanie
              sprostać nawet najbardziej wymagającym zleceniom. Sprawdź szczegóły na naszej podstronie Usługi.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold">Informacje</h2>
              <p className="text-neutral-800 leading-snug">EL ROB Elektro Usługi ul. Pomorska 57/22,</p>
              <p className="text-neutral-800 leading-snug">90-204 Łódź 737 593 320 robert.krol.el@gmail.com</p>
              <p className="text-neutral-800 leading-snug">NIP: 7251759341</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold">Usługi</h2>
              <ul className="space-y-2">
                {Offers.map((a,i) => (
                  <li key={i}>
                    <Link href={a.href} aria-label={a.label}>
                      <Button aria-label={a.label} variant={"link"} className="cursor-pointer h-fit w-fit py-0.5 px-0 whitespace-normal text-start font-normal  border-neutral-300 text-base group hover:text-[#FF6600]">
                        {a.label}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="p-6 flex flex-col gap-2 sm:flex-row sm:justify-between w-full">
          <p className="text-sm text-neutral-700">© {new Date().getFullYear()} EL ROB Elektro Usługi Robert Król. Wszelkie prawa zastrzeżone.</p>
          <p className="text-sm text-neutral-700">Projekt i wykonanie: <Link href={"https://kubalekdev.pl/"} className="text-[#FF6600]">KubalekDev</Link></p>
        </div>
      </div>
    </footer>
  );
}
