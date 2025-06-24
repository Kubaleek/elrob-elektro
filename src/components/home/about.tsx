import { AudioWaveformIcon, WorkflowIcon } from "lucide-react";

export default function About() {
  return (
    <div className="w-full border-b border-neutral-300 border-dashed">
      <section id="o-nas" className="max-w-5xl mx-auto border-x  w-full h-full lg:min-h-[500px] flex flex-col mt-5">
        <div className="p-6 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="h-9 inline-flex items-center justify-center px-5 text-xs font-medium tracking-wider border border-dashed uppercase font-mono rounded-full md:text-sm md:h-10 bg-bg-default text-[#999] border-neutral-400">o firmie</p>
            <div className="flex flex-col gap-1 mt-5 border-b border-dashed border-neutral-400 pb-4">
              <h2 className="text-2xl md:text-4xl font-bold leading-relaxed tracking-tight">
                Poznaj naszą <span className="text-[#FF6600]">firmę</span>
              </h2>
              <p className="text-base leading-relaxed">Jesteśmy firmą elektryczną działającą na terenie Łodzi oraz województwa łódzkiego. Świadczymy kompleksowe usługi elektryczne, bazując na wieloletnim doświadczeniu i specjalistycznej wiedzy.</p>
            </div>
            <div className="grid sm:grid-cols-2 mt-4">
              <div className="flex flex-col justify-between items-start border-b p-4 border-r border-neutral-400 border-dashed">
                <WorkflowIcon className="mb-4" />
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg font-bold leading-relaxed tracking-tight">Bezpieczeństwo i jakość</h2>
                  <p className="text-sm text-neutral-600">Profesjonalne podejście do instalacji i konserwacji zapewnia bezpieczne i trwałe rozwiązania elektryczne.</p>
                </div>
              </div>
              <div className="flex flex-col justify-between items-start border-b p-4 border-neutral-400 border-dashed">
                <AudioWaveformIcon className="mb-4" />
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg font-bold leading-relaxed tracking-tight">Doświadczenie i specjalistyczna wiedza</h2>
                  <p className="text-sm text-neutral-600">Wieloletnie doświadczenie to gwarancja sprawdzonych i dopasowanych rozwiązań.</p>
                </div>
              </div>
              <div className="flex flex-col justify-between items-start border-r p-4 border-neutral-400 border-dashed">
                <AudioWaveformIcon className="mb-4" />
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg font-bold leading-relaxed tracking-tight">Szeroki zakres usług</h2>
                  <p className="text-sm text-neutral-600">Kompleksowa obsługa obejmuje instalacje, naprawy, konserwację oraz pomiary.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 min-h-[400px]">
            <div className="border border-[#FF6600] bg-[#FF6600]/25 col-span-1"></div>
            <div className="bg-[url(/5.jpg)] bg-center bg-no-repeat bg-cover col-span-1"></div>
            <div className="border border-[#FF6600] bg-[#FF6600]/25 col-span-1"></div>
            <div className=" col-span-2 bg-[url(/1.jpg)] bg-center bg-no-repeat bg-cover"></div>
            <div className="col-span-1 border border-[#FF6600] bg-[#FF6600]/25"></div>
            <div className="col-span-1 border border-[#FF6600] bg-[#FF6600]/25"></div>
            <div className="col-span-2 bg-[url(/2.jpg)] bg-center bg-no-repeat bg-cover"></div>
            <div className="hidden col-span-3"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
