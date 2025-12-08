// app/about/page.jsx
export default function AboutPage() {
    return (
        <div className="py-10 sm:py-14">
            <h1 className="mb-3 text-2xl font-semibold sm:text-3xl">About Hindustan Shipping Agency</h1>
            <p className="mb-6 text-sm text-neutral-200">
                Hindustan Shipping Agency is a proprietorship-run shipping and customs clearance agency based at
                Jaigad (Jaigarh) Port in Ratnagiri, Maharashtra. We support exporters, importers, traders and
                logistics partners with reliable port-side services along the Maharashtra coastline.
            </p>

            <div className="grid gap-5 mb-8 text-sm sm:grid-cols-2">
                <div className="p-4 rounded-xl bg-neutral-950/40 border border-neutral-800">
                    <div className="mb-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                        Legal &amp; Registration
                    </div>
                    <ul className="space-y-1 text-xs text-neutral-200">
                        <li>Proprietorship: Hindustan Shipping Agency</li>
                        <li>GSTIN: 27AHSPG6536G1Z0</li>
                        <li>
                            Address: 356, Post – Jaigad, Village – Nandiwade, Tal. &amp; Dist. Ratnagiri,
                            Maharashtra – 415614
                        </li>
                        <li>Registered as a regular GST service provider.</li>
                    </ul>
                </div>

                <div className="p-4 rounded-xl bg-neutral-950/40 border border-neutral-800">
                    <div className="mb-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                        Port &amp; Operations
                    </div>
                    <ul className="space-y-1 text-xs text-neutral-200">
                        <li>Operating base at Jaigad (Jaigarh) Port, Ratnagiri.</li>
                        <li>Experience with export–import cargo and vessel operations.</li>
                        <li>Coordination with customs brokers, surveyors &amp; transport partners.</li>
                    </ul>
                </div>
            </div>

            <h2 className="mb-3 text-xl font-semibold">Our Role at the Port</h2>
            <p className="mb-4 text-sm text-neutral-200">
                At Jaigad Port, timing and coordination are critical. Our role is to ensure that vessels, cargo,
                documentation, surveyors, customs and transporters move in sync so that our clients experience
                smooth and predictable operations. We act as the on-ground representative of exporters, importers
                and vessel operators, protecting their interests at every step.
            </p>

            <h2 className="mb-3 text-xl font-semibold">How We Work</h2>
            <ul className="mb-4 space-y-2 text-sm text-neutral-200 list-disc list-inside">
                <li>
                    <span className="font-semibold">Planning:</span> understanding cargo, schedules and required
                    documentation in advance.
                </li>
                <li>
                    <span className="font-semibold">Coordination:</span> aligning with port, customs, surveyors,
                    shipping lines and transporters.
                </li>
                <li>
                    <span className="font-semibold">Execution:</span> supervising operations during vessel
                    arrival, loading/unloading and dispatch.
                </li>
                <li>
                    <span className="font-semibold">Updates:</span> keeping clients informed with clear, timely
                    communication.
                </li>
                <li>
                    <span className="font-semibold">Compliance:</span> following applicable customs and port
                    regulations.
                </li>
            </ul>

            <h2 className="mb-3 text-xl font-semibold">Our Promise</h2>
            <p className="text-sm text-neutral-200">
                Whether you are an established exporter or exploring Jaigad Port for the first time, our focus
                remains the same –{' '}
                <span className="font-semibold">
                    reliable handling, transparent processes and long-term relationships
                </span>
                . We understand that a dependable port partner is critical to the success of any supply chain, and
                we aim to play that role for every client we serve.
            </p>
        </div>
    );
}

