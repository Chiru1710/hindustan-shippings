// app/layout.jsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Hindustan Shipping Agency – Jaigad Port, Ratnagiri",
  description:
    "Hindustan Shipping Agency is a registered shipping and customs clearance agency serving Jaigad (Jaigarh) Port and nearby Maharashtra ports with end-to-end export–import logistics solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
        {/* Header / Navbar */}
        <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur sticky top-0 z-20">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full border border-cyan-400 flex items-center justify-center text-xs font-semibold tracking-tight">
                HSA
              </div>
              <div>
                <div className="font-semibold text-sm sm:text-base">
                  Hindustan Shipping Agency
                </div>
                <div className="text-[11px] text-slate-400">
                  Jaigad Port · Ratnagiri, Maharashtra
                </div>
              </div>
            </Link>

            <nav className="flex items-center gap-4 text-sm">
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-cyan-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="hover:text-cyan-400 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="hover:text-cyan-400 transition-colors"
              >
                Contact
              </Link>

              <a
                href="https://wa.me/9067256810"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center rounded-full border border-cyan-500 px-3 py-1.5 text-xs font-medium hover:bg-cyan-500 hover:text-slate-950 transition-colors"
              >
                WhatsApp Us
              </a>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800 bg-slate-950 mt-12">
          <div className="mx-auto max-w-6xl px-4 py-6 text-xs sm:text-[13px] flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              © {new Date().getFullYear()} Hindustan Shipping Agency. All
              rights reserved.
            </div>
            <div className="text-slate-400">
              Registered Shipping & Customs Agent · Jaigad (Jaigarh) Port ·
              Ratnagiri, Maharashtra
            </div>
          </div>
        </footer>
      </body

