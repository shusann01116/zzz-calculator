import { cn } from "@/lib/utils";

export default function Param({
  className,
  paramName,
  paramNum,
}: {
  className?: string;
  paramName: string;
  paramNum: number;
}) {
  return (
    <div className={cn("flex justify-between p-1", className)}>
      <p className="text-sm text-muted-foreground">{paramName}</p>
      <p className="text-sm">{paramNum}</p>
    </div>
  );
}
