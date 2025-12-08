// components/footer.jsx
export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="pt-12 pb-10 sm:pt-16 sm:pb-12">
            <div className="text-xs text-neutral-300">
                <p className="mb-1">
                    © {year} Hindustan Shipping Agency. All rights reserved.
                </p>
                <p className="text-neutral-400">
                    Registered shipping &amp; customs support agency · Jaigad (Jaigarh) Port · Ratnagiri, Maharashtra, India
                </p>
            </div>
        </footer>
    );
}
