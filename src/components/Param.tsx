import { cn } from "@/lib/utils";

export default function Param({
  className,
  paramName,
  paramValue,
  basicParamValue,
  correctionParamValue,
}: {
  className?: string;
  paramName: string;
  paramValue: number;
  basicParamValue: number;
  correctionParamValue: number;
}) {
  return (
    <div className={cn("flex justify-between p-1", className)}>
      <span className="text-sm text-muted-foreground">{paramName}</span>
      <div className="grid grid-cols-1">
        <span className="text-xs ml-2">{basicParamValue}</span>
        <span className="text-plus text-xs">+ {correctionParamValue}</span>
      </div>

      <span className="text-sm">{paramValue}</span>
      <span className="text-sm"></span>
    </div>
  );
}
