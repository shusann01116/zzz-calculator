import NavBar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center p-24 justify-center bg-gradient-to-b from-zinc-700 to-neutral-900">
      <div className="grid items-center justify-between">
        <NavBar />
        <div className="fixed bottom-0 left-0 w-full text-center">footer</div>
      </div>
      <div className="rounded-t-lg bg-black text-white px-8 py-2 text-xl">Agent</div>
      <div className="items-left rounded-t-lg bg-violet-100 text-white px-8 py-4 text-xl">
        <div className="flex overflow-x-auto hidden-scrollbar">
          <div className="flex-none w-20 -skew-x-12 mb-2 ml-2 bg-violet-100 border-2 border-zinc-700" >
            <Image
              src="/assets/img/icon/charactor/elen.png"
              width={500}
              height={500}
              alt="icon of the elen"
              className="rounded-t-lg skew-x-12"
            />
          </div>
          <div className="flex-none w-20 -skew-x-12 mb-2 ml-2 bg-violet-100 border-2 border-zinc-700">
            <Image
              src="/assets/img/icon/charactor/elen.png"
              width={500}
              height={500}
              alt="icon of the elen"
              className="rounded-t-lg skew-x-12"
            />
          </div>
        </div>
        <div className="bg-zinc-700 rounded-t-lg">
          <div className="p-4">
            <Image
              src="/assets/img/charactor-art/elen.png"
              width={500}
              height={500}
              alt="Picture of the elen"
              className="border-2 rounded-t-lg bg-violet-100"
            />
          </div>

        </div>

      </div>
    </main>
  );
}
