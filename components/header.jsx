import Link from 'next/link';

const navItems = [
  { linkText: 'Home', href: '/' },
  { linkText: 'About', href: '/about' },
  { linkText: 'Services', href: '/services' },
  { linkText: 'Contact', href: '/contact' },
];

export function Header() {
  const phone = '+91-9067256810'; // TODO: put real number
  const whatsapp = '+91-9067256810'; // TODO: put real WhatsApp

  return (
    <header className="pt-4 pb-6 sm:pt-6 sm:pb-8">
      {/* Top strip */}
      <div className="flex flex-wrap items-center gap-2 pb-3 text-[11px] text-neutral-300 border-b border-neutral-800/70">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-neutral-900 border border-neutral-700 uppercase tracking-[0.16em] text-[10px] text-secondary">
          Jaigad Port · Ratnagiri
        </span>
        <span className="ml-auto flex flex-wrap items-center gap-3">
          <a href={`tel:${phone}`} className="hover:text-primary underline-offset-4 hover:underline">
            Call: {phone}
          </a>
          <a
            href={`https://wa.me/${whatsapp.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline hover:text-secondary underline-offset-4 hover:underline"
          >
            WhatsApp us
          </a>
        </span>
      </div>

      {/* Main nav */}
      <nav className="flex flex-wrap items-center gap-4 pt-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 text-sm font-semibold rounded-full bg-primary text-primary-content shadow-[0_0_25px_rgba(34,197,94,0.45)]">
            HSA
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold md:text-base">
              Hindustan Shipping Agency
            </span>
            <span className="text-[11px] text-neutral-300">
              Shipping &amp; Customs – Jaigad (Jaigarh) Port
            </span>
          </div>
        </Link>

        {/* Nav links */}
        <ul className="flex flex-wrap items-center gap-2 ml-auto text-xs sm:text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="px-3 py-1.5 rounded-full text-neutral-100/90 hover:text-neutral-950 hover:bg-primary/90 transition-colors"
              >
                {item.linkText}
              </Link>
            </li>
          ))}

          {/* Primary CTA */}
          <li>
            <Link
              href="/contact#callback-form"
              className="px-4 py-1.5 text-xs font-semibold rounded-full bg-secondary text-neutral-950 hover:bg-secondary/90 shadow-[0_0_18px_rgba(249,115,22,0.45)]"
            >
              Request a Call Back
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
