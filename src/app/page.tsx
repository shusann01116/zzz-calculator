import NavBar from "@/components/Navbar";
import Agent from "@/components/Agent";
import Equipment from "@/components/Equipment";

export default function Home() {
  return (
    <main className="flex-col justify-center px-4 md:px-24">
      <div className="grid items-center justify-between">
        <NavBar className="fixed left-0 top-0 z-10" />
        <div className="fixed bottom-0 left-0 h-14 w-full bg-gradient-to-t from-background/50 to-background/0" />
      </div>
      <div className="mx-auto mt-20 max-w-screen-lg">
        <Agent className="max-w-screen-lg" />
        <Equipment className="col-span-2 mx-4" />
      </div>

    </main>
  );
}
