'use client';

import './globals.css';
import { Inter, Outfit } from 'next/font/google';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import TopBar from '../components/layout/TopBar';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <head>
                <title>Dr Spine™ — India&apos;s First Chiropractic Chain &amp; Structural Spine Rehabilitation</title>
                <meta name="description" content="India's most trusted chiropractic and structural rehabilitation centre. Non-surgical spine correction, scoliosis treatment, and CBP-based protocols. 150,000+ patients treated across Bangalore." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />

                {/* Schema: Organization */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "MedicalOrganization",
                            "name": "Dr Spine",
                            "alternateName": "Dr Spine Chiropractic",
                            "url": "https://drspine.in",
                            "logo": "https://drspine.in/logo.svg",
                            "description": "India's first chiropractic chain and structural spine rehabilitation centre, led by internationally trained specialists.",
                            "medicalSpecialty": ["Chiropractic", "Spine Rehabilitation", "Scoliosis Treatment"],
                            "areaServed": {
                                "@type": "City",
                                "name": "Bangalore"
                            },
                            "numberOfEmployees": {
                                "@type": "QuantitativeValue",
                                "minValue": 50
                            },
                            "foundingDate": "2010",
                            "sameAs": [
                                "https://www.youtube.com/@DrSpine",
                                "https://www.instagram.com/drspine.in",
                                "https://www.facebook.com/drspine.in"
                            ]
                        }),
                    }}
                />
            </head>
            <body className={`${inter.className} antialiased`}>
                <TopBar />
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
