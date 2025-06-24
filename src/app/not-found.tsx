import Link from "next/link";

export default function notFound() {
  return (
    <div className="w-full border-b border-neutral-300 border-dashed">
      <div className="max-w-5xl mx-auto border-x  w-full h-full sm:min-h-[500px] items-center justify-center flex flex-col">
        <div className=" w-full overflow-hidden relative  h-full lg:min-h-[500px] py-12 flex items-center justify-center flex-col gap-3  border-x max-w-[1440px] mx-auto border-[#8079751e]">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl text-neutral-900 max-w-2xl text-center font-extrabold tracking-tight ">Nie Znaleziono!</h1>
            <p className="text-center text-lg leading-tight text-neutral-700 text-pretty">Strona, której szukasz nie istnieje.</p>
          </div>
          <Link href={"/"} className="text-neutral-800 mt-2 inline-block font-medium underline hover:no-underline">
            Wróć do Strony Głównej
          </Link>
        </div>
      </div>
    </div>
  );
}
