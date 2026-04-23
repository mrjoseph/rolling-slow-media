import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
        <Link href="/" className="text-2xl text-white" style={{ fontFamily: "'Ostrich Sans Heavy', sans-serif" }}>
          Rolling Slow <span className="text-[#e35e9f]">MEDIA</span>
        </Link>

        <nav className="flex flex-wrap items-center justify-end gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
