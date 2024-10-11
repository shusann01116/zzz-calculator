import { cn } from "@/lib/utils";
import Image from "next/image";

export default function GearSet({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-between p-1", className)}>
      <div className="bg-cover h-72 w-80 bg-[url('/assets/img/bg/gear-set/image.png')]">
        <div className="ml-10">
          <div className="absolute h-64 w-64 rotate-[10deg] rounded-full">
            <p className="mt-6 ml-2 h-20 w-20 -rotate-[10deg] rounded-full bg-cover bg-[url('/assets/img/bg/disc/image.png')] text-center">
              1
            </p>
          </div>
          <div className="absolute h-64 w-64 rotate-[315deg] rounded-full">
            <p className="mt-5 h-20 w-20 -rotate-[315deg] rounded-full bg-cover bg-[url('/assets/img/bg/disc/image.png')] text-center">
              2
            </p>
          </div>
          <div className="absolute h-64 w-64 rotate-[260deg] rounded-full">
            <p className="h-20 w-20 -rotate-[260deg] rounded-full bg-cover bg-[url('/assets/img/bg/disc/image.png')] text-center">
              3
            </p>
          </div>
          <div className="absolute h-64 w-64 rotate-[195deg] rounded-full">
            <p className="h-20 w-20 -rotate-[195deg] rounded-full bg-cover bg-[url('/assets/img/bg/disc/image.png')] text-center">
              4
            </p>
          </div>
          <div className="absolute h-64 w-64 rotate-[140deg] rounded-full">
            <p className="h-20 w-20 -rotate-[140deg] rounded-full bg-cover bg-[url('/assets/img/bg/disc/image.png')] text-center">
              5
            </p>
          </div>
          <div className="absolute h-64 w-64 rotate-[85deg] rounded-full">
            <p className="h-20 w-20 -rotate-[85deg] rounded-full bg-cover bg-[url('/assets/img/bg/disc/image.png')] text-center">
              6
            </p>
          </div>
          <div className="absolute mt-28 h-52 w-52 rotate-[45deg] rounded-full">
            <p className="h-20 w-20 -rotate-[45deg] rounded-full bg-cover bg-[url('/assets/img/bg/disc/image.png')] text-center">
              <Image
                src="/assets/img/icon/wepon/70a87cfa5443dad2350bc8c4725abbef.png"
                width={500}
                height={500}
                alt="Picture of the elen"
                className="h-20 w-20 rounded-full bg-neutral-800 text-center"
              />
            </p>
          </div>    
        </div>
      </div>
    </div>
  );
}
