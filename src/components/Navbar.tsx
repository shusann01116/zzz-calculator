import { cn } from "@/lib/utils";
import Link from "next/link";

const links: {
  name: string;
  url: string;
}[] = [
  {
    name: "Damage Formula (External Link)",
    url: "https://docs.google.com/document/d/e/2PACX-1vSo82Ac3HqdI_G5_BoAqYJToK6LX4FGLPJxjPZEbhMQ-wSyFyxDFl1dr8i5czcCLJmYwxWfsXkCXN6v/pub",
  },
];

export default function NavBar({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        "flex w-full border-b bg-gradient-to-b px-6 py-4 text-center backdrop-blur-md dark:border-b-zinc-800 dark:bg-zinc-800/50 dark:from-zinc-900/50",
        className
      )}
    >
      <Link href={"/"} className="pointer-events-none text-foreground">
        ZZZ Calculator
      </Link>
      <div className="ml-auto hidden md:block">
        {links.map((l) => (
          <Link
            key={l.url}
            href={l.url}
            className="text-sm text-foreground transition-colors hover:text-primary"
          >
            {l.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
