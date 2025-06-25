import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-[#171717] border-b border-neutral-900 text-neutral-100">
      <section className="max-w-5xl mx-auto  border-x border-neutral-800 items-start justify-start w-full h-full  flex flex-col">
        <div className="p-6 py-16">
          <p className="h-9 inline-flex items-center justify-center px-5 text-xs font-medium tracking-wider border border-dashed uppercase font-mono rounded-full md:text-sm md:h-10 bg-bg-default text-[#FF6600] border-[#FF6600]">Kontakt</p>
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl md:text-4xl font-bold mt-5 leading-relaxed tracking-tight">Masz pytania? Jesteśmy do dyspozycji</h2>
            <p className="leading-relaxed text-[#c0c0c0]">
              Masz pytania, potrzebujesz wyceny lub chcesz umówić termin realizacji? Skontaktuj się z nami! EL-ROB chętnie odpowie na wszelkie wątpliwości i doradzi najlepsze rozwiązania dopasowane do Twoich potrzeb. Działamy sprawnie, fachowo i z pełnym zaangażowaniem jesteśmy tu, by Ci pomóc.
            </p>
          </div>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="border border-dashed flex items-center flex-col gap-3 justify-center border-neutral-600 py-8 px-4">
              <Mail className="w-13 h-13 text-neutral-500" />
              <p className="text-lg text-neutral-200 ">robert.krol.el@gmail.com</p>
            </div>
            <div className="border border-dashed  flex items-center flex-col gap-3 justify-center border-neutral-600 py-8 px-4">
              <Phone className="w-13 h-13 text-neutral-500" />
              <p className="text-lg text-neutral-200 ">+48737593320</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
