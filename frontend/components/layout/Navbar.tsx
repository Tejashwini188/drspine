'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Menu, X, ChevronDown, Phone, Calendar,
    Bone, Brain, Activity, ShieldCheck, Stethoscope, HeartPulse
} from 'lucide-react';
import { LogoFull } from '../ui/Logo';

const conditions = [
    { name: 'Slip Disc', icon: Bone, href: '/conditions/slip-disc' },
    { name: 'Sciatica', icon: Activity, href: '/conditions/sciatica' },
    { name: 'Scoliosis', icon: Bone, href: '/conditions/scoliosis' },
    { name: 'Cervical Pain', icon: Brain, href: '/conditions/cervical-pain' },
    { name: 'Chronic Neck Pain', icon: HeartPulse, href: '/conditions/neck-pain' },
    { name: 'Posture Correction', icon: ShieldCheck, href: '/conditions/posture-correction' },
];

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
        name: 'Conditions', href: '/conditions', hasDropdown: true,
        children: conditions
    },
    { name: 'Treatments', href: '/treatments' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'Patient Stories', href: '/reviews' },
    { name: 'Knowledge Hub', href: '/encyclopedia' },
    { name: 'Locations', href: '/locations' },
    { name: 'Corporate', href: '/corporate' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname() ?? '/';

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        // Exact match OR a child route (e.g. /conditions/slip-disc → activates Conditions)
        return pathname === href || pathname.startsWith(href + '/');
    };

    return (
        <>
            <nav
                className={`sticky top-0 z-50 transition-all duration-500 ${
                    isScrolled
                        ? 'bg-white/90 backdrop-blur-2xl shadow-nav border-b border-navy-50'
                        : 'bg-white/70 backdrop-blur-xl'
                }`}
                style={{ height: 'var(--nav-height)' }}
            >
                <div className="container-wide h-full flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="group">
                        <LogoFull />
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <a
                                    href={link.href}
                                    aria-current={isActive(link.href) ? 'page' : undefined}
                                    className={`nav-link flex items-center gap-1 px-3 py-2 ${
                                        isActive(link.href) ? 'is-active' : ''
                                    }`}
                                >
                                    {link.name}
                                    {link.hasDropdown && (
                                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${
                                            activeDropdown === link.name ? 'rotate-180' : ''
                                        }`} />
                                    )}
                                </a>

                                {/* Mega Menu */}
                                <AnimatePresence>
                                    {link.hasDropdown && activeDropdown === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                                        >
                                            <div className="bg-white rounded-2xl shadow-glass-lg border border-navy-50 p-4 min-w-[320px]">
                                                <div className="grid grid-cols-2 gap-1">
                                                    {link.children?.map((child) => {
                                                        const Icon = child.icon;
                                                        return (
                                                            <a
                                                                key={child.name}
                                                                href={child.href}
                                                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-spine-50 transition-colors group/item"
                                                            >
                                                                <div className="w-8 h-8 rounded-lg bg-spine-50 flex items-center justify-center group-hover/item:bg-spine-100 transition-colors">
                                                                    <Icon className="w-4 h-4 text-spine-600" />
                                                                </div>
                                                                <span className="text-sm font-medium text-navy-700 group-hover/item:text-navy-900">
                                                                    {child.name}
                                                                </span>
                                                            </a>
                                                        );
                                                    })}
                                                </div>
                                                <div className="mt-3 pt-3 border-t border-navy-50">
                                                    <a
                                                        href="/conditions"
                                                        className="text-xs font-heading font-medium text-spine-600 hover:text-spine-700 flex items-center gap-1"
                                                    >
                                                        View all conditions →
                                                    </a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a href="tel:+917050705070" className="btn-ghost text-sm">
                            <Phone className="w-4 h-4" />
                            Call Us
                        </a>
                        <a href="/appointment" className="btn-primary text-sm">
                            <Calendar className="w-4 h-4" />
                            Book Appointment
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className="lg:hidden btn-icon"
                    >
                        {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden fixed top-[var(--nav-height)] left-0 right-0 z-40 bg-white/95 backdrop-blur-2xl border-b border-navy-50 overflow-hidden"
                    >
                        <div className="container-default py-6 space-y-1">
                            {navLinks.map((link) => {
                                const active = isActive(link.href);
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        aria-current={active ? 'page' : undefined}
                                        className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                                            active
                                                ? 'bg-spine-50 text-navy-900 border-l-2 border-spine-500'
                                                : 'text-navy-700 hover:bg-spine-50 hover:text-navy-900'
                                        }`}
                                        onClick={() => setIsMobileOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                );
                            })}
                            <div className="pt-4 space-y-3">
                                <a href="tel:+917050705070" className="btn-secondary w-full text-center">
                                    <Phone className="w-4 h-4" /> Call Now
                                </a>
                                <a href="/appointment" className="btn-primary w-full text-center">
                                    <Calendar className="w-4 h-4" /> Book Appointment
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
