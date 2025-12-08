export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pt-10 pb-8 sm:pt-14 sm:pb-10">
      <div className="flex flex-col gap-2 text-[11px] sm:text-xs text-neutral-300 border-t border-neutral-800/80 pt-4">
        <p className="font-medium text-neutral-100">
          © {year} Hindustan Shipping Agency. All rights reserved.
        </p>
        <p className="text-neutral-400">
          Registered shipping &amp; customs support agency · Jaigad (Jaigarh) Port · Ratnagiri, Maharashtra, India
        </p>
        <p className="text-neutral-500">
          Focused on reliable vessel agency, documentation and port-side logistics for exporters, importers and logistics partners.
        </p>
      </div>
    </footer>
  );
}
