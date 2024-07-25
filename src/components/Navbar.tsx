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

export default function NavBar() {
  return (
    <div className="fixed left-0 top-0 flex w-full border-b bg-gradient-to-b px-6 py-4 text-center z-40">
      <Link href={"/"} className="pointer-events-none text-white">
        ZZZ Calculator
      </Link>
      <div className="ml-auto hidden md:block">
        {links.map((l) => (
          <Link
            key={l.url}
            href={l.url}
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            {l.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
