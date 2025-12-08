// app/layout.jsx
import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Hindustan Shipping Agency',
        default: 'Hindustan Shipping Agency – Jaigad Port, Ratnagiri'
    },
    description:
        'Hindustan Shipping Agency is a registered shipping and customs clearance agency based at Jaigad (Jaigarh) Port in Ratnagiri, Maharashtra, providing end-to-end support for exporters, importers and logistics partners.'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-blue-900">
                <div className="flex flex-col min-h-screen px-6 bg-noise sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <main className="grow">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
