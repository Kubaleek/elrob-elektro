import { service } from "@/data/service";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export default function Services() {
  return (
    <div className="bg-[#171717] border-b border-neutral-900 text-neutral-100">
      <section className="max-w-5xl mx-auto  border-x border-neutral-800 items-center justify-center w-full h-full sm:min-h-[500px] flex flex-col">
        <div className="px-6 py-12 flex w-full items-start sm:items-center flex-col justify-center">
          <p className="h-9 inline-flex items-center justify-center px-5 text-xs font-medium tracking-wider border border-dashed uppercase font-mono rounded-full md:text-sm md:h-10 bg-bg-default text-[#FF6600] border-[#FF6600]">Usługi</p>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl sm:text-center md:text-4xl font-bold mt-5 leading-relaxed tracking-tight">EL-ROB – Profesjonalne Usługi Elektryczne</h2>
            <p className="sm:text-center leading-relaxed text-[#c0c0c0]">
              Klienci cenią nasze usługi za fachowość, terminowość oraz pełne dostosowanie do indywidualnych potrzeb. Działamy zgodnie z obowiązującymi normami, zapewniając bezpieczne i solidne instalacje, a dzięki przejrzystym warunkom współpracy i elastycznemu podejściu budujemy zaufanie od
              pierwszego kontaktu.
            </p>
          </div>
          <BentoGrid className="max-w-4xl h-full mx-auto md:auto-rows-auto gap-6 mt-8 ">
            {service.map((a, i) => (
              <BentoGridItem header={a.header} key={i} description={a.description} className={a.className} icon={a.icon} title={a.title} />
            ))}
          </BentoGrid>
        </div>
      </section>
    </div>
  );
}
