import NavBar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center bg-gradient-to-b from-zinc-700 to-neutral-900 p-4 md:p-24">
      <div className="grid items-center justify-between">
        <NavBar />
        <div className="fixed bottom-0 left-0 w-full text-center">footer</div>
      </div>
      <div className="rounded-t-lg bg-black px-8 py-2 text-xl text-white">
        Agent
      </div>
      <div className="items-left rounded-t-lg bg-violet-100 px-8 py-4 text-xl text-white">
        <div className="hidden-scrollbar flex overflow-x-auto">
          <div className="mb-2 ml-2 w-20 flex-none -skew-x-12 border-2 border-zinc-700 bg-violet-100">
            <Image
              src="/assets/img/icon/charactor/elen.png"
              width={500}
              height={500}
              alt="icon of the elen"
              className="skew-x-12 rounded-t-lg"
            />
          </div>
          <div className="mb-2 ml-2 w-20 flex-none -skew-x-12 border-2 border-zinc-700 bg-violet-100">
            <Image
              src="/assets/img/icon/charactor/elen.png"
              width={500}
              height={500}
              alt="icon of the elen"
              className="skew-x-12 rounded-t-lg"
            />
          </div>
        </div>
        <div className="rounded-t-lg bg-zinc-700">
          <div className="p-4">
            <Image
              src="/assets/img/charactor-art/elen.png"
              width={500}
              height={500}
              alt="Picture of the elen"
              className="logo-animation rounded-t-lg border-2 bg-violet-100"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
