import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return <div className={cn("mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3", className)}>{children}</div>;
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  titleClass,
  descriptionClass,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  titleClass?: string;
  descriptionClass?: string;
}) => {
  return (
    <div className={cn("group/bento row-span-1 flex flex-col justify-between h-full space-y-4 rounded-xl border border-neutral-200 bg-white p-4 ", className)}>
      {header}
      <div>
        {icon}
        <div className={`mt-2 mb-2 font-sans text-lg font-bold text-neutral-100 ${titleClass}  transition-all`}>{title}</div>
        <div className={`font-sans text-sm font-normal text-neutral-400 ${descriptionClass}`}>{description}</div>
      </div>
    </div>
  );
};
