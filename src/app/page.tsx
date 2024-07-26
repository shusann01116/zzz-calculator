import NavBar from "@/components/Navbar";
import Agent from "@/components/Agent";
import Equipment from "@/components/Equipment";
import Status from "@/components/Status";

export default function Home() {
  return (
    <main className="flex-col justify-center px-4 md:px-24">
      <div className="grid items-center justify-between">
        <NavBar className="fixed left-0 top-0 z-10" />
        <div className="fixed bottom-0 left-0 h-14 w-full bg-gradient-to-t from-background/50 to-background/0" />
      </div>
      <div className="mx-auto mt-20 max-w-screen-lg rounded-t-lg bg-gradient-to-b from-violet-100 to-background to-90%">
        <Agent className="max-w-screen-lg" />
      </div>
      <div className="grid max-w-screen-lg grid-cols-3 rounded-t-lg bg-neutral-900">
        <Equipment className="col-span-2" />
        <Status className="col-span-1 mx-1 mt-10" />
      </div>
    </main>
  );
}
