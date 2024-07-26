import { cn } from "@/lib/utils";
import Param from "@/components/Param";

export default function Status({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col rounded-t-lg bg-neutral-900", className)}>
      <div className="grid rounded-md rounded-br-3xl border-2 border-stone-950">
        <Param className="bg-stone-950" paramName="HP" paramNum={10000} />
        <Param className="" paramName="HP" paramNum={10000} />
        <Param className="bg-stone-950" paramName="HP" paramNum={10000} />
        <Param className="" paramName="HP" paramNum={10000} />
      </div>
    </div>
  );
}
