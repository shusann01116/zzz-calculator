import { cn } from "@/lib/utils";

export default function GearSet({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-between p-1", className)}>
      <div className="">
        <div className="absolute h-64 w-64 rotate-[10deg] rounded-full bg-white">
          <p className="h-24 w-24 -rotate-[10deg] rounded-full bg-black text-center">
            1
          </p>
        </div>
        <div className="absolute h-64 w-64 rotate-[315deg] rounded-full">
          <p className="h-24 w-24 -rotate-[315deg] rounded-full bg-black text-center">
            2
          </p>
        </div>
        <div className="absolute h-64 w-64 rotate-[260deg] rounded-full">
          <p className="h-24 w-24 -rotate-[260deg] rounded-full bg-black text-center">
            3
          </p>
        </div>
        <div className="absolute h-64 w-64 rotate-[195deg] rounded-full">
          <p className="h-24 w-24 -rotate-[195deg] rounded-full bg-black text-center">
            4
          </p>
        </div>
        <div className="absolute h-64 w-64 rotate-[140deg] rounded-full">
          <p className="h-24 w-24 -rotate-[140deg] rounded-full bg-black text-center">
            5
          </p>
        </div>
        <div className="absolute h-64 w-64 rotate-[85deg] rounded-full">
          <p className="h-24 w-24 -rotate-[85deg] rounded-full bg-black text-center">
            6
          </p>
        </div>
        <div className="absolute mt-28 h-64 w-64 rotate-[45deg] rounded-full">
          <p className="h-24 w-24 -rotate-[45deg] rounded-full bg-black text-center">
            weapon
          </p>
        </div>
      </div>
    </div>
  );
}
