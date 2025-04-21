import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

export default function SectionHeading({ title, className }: SectionHeadingProps) {
  return (
    <div className={cn("text-center", className)}>
      <h2 className="text-3xl font-bold tracking-tight relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-chart-1 dark:bg-chart-1 rounded"></span>
      </h2>
    </div>
  );
}