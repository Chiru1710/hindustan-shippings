// app/page.jsx
import Link from 'next/link';

export default function HomePage() {
    return (
        <div className="py-10 sm:py-14">
            {/* Hero */}
            <section className="grid gap-8 lg:grid-cols-2 items-start">
                <div>
                    <p className="mb-3 text-xs font-semibold tracking-[0.25em] uppercase text-primary">
                        Shipping · Customs · Port Operations
                    </p>
                    <h1 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                        Trusted Shipping &amp; Customs Partner at{' '}
                        <span className="text-primary">Jaigad Port</span>.
                    </h1>
                    <p className="mb-6 text-sm leading-relaxed text-neutral-100 sm:text-base text-neutral-200">
                        Hindustan Shipping Agency is a GST-registered, government-licensed shipping and customs
                        clearance agency based at Jaigad (Jaigarh) Port in Ratnagiri, Maharashtra. We provide
                        end-to-end support for exporters, importers, traders and logistics partners using ports
                        along the Maharashtra coastline.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-7">
                        <Link href="/contact" className="btn">
                            Request a Call Back
                        </Link>
                        <Link
                            href="/services"
                            className="btn btn-secondary"
                            style={{ ['--btn-py']: '0.75rem' }}
                        >
                            View All Services
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs text-neutral-200 sm:flex sm:flex-wrap">
                        <div>
                            <div className="text-lg font-semibold text-primary">2016+</div>
                            <div>Operating as registered shipping agent</div>
                        </div>
                        <div>
                            <div className="text-lg font-semibold text-primary">Jaigad &amp; nearby</div>
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

                {/* Right side info card */}
                <div>
                    <div className="p-5 rounded-2xl bg-neutral-950/40 border border-neutral-800">
                        <h2 className="mb-3 text-base font-semibold sm:text-lg">Key Solutions</h2>
                        <ul className="mb-5 space-y-2 text-sm text-neutral-200">
                            <li>• Vessel &amp; shipping agency services at Jaigad (Jaigarh) Port.</li>
                            <li>• Customs clearance &amp; documentation support via authorised partners.</li>
                            <li>• Coordination with port, customs, surveyors &amp; transporters.</li>
                            <li>• Experience with agri, food, dairy and bulk cargo.</li>
                        </ul>

                        <div className="p-4 text-xs rounded-xl bg-neutral-950/60 border border-neutral-800">
                            <div className="mb-1 font-semibold text-neutral-50">
                                Registered Office (GST Address)
                            </div>
                            <p className="text-neutral-200">
                                356, Post – Jaigad, Village – Nandiwade,
                                <br />
                                Tal. &amp; Dist. Ratnagiri, Maharashtra – 415614, India
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ports & Coverage */}
            <section className="pt-10 mt-10 border-t border-neutral-800">
                <h2 className="mb-3 text-xl font-semibold sm:text-2xl">Ports &amp; Operational Coverage</h2>
                <p className="max-w-2xl mb-5 text-sm text-neutral-200">
                    As a registered shipping agent under the Pune Customs jurisdiction, Hindustan Shipping Agency
                    is authorised to handle vessel and cargo operations at Jaigad (Jaigarh) and other notified
                    minor ports along the Maharashtra coastline, subject to applicable permissions.
                </p>
                <div className="grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
                    <div className="p-4 rounded-xl bg-neutral-950/40 border border-neutral-800">
                        <div className="mb-1 font-semibold text-primary">Jaigad (Jaigarh) Port</div>
                        <div className="text-xs text-neutral-200">
                            Primary base for export–import cargo and vessel operations.
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-neutral-950/40 border border-neutral-800">
                        <div className="mb-1 font-semibold">Ratnagiri Region</div>
                        <div className="text-xs text-neutral-200">
                            Cargo, transport &amp; documentation support across Ratnagiri district.
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-neutral-950/40 border border-neutral-800">
                        <div className="mb-1 font-semibold">Nearby Minor Ports</div>
                        <div className="text-xs text-neutral-200">
                            Coordination at other notified minor ports under customs jurisdiction, where permitted.
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-neutral-950/40 border border-neutral-800">
                        <div className="mb-1 font-semibold">Inland Connectivity</div>
                        <div className="text-xs text-neutral-200">
                            Support for truck movements &amp; connectivity to nearby industrial and agro clusters.
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="pt-10 mt-10 border-t border-neutral-800">
                <h2 className="mb-3 text-xl font-semibold sm:text-2xl">
                    Why Exporters &amp; Importers Choose Us
                </h2>
                <div className="grid gap-4 text-sm sm:grid-cols-3">
                    <div className="p-4 rounded-xl bg-neutral-950/40 border border-neutral-800">
                        <div className="mb-1 font-semibold">Local Port Expertise</div>
                        <p className="text-xs text-neutral-200">
                            Ground experience with Jaigad Port operations, customs procedures and local authorities.
                        </p>
                    </div>
                    <div className="p-4 rounded-xl bg-neutral-950/40 border border-neutral-800">
                        <div className="mb-1 font-semibold">End-to-End Handling</div>
                        <p className="text-xs text-neutral-200">
                            One point of contact for documentation, vessel coordination and transport alignment.
                        </p>
                    </div>
                    <div className="p-4 rounded-xl bg-neutral-950/40 border border-neutral-800">
                        <div className="mb-1 font-semibold">Transparent &amp; Reliable</div>
                        <p className="text-xs text-neutral-200">
                            Clear communication, transparent costing and timely updates at every stage.
                        </p>
                    </div>
                </div>

                <div className="mt-6">
                    <Link href="/contact" className="btn">
                        Discuss your shipment with us
                    </Link>
                </div>
            </section>
        </div>
    );
}
