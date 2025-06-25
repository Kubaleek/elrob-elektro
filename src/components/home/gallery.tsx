export default function Gallery() {
  return (
    <div className="w-full border-b border-neutral-300  border-dashed">
      <section id="galeria" className="max-w-5xl  border-neutral-300 mx-auto border-x flex flex-col  w-full h-full mt-5">
        <div className="p-6">
          <p className="h-9 inline-flex items-center justify-center px-5 text-xs font-medium tracking-wider border border-dashed uppercase font-mono rounded-full md:text-sm md:h-10 bg-bg-default text-[#999] border-neutral-400">Galeria</p>
          <div className="flex flex-col gap-1 mt-5 border-b border-dashed border-neutral-400 pb-4">
            <h2 className="text-2xl md:text-4xl font-bold leading-relaxed tracking-tight">
              Przykłady Naszych <span className="text-[#FF6600]">Prac</span>
            </h2>
            <p className="text-base leading-relaxed">Każde zlecenie realizujemy z pełnym zaangażowaniem, łącząc fachową wiedzę z najwyższymi standardami bezpieczeństwa. Satysfakcja klienta jest dla nas priorytetem, dlatego dbamy o każdy detal na każdym etapie współpracy.</p>
          </div>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <div className="border border-dashed border-neutral-400 min-h-[200px]" />
            <div className="border border-dashed border-neutral-400 min-h-[200px]" />
            <div className="border border-dashed border-neutral-400 min-h-[200px]" />
            <div className="border border-dashed border-neutral-400 min-h-[200px]" />
            <div className="border border-dashed border-neutral-400 min-h-[200px]" />
            <div className="border border-dashed border-neutral-400 min-h-[200px]" />
          </div>
        </div>
      </section>
    </div>
  );
}
