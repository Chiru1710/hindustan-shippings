export default function ContactPage() {
  // put your real details here:
  const phone = '+91-9067256810';
  const altPhone = '+91-8530031710';
  const email = 'info@hindustanshippingagency.com';
  const whatsapp = '+91-9067256810';

  return (
    <div className="py-10 sm:py-14">
      <h1 className="mb-3 text-2xl font-semibold sm:text-3xl">
        Contact Hindustan Shipping Agency
      </h1>
      <p className="max-w-2xl mb-6 text-sm text-neutral-200">
        Share your shipment details, commodity and tentative schedule – we will
        get back to you with suitable options for handling through Jaigad
        (Jaigarh) Port or nearby locations.
      </p>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left: Contact Details */}
        <div className="space-y-5 text-sm">
          <div className="p-4 rounded-xl bg-neutral-950/40 border border-neutral-800">
            <h2 className="mb-2 text-base font-semibold">Office Details</h2>
            <p className="text-xs text-neutral-200">
              <span className="font-semibold">Hindustan Shipping Agency</span>
              <br />
              356, Post – Jaigad, Village – Nandiwade,
              <br />
              Tal. &amp; Dist. Ratnagiri,
              <br />
              Maharashtra – 415614, India
            </p>
          </div>

          <div className="p-4 space-y-1 text-xs text-neutral-200 rounded-xl bg-neutral-950/40 border border-neutral-800">
            <h2 className="mb-1 text-sm font-semibold">Communication</h2>
            <p>
              <span className="font-semibold">Phone:</span>{' '}
              <a href={`tel:${phone}`} className="underline">
                {phone}
              </a>
            </p>
            <p>
              <span className="font-semibold">Alternate:</span>{' '}
              <a href={`tel:${altPhone}`} className="underline">
                {altPhone}
              </a>
            </p>
            <p>
              <span className="font-semibold">Email:</span>{' '}
              <a href={`mailto:${email}`} className="underline">
                {email}
              </a>
            </p>
            <p>
              <span className="font-semibold">WhatsApp:</span>{' '}
              <a
                href={`https://wa.me/${whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {whatsapp}
              </a>
            </p>
          </div>

          <div className="p-4 text-xs text-neutral-200 rounded-xl bg-neutral-950/40 border border-neutral-800">
            <h2 className="mb-1 text-sm font-semibold">Working Hours</h2>
            <p>Monday – Saturday: 9:00 AM to 5:30 PM (IST)</p>
            <p>Port operations &amp; vessel attendance as per schedule.</p>
          </div>
        </div>

        {/* Right: Simple Form – sends data via mailto */}
        <div className="p-5 rounded-2xl bg-neutral-950/50 border border-neutral-800">
          <h2 className="mb-3 text-base font-semibold">Send Us Your Query</h2>
          <p className="mb-4 text-xs text-neutral-300">
            This form will open your email app with the details filled in. You
            can review and send it directly to us.
          </p>
          <form
            className="space-y-4 text-xs"
            action={`mailto:${email}`}
            method="post"
            encType="text/plain"
          >
            <div>
              <label className="block mb-1 text-neutral-100">
                Full Name / Company
              </label>
              <input
                type="text"
                name="Name / Company"
                className="w-full px-3 py-2 text-xs text-white border rounded-md outline-none border-neutral-700 bg-neutral-950 focus:border-primary"
                placeholder="Your name or company name"
                required
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="block mb-1 text-neutral-100">Email</label>
                <input
                  type="email"
                  name="Email"
                  className="w-full px-3 py-2 text-xs text-white border rounded-md outline-none border-neutral-700 bg-neutral-950 focus:border-primary"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-neutral-100">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  name="Phone / WhatsApp"
                  className="w-full px-3 py-2 text-xs text-white border rounded-md outline-none border-neutral-700 bg-neutral-950 focus:border-primary"
                  placeholder="+91-9067256810"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-neutral-100">
                Cargo / Requirement
              </label>
              <textarea
                name="Cargo / Requirement"
                className="w-full min-h-[110px] px-3 py-2 text-xs text-white border rounded-md outline-none border-neutral-700 bg-neutral-950 focus:border-primary"
                placeholder="Type of cargo, approx quantity, preferred port, tentative schedule and any specific requirements."
                required
              />
            </div>
            <button type="submit" className="btn">
              Submit Enquiry
            </button>
          </form>

          <p className="mt-4 text-[11px] text-neutral-400">
            Note: This button opens your default email application with the
            details filled. If no email app is configured, nothing will appear.
          </p>
        </div>
      </div>

      {/* Map */}
      <div className="mt-10">
        <h2 className="mb-2 text-base font-semibold">Location Overview</h2>
        <p className="mb-3 text-xs text-neutral-200">
          Jaigad (Jaigarh) Port is located on the west coast of Maharashtra,
          between Mumbai and Goa. The office is situated in the Jaigad area of
          Ratnagiri district, with road connectivity to nearby industrial and
          agricultural regions.
        </p>
        <div className="overflow-hidden rounded-xl aspect-video bg-neutral-950 border border-neutral-800">
          {/* Simple working Google Maps embed */}
          <iframe
            title="Jaigad Port Map"
            src="https://www.google.com/maps?q=Jaigad+Port+Ratnagiri&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
