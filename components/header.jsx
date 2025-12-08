import Link from 'next/link';

const navItems = [
  { linkText: 'Home', href: '/' },
  { linkText: 'About', href: '/about' },
  { linkText: 'Services', href: '/services' },
  { linkText: 'Contact', href: '/contact' },
];

export function Header() {
  return (
    <header className="pt-8 pb-8 sm:pt-10 sm:pb-10">
      <nav className="flex flex-wrap items-center gap-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 text-sm font-semibold rounded-full bg-primary text-primary-content">
            HSA
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold md:text-base">
              Hindustan Shipping Agency
            </span>
            <span className="text-xs text-neutral-300">
              Jaigad (Jaigarh) Port · Ratnagiri, Maharashtra
            </span>
          </div>
        </Link>

        {/* Nav links */}
        <ul className="flex flex-wrap items-center gap-3 ml-auto text-xs sm:text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="px-3 py-1 transition-colors rounded-full text-neutral-100 hover:text-blue-950 hover:bg-primary"
              >
                {item.linkText}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/9067256810"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 text-xs font-medium rounded-full bg-primary text-primary-content hover:opacity-90"
            >
              WhatsApp Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
