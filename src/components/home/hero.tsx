import { benefits } from "@/data/benefits";
import { ElectricOverlay } from "../ui/electric-overlay";

function ListBenefits({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-lg leading-snug font-medium text-[#FF6600]">{title}</h2>
      <p className="text-sm text-neutral-600">{desc}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="w-full border-b border-neutral-300 border-dashed">
      <section className="max-w-5xl mx-auto border-x  w-full h-full flex flex-col">
        <div className="grid grid-cols-1 items-start relative justify-start border-b border-dashed sm:px-12 p-6   sm:py-24 sm:pb-12 border-neutral-300 sm:grid-cols-2 gap-12 md:gap-16">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl md:text-4xl font-bold leading-relaxed tracking-tight">
              EL ROB <span className="text-[#FF6600]">Elektro Usługi</span>
            </h1>
            <p className="text-base leading-relaxed">
              Czy szukasz dobrego elektryka w Łodzi i województwie łódzkim? Świadczymy usługi elektryczne z wykorzystaniem naszej wiedzy i wieloletniego doświadczenia. Dzięki temu jesteśmy w stanie sprostać nawet najbardziej wymagającym zleceniom.
            </p>
          </div>
            <ElectricOverlay />
          <div className="absolute inset-0 top-12 bg-[#FF6600]/25 blur-3xl z-[-1] w-1/5 h-2/5" />
          <div className="absolute right-0 top-auto bottom-0  bg-[#2962FF]/25 blur-3xl z-[0] w-1/5 h-3/5" />
        </div>
        <div className="p-6 grid md:grid-cols-3 gap-5">
          {benefits.map((a, i) => (
            <ListBenefits key={i} title={a.title} desc={a.desc} />
          ))}
        </div>
      </section>
    </div>
  );
}
