import { cn } from "@/lib/utils";
import Param from "@/components/Param";

export default function Status({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col rounded-t-lg", className)}>
      <div className="grid rounded-md rounded-br-3xl border-2 border-stone-950">
        <Param className="bg-stone-950" paramName="HP" paramNum={10000} basicParamNum={8000} correctionParamNum={2000}/>
        <Param className="" paramName="HP" paramNum={10000} basicParamNum={8000} correctionParamNum={2000} />
        <Param className="bg-stone-950" paramName="HP" paramNum={10000} basicParamNum={8000} correctionParamNum={2000}/>
        <Param className="" paramName="HP" paramNum={10000} basicParamNum={8000} correctionParamNum={2000}/>
      </div>
    </div>
  );
}
