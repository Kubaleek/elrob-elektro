import { ServicePages } from "@/data/service-pages";
import { notFound } from "next/navigation";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Skeleton } from "@/components/ui/skeleton-block";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const page = ServicePages.find((page) => page.slug === slug);

  if (!page) {
    return {
      title: "404 - Nie Znaleziono",
      description: "Strona, której szukasz nie istnieje.",
    };
  }
  return {
    title: page?.name,
    description: page?.desc,
  };
}

export default async function Slug({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  console.log(slug);

  const findedPage = ServicePages.find((page) => page.slug === slug);

  if (!findedPage) {
    return notFound();
  }

  const listOffers = findedPage.list;

  return (
    <div className="border-b border-neutral-300 border-dashed">
      <section className="bg-[#171717] border-b border-neutral-900 text-neutral-100">
        <div className="max-w-5xl mx-auto  border-x border-neutral-800 items-center justify-center w-full h-full sm:min-h-[500px] flex flex-col">
          <div className="px-6 py-12 flex w-full items-start sm:items-center flex-col justify-center">
            <p className="h-9 inline-flex items-center justify-center px-5 text-xs font-medium tracking-wider border border-dashed uppercase font-mono rounded-full md:text-sm md:h-10 bg-bg-default text-[#FF6600] border-[#FF6600]">Usługa</p>
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl sm:text-center md:text-4xl font-bold mt-2 leading-relaxed tracking-tight">{findedPage.name}</h2>
              <p className="sm:text-center max-w-2xl mx-auto leading-relaxed text-[#c0c0c0]">{findedPage.desc}</p>
            </div>
            <BentoGrid className="max-w-4xl h-full mx-auto md:auto-rows-auto gap-6 mt-8 ">
              {listOffers.map((a, i) => (
                <BentoGridItem icon={a.icon} key={i} header={<Skeleton />} description={a.desc} className={a.className} title={a.title} />
              ))}
            </BentoGrid>
          </div>
        </div>
      </section>
    </div>
  );
}
