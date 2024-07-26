import { cn } from "@/lib/utils";

export default function Param({
  className,
  paramName,
  paramNum,
  basicParamNum,
  correctionParamNum,
}: {
  className?: string;
  paramName: string;
  paramNum: number;
  basicParamNum: number;
  correctionParamNum: number;
}) {
  return (
    <div className={cn("flex justify-between p-1", className)}>
      <span className="text-sm text-muted-foreground">{paramName}</span>
      <div className="grid grid-cols-1">
        <span className="text-xs ml-2">{basicParamNum}</span>
        <span className="text-plus text-xs">+ {correctionParamNum}</span>
      </div>

      <span className="text-sm">{paramNum}</span>
      <span className="text-sm"></span>
    </div>
  );
}
