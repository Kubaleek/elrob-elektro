import { permissions } from "@/data/permissions";

const PermissionList = ({ color, text }: { color: string; text: string }) => {
  return (
    <div className="flex gap-3">
      <p className={`${color} text-lg text-white rounded-full w-1 h-full flex items-center justify-center`}></p>
      <p className="text-base leading-snug tracking-tight">{text}</p>
    </div>
  );
};

export default function Permission() {
  return (
    <div className="w-full border-b border-neutral-300 border-dashed">
      <section className="max-w-5xl mx-auto border-x  w-full h-full lg:min-h-[500px] flex flex-col mt-6 pb-6">
        <div className="p-6 grid lg:grid-cols-1 gap-6 md:gap-9">
          <div>
            <p className="h-9 inline-flex items-center justify-center px-5 text-xs font-medium tracking-wider border border-dashed uppercase font-mono rounded-full md:text-sm md:h-10 bg-bg-default text-[#999] border-neutral-400">
              Uprawnienia
            </p>
            <div className="flex flex-col gap-1 mt-5 border-b border-dashed border-neutral-400 pb-4">
              <h2 className="text-2xl md:text-4xl font-bold leading-relaxed tracking-tight">
                Działamy Zgodnie ze Standardami – <span className="text-[#FF6600]">Mamy Uprawnienia</span>
              </h2>
              <p className="text-base leading-relaxed">EL ROB Elektro Usługi posiada uprawnienia D i E w zakresie obsługi, konserwacji, remontów, montażu oraz kontrolno-pomiarowym.</p>
              <p className="text-base leading-relaxed">Dla Następujących urządzeń, Instalacji i sieci:</p>
              <p className="text-base leading-relaxed">Urządzenia, instalacje i sieci elektroenergetyczne wytwarzające, przetwarzające, przesyłające i zużywające energię elektryczną.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-base tracking-tight leading-relaxed">
            <div className="flex flex-col gap-4 col-span-2 border-r border-dashed pr-3 border-neutral-400">
              {permissions.map((a, i) => (
                <PermissionList key={i} color={a.color} text={a.text} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
