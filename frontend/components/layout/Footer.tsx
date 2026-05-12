'use client';

import { Phone, Mail, MapPin, ArrowUpRight, Youtube, Instagram, Facebook, Linkedin } from 'lucide-react';
import { LogoFullWhite } from '../ui/Logo';

const footerLinks = {
    conditions: [
        { name: 'Slip Disc Treatment', href: '/conditions/slip-disc' },
        { name: 'Sciatica Relief', href: '/conditions/sciatica' },
        { name: 'Scoliosis Correction', href: '/conditions/scoliosis' },
        { name: 'Cervical Pain', href: '/conditions/cervical-pain' },
        { name: 'Posture Correction', href: '/conditions/posture-correction' },
        { name: 'Chronic Neck Pain', href: '/conditions/neck-pain' },
    ],
    company: [
        { name: 'About Dr Spine', href: '/about' },
        { name: 'Our Doctors', href: '/doctors' },
        { name: 'Patient Stories', href: '/reviews' },
        { name: 'Knowledge Hub', href: '/encyclopedia' },
        { name: 'Corporate Wellness', href: '/corporate' },
        { name: 'Contact Us', href: '/contact' },
    ],
    locations: [
        { name: 'Indiranagar Centre', href: '/locations/indiranagar' },
        { name: 'Whitefield Centre', href: '/locations/whitefield' },
        { name: 'New BEL Road Centre', href: '/locations/new-bel-road' },
        { name: 'Jayanagar Centre', href: '/locations/jayanagar' },
    ],
};

const socialLinks = [
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@DrSpine' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/drspine.in' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/drspine.in' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/drspine' },
];

export default function Footer() {
    return (
        <footer className="bg-navy-950 text-navy-300">
            {/* CTA Bar */}
            <div className="bg-gradient-spine">
                <div className="container-wide py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <h3 className="text-xl font-heading font-bold text-white">
                            Ready to live a pain-free life?
                        </h3>
                        <p className="text-white/80 text-sm mt-1">
                            Book your consultation today. Expert care, proven results.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <a href="/appointment" className="inline-flex items-center gap-2 bg-white text-navy-900 font-heading font-semibold px-6 py-3 rounded-xl hover:bg-navy-50 transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
                            Book Appointment <ArrowUpRight className="w-4 h-4" />
                        </a>
                        <a href="tel:+917050705070" className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 font-heading font-medium px-6 py-3 rounded-xl hover:bg-white/20 transition-all duration-300">
                            <Phone className="w-4 h-4" /> Call Now
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container-wide py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="mb-5">
                            <LogoFullWhite />
                        </div>
                        <p className="text-sm text-navy-400 leading-relaxed max-w-md mb-6">
                            India&apos;s first chiropractic chain and structural spine rehabilitation centre.
                            Led by internationally trained specialists with 150,000+ patients treated
                            using advanced CBP-based protocols.
                        </p>
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="w-9 h-9 rounded-lg bg-navy-800/50 flex items-center justify-center text-navy-400 hover:text-white hover:bg-spine-600 transition-all duration-300"
                                        aria-label={social.name}
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Conditions */}
                    <div>
                        <h4 className="text-xs font-heading font-semibold text-white tracking-wider uppercase mb-5">
                            Conditions
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.conditions.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-navy-400 hover:text-white transition-colors duration-300">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-xs font-heading font-semibold text-white tracking-wider uppercase mb-5">
                            Company
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-navy-400 hover:text-white transition-colors duration-300">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h4 className="text-xs font-heading font-semibold text-white tracking-wider uppercase mb-5">
                            Centres
                        </h4>
                        <ul className="space-y-2.5">
                            {footerLinks.locations.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-navy-400 hover:text-white transition-colors duration-300 flex items-center gap-1.5">
                                        <MapPin className="w-3 h-3 flex-shrink-0" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 space-y-2">
                            <a href="tel:+917050705070" className="text-sm text-navy-400 hover:text-white transition-colors flex items-center gap-1.5">
                                <Phone className="w-3 h-3" /> +91 70 5070 5070
                            </a>
                            <a href="mailto:info@drspine.in" className="text-sm text-navy-400 hover:text-white transition-colors flex items-center gap-1.5">
                                <Mail className="w-3 h-3" /> info@drspine.in
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-navy-800/50">
                <div className="container-wide py-5 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-navy-500">
                        © {new Date().getFullYear()} Dr Spine™. All rights reserved. India&apos;s First Chiropractic Chain.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-navy-500">
                        <a href="/privacy" className="hover:text-navy-300 transition-colors">Privacy Policy</a>
                        <a href="/terms" className="hover:text-navy-300 transition-colors">Terms of Service</a>
                        <a href="/sitemap.xml" className="hover:text-navy-300 transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>

            {/* Schema: MedicalClinic */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalClinic",
                        "name": "Dr Spine",
                        "url": "https://drspine.in",
                        "telephone": "+917050705070",
                        "email": "info@drspine.in",
                        "address": [
                            {
                                "@type": "PostalAddress",
                                "streetAddress": "Indiranagar",
                                "addressLocality": "Bangalore",
                                "addressRegion": "Karnataka",
                                "postalCode": "560038",
                                "addressCountry": "IN"
                            }
                        ],
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                            "opens": "09:00",
                            "closes": "19:00"
                        },
                        "medicalSpecialty": "Chiropractic"
                    }),
                }}
            />
        </footer>
    );
}
