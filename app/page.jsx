// app/page.jsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      {/* Hero Section */}
      <section className="grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-3">
            Shipping · Customs · Port Operations
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            Trusted Shipping & Customs Clearance Partner at{" "}
            <span className="text-cyan-400">Jaigad Port</span>.
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
            Hindustan Shipping Agency is a GST-registered, government-licensed
            shipping and customs clearance agency based at Jaigad (Jaigarh) Port
            in Ratnagiri, Maharashtra. We provide end-to-end support for
            exporters, importers, vessel operators and logistics partners across
            Maharashtra&apos;s west coast.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950 hover:bg-cyan-400 transition-colors"
            >
              Request a Call Back
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium hover:border-cyan-400 hover:text-cyan-400 transition-colors"
            >
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 text-xs text-slate-300">
            <div>
              <div className="text-lg font-semibold text-cyan-400">
                2016+
              </div>
              <div>Operating as registered shipping agent</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-cyan-400">
                Jaigad &amp; nearby
              </div>
              <div>Serving Maharashtra minor ports</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-cyan-400">
                End-to-End
              </div>
              <div>Documentation &amp; customs support</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-cyan-400">
                GSTIN:
              </div>
              <div>27AHSPG6536G1Z0</div>
            </div>
          </div>
        </div>

        {/* Right side card */}
        <div className="lg:pl-8">
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-5 sm:p-6 shadow-xl shadow-cyan-500/10">
            <h2 className="text-base sm:text-lg font-semibold mb-3">
              Key Solutions for Exporters &amp; Importers
            </h2>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Vessel &amp; shipping agency services at Jaigad (Jaigarh) Port.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Customs clearance &amp; documentation for export–import cargo.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Coordination with port authorities, surveyors &amp; transporters.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Support for agri, food, dairy, bulk &amp; project cargo.
              </li>
            </ul>

            <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300">
              <div className="font-semibold text-slate-100 mb-1">
                Registered Office (GST Address)
              </div>
              <p>
                356, Post – Jaigad, Village – Nandiwade,
                <br />
                Tal. & Dist. Ratnagiri, Maharashtra – 415614, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ports & Coverage Section */}
      <section className="mt-14 border-t border-slate-800 pt-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          Ports &amp; Operational Coverage
        </h2>
        <p className="text-sm text-slate-300 mb-4 max-w-2xl">
          As a registered shipping agent under the Pune Customs jurisdiction,
          Hindustan Shipping Agency is authorised to handle vessel and cargo
          operations at Jaigad (Jaigarh) and other notified minor ports along
          the Maharashtra coastline.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="font-semibold text-cyan-400 mb-1">
              Jaigad (Jaigarh) Port
            </div>
            <div className="text-xs text-slate-300">
              Primary operating base for export–import cargo and vessel
              operations.
            </div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="font-semibold mb-1">Ratnagiri Region</div>
            <div className="text-xs text-slate-300">
              Cargo, transport &amp; documentation support across Ratnagiri
              district.
            </div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="font-semibold mb-1">Nearby Minor Ports</div>
            <div className="text-xs text-slate-300">
              Coordination possible at other notified minor ports under customs
              jurisdiction, where permitted.
            </div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="font-semibold mb-1">Inland Logistics</div>
            <div className="text-xs text-slate-300">
              Support for truck movements &amp; connectivity to nearby
              industrial clusters.
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mt-14 border-t border-slate-800 pt-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          Why Exporters &amp; Importers Choose Us
        </h2>
        <div className="grid gap-4 sm:grid-cols-3 text-sm">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="font-semibold mb-1">Local Port Expertise</div>
            <p className="text-xs text-slate-300">
              Decades of combined experience with Jaigad Port operations,
              customs procedures and local authorities.
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="font-semibold mb-1">End-to-End Handling</div>
            <p className="text-xs text-slate-300">
              From documentation &amp; clearances to vessel coordination and
              transport, one point of contact for your entire movement.
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="font-semibold mb-1">Transparent &amp; Reliable</div>
            <p className="text-xs text-slate-300">
              Clear communication, transparent costing and responsibility for
              timely updates at every milestone.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex text-sm items-center rounded-full border border-cyan-500 px-5 py-2.5 font-medium hover:bg-cyan-500 hover:text-slate-950 transition-colors"
          >
            Discuss your shipment with us
          </Link>
        </div>
      </section>
    </div>
  );
}
