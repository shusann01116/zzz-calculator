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
    <div className="fixed top-0 left-0 text-center w-full py-4 border-b bg-gradient-to-b flex px-6">
      <Link href={"/"} className="pointer-events-none text-white">ZZZ Calculator</Link>
      <div className="hidden ml-auto md:block">
      {links.map(l => (
        <Link key={l.url} href={l.url} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.name}</Link>
      ))}
      </div>
    </div>
  );
}
