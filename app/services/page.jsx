import Link from 'next/link';

const services = [
  {
    title: 'Vessel & Shipping Agency',
    description:
      'Acting as local agent for vessels calling at Jaigad (Jaigarh) Port – coordinating with port authorities, pilots, surveyors and terminal operators.',
    points: [
      'Pre-arrival coordination & documentation',
      'Berthing, sailing & port formalities',
      'Liaison with port & terminal authorities',
      'On-board coordination as required',
    ],
  },
  {
    title: 'Customs & Documentation Support',
    description:
      'End-to-end support for customs documentation via authorised customs brokers and partners.',
    points: [
      'Guidance on required documents',
      'Coordination with appointed customs broker',
      'Sharing information & copies on time',
      'Support until completion of clearance',
    ],
  },
  {
    title: 'Export–Import Cargo Handling',
    description:
      'Ground-level coordination for cargo loading, unloading and movement between factory, port and storage.',
    points: [
      'Planning of cargo arrival at port',
      'Supervision of loading / unloading at port',
      'Coordination with surveyors & weighbridges',
      'Basic operations reporting to clients',
    ],
  },
  {
    title: 'Logistics & Transport Coordination',
    description:
      'Assisting clients in aligning transporters, truckers and other logistics partners with port schedules.',
    points: [
      'Coordination with local transporters',
      'Basic schedule & movement planning',
      'Truck gate pass & port-entry support',
      'Liaison between factory and port',
    ],
  },
  {
    title: 'Support for Agri & Food Cargo',
    description:
      'Experience with food, dairy and other commodities routed via Jaigad Port, where timing and handling are crucial.',
    points: [
      'Awareness of cargo-specific handling needs',
      'Tighter focus on timing and coordination',
      'Support with required certificates via partners',
      'Close follow-up during vessel operations',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="py-10 sm:py-14">
      <h1 className="mb-3 text-2xl font-semibold sm:text-3xl">
        Services We Provide
      </h1>
      <p className="max-w-2xl mb-6 text-sm text-neutral-200">
        Hindustan Shipping Agency offers end-to-end port-side and documentation
        support for exporters, importers and vessel operators using Jaigad
        (Jaigarh) Port and nearby coastal locations in Maharashtra.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-5 rounded-xl bg-neutral-950/40 border border-neutral-800"
          >
            <h2 className="mb-1 text-base font-semibold">{service.title}</h2>
            <p className="mb-3 text-xs text-neutral-200">
              {service.description}
            </p>
            <ul className="space-y-1 text-xs text-neutral-100">
              {service.points.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="p-5 mt-8 text-sm text-neutral-200 rounded-xl bg-neutral-950/60 border border-neutral-800">
        <h2 className="mb-2 text-base font-semibold">
          Need something specific for your cargo or vessel?
        </h2>
        <p className="mb-3 text-sm text-neutral-200">
          Every shipment and port call has its own operational requirements. If
          you need support beyond the services listed above, we can discuss a
          customised handling plan based on your commodity, volume and schedule.
        </p>
        <Link href="/contact" className="btn">
          Talk to us about your requirement
        </Link>
      </div>
    </div>
  );
}
