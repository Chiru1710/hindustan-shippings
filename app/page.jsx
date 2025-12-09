import Link from 'next/link';

export default function HomePage() {
  const phone = '+91-9067256810'; // same as header
  const whatsapp = '+91-8530031710';

  return (
    <div className="py-8 sm:py-10">
      {/* Hero */}
      <section className="grid items-start gap-8 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] uppercase text-secondary">
            Shipping · Customs · Port Operations
          </p>
          <h1 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Hindustan Shipping Agency &amp; Customs Partner at{' '}
            <span className="text-primary">Jaigad Port</span>.
          </h1>
          <p className="mb-5 text-sm leading-relaxed text-neutral-200 sm:text-base">
            Hindustan Shipping Agency is a GST-registered shipping and customs clearance agency based at
            Jaigad (Jaigarh) Port in Ratnagiri, Maharashtra. We provide end-to-end support for exporters,
            importers, traders and logistics partners using ports along the Maharashtra coastline.
          </p>

          {/* Primary actions */}
          <div className="flex flex-wrap gap-3 mb-6">
            <Link href="/contact#callback-form" className="btn" style={{ ['--btn-px']: '1.6rem' }}>
              Request a Call Back
            </Link>
            <Link
              href="/services"
              className="btn"
              style={{ ['--btn-py']: '0.7rem', ['--btn-font-size']: '0.8rem' }}
            >
              View All Services
            </Link>
          </div>

          {/* Quick actions */}
          <div className="flex flex-wrap gap-2 mb-7 text-[11px] text-neutral-300">
            <a href={`tel:${phone}`} className="px-3 py-1 rounded-full border border-neutral-700 hover:border-primary hover:text-primary transition">
              Call operations team
            </a>
            <a
              href={`https://wa.me/${whatsapp.replace('+', '')}?text=Hello%20Hindustan%20Shipping%20Agency%2C%20I%20would%20like%20to%20discuss%20a%20shipment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full border border-neutral-700 hover:border-secondary hover:text-secondary transition"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact#callback-form"
              className="px-3 py-1 rounded-full border border-neutral-700 hover:border-primary hover:text-primary transition"
            >
              Share shipment details
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 text-xs text-neutral-200 sm:flex sm:flex-wrap">
            <div>
              <div className="text-lg font-semibold text-primary">2016+</div>
              <div>Operating as registered shipping agent</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-primary">
                Jaigad &amp; nearby
              </div>
              <div>Serving Maharashtra minor ports</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-primary">End-to-end</div>
              <div>Documentation &amp; port coordination</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-primary">GSTIN</div>
              <div>27AHSPG6536G1Z0</div>
            </div>
          </div>
        </div>

        {/* Right: premium card */}
        <div>
          <div className="p-5 rounded-2xl bg-neutral-950/70 border border-neutral-800 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
            <h2 className="mb-1 text-base font-semibold sm:text-lg">
              Port-Focused Solutions for EXIM Cargo
            </h2>
            <p className="mb-4 text-xs text-neutral-300">
              One-point coordination for vessels, cargo, documentation, customs brokers, surveyors and transporters at and around Jaigad Port.
            </p>
            <ul className="mb-5 space-y-2 text-sm text-neutral-200">
              <li>• Vessel &amp; shipping agency services at Jaigad (Jaigarh) Port.</li>
              <li>• Customs &amp; documentation support via authorised partners.</li>
              <li>• Coordination with port, customs, surveyors &amp; transporters.</li>
              <li>• Experience with agri, food, dairy and bulk cargo.</li>
            </ul>

            <div className="p-4 mb-3 text-xs rounded-xl bg-neutral-950 border border-neutral-800">
              <div className="mb-1 font-semibold text-neutral-50">
                Registered Office (GST Address)
              </div>
              <p className="text-neutral-200">
                356, Post – Jaigad, Village – Nandiwade,
                <br />
                Tal. &amp; Dist. Ratnagiri, Maharashtra – 415614, India
              </p>
            </div>

            <p className="text-[11px] text-neutral-400">
              Share your tentative shipment plan and we’ll revert with a handling approach tailored to your commodity, volume and timing.
            </p>
          </div>
        </div>
      </section>

      {/* Ports & Coverage */}
      <section className="pt-9 mt-9 border-t border-neutral-800">
        <h2 className="mb-3 text-xl font-semibold sm:text-2xl text-neutral-50">
          Ports &amp; Operational Coverage
        </h2>
        <p className="max-w-2xl mb-5 text-sm text-neutral-200">
          As a registered shipping agent under the Pune Customs jurisdiction, Hindustan Shipping Agency can
          support vessel and cargo operations at Jaigad (Jaigarh) and other notified minor ports along the
          Maharashtra coastline, subject to applicable permissions.
        </p>
        <div className="grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800">
            <div className="mb-1 font-semibold text-primary">Jaigad (Jaigarh) Port</div>
            <div className="text-xs text-neutral-200">
              Primary base for export–import cargo and vessel operations.
            </div>
          </div>
          <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800">
            <div className="mb-1 font-semibold text-neutral-100">Ratnagiri Region</div>
            <div className="text-xs text-neutral-200">
              Cargo, transport &amp; documentation support across Ratnagiri district.
            </div>
          </div>
          <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800">
            <div className="mb-1 font-semibold text-neutral-100">Nearby Minor Ports</div>
            <div className="text-xs text-neutral-200">
              Coordination at other notified minor ports under customs jurisdiction, where permitted.
            </div>
          </div>
          <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800">
            <div className="mb-1 font-semibold text-neutral-100">Inland Connectivity</div>
            <div className="text-xs text-neutral-200">
              Support for truck movements &amp; connectivity to nearby industrial and agro clusters.
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="pt-9 mt-9 border-t border-neutral-800">
        <h2 className="mb-3 text-xl font-semibold sm:text-2xl text-neutral-50">
          Why Exporters &amp; Importers Choose Us
        </h2>
        <div className="grid gap-4 text-sm sm:grid-cols-3">
          <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800">
            <div className="mb-1 font-semibold text-neutral-100">Local Port Expertise</div>
            <p className="text-xs text-neutral-200">
              Ground experience with Jaigad Port operations, customs procedures and local authorities.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800">
            <div className="mb-1 font-semibold text-neutral-100">End-to-End Handling</div>
            <p className="text-xs text-neutral-200">
              One point of contact for documentation, vessel coordination and transport alignment.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800">
            <div className="mb-1 font-semibold text-neutral-100">Transparent &amp; Reliable</div>
            <p className="text-xs text-neutral-200">
              Clear communication, transparent costing and timely updates at every stage.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Link href="/contact#callback-form" className="btn">
            Discuss your shipment with us
          </Link>
        </div>
      </section>
    </div>
  );
}
