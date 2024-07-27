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
      <div className="justify-right flex">
        <div className="grid grid-cols-1">
          <span className="ml-2 text-xs">{basicParamValue}</span>
          <span className="text-xs text-positive">
            + {correctionParamValue}
          </span>
        </div>
        <span className="ml-2 text-sm">{paramValue}</span>
      </div>
    </div>
  );
}
