import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import GearSet from "@/components/GearSet";

export default function Agent({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col rounded-t-lg bg-neutral-900", className)}>
      <div className="flex items-center px-4 py-2 text-center text-white">
        <ArrowLeft className="h-4 w-4" />
        <h2 className="pl-2">エージェント詳細</h2>
      </div>
      <div className="items-left rounded-t-lg bg-gradient-to-b from-violet-100 to-background to-90% p-4 text-xl text-white">
        <div className="hidden-scrollbar flex overflow-x-auto">
          <div className="mb-2 ml-2 w-20 flex-none -skew-x-12 rounded-sm border-2 border-zinc-700 bg-violet-100">
            <Image
              src="/assets/img/icon/charactor/elen.png"
              width={500}
              height={500}
              alt="icon of the elen"
              className="skew-x-12 rounded-t-lg"
            />
          </div>
          <div className="mb-2 ml-2 w-20 -skew-x-12 rounded-sm border-2 border-zinc-700 bg-violet-100">
            <Image
              src="/assets/img/icon/charactor/elen.png"
              width={500}
              height={500}
              alt="icon of the elen"
              className="skew-x-12 rounded-lg"
            />
          </div>
        </div>
        <div className="rounded-lg bg-neutral-800">
          <div className="grid grid-cols-5 p-4">
            <Image
              src="/assets/img/charactor-art/elen.png"
              width={500}
              height={500}
              alt="Picture of the elen"
              className="logo-animation col-span-3 rounded-t-sm bg-violet-100"
            />
            <GearSet className="col-span-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
