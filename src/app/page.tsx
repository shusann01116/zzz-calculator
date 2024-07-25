import NavBar from "@/components/Navbar";
import Agent from "@/components/Agent";

export default function Home() {
  return (
    <main className="min-h-screen flex-col justify-center bg-gradient-to-b from-zinc-700 from-10% to-neutral-900 to-90% px-4 md:px-24">
      <div className="grid items-center justify-between">
        <NavBar className="fixed left-0 top-0 z-10" />
        <div className="fixed bottom-0 left-0 h-14 w-full bg-gradient-to-t from-background/50 to-background/0 backdrop-blur-lg" />
      </div>
      <Agent className="m-auto mt-20 max-w-screen-lg" />
    </main>
  );
}
