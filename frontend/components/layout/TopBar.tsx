'use client';

import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function TopBar() {
    return (
        <div className="bg-navy-900 text-white/80 text-xs font-body hidden md:block">
            <div className="container-wide flex items-center justify-between py-2">
                <div className="flex items-center gap-6">
                    <a
                        href="tel:+917050705070"
                        className="flex items-center gap-1.5 hover:text-white transition-colors"
                    >
                        <Phone className="w-3 h-3" />
                        <span>+91 70 5070 5070</span>
                    </a>
                    <a
                        href="mailto:info@drspine.in"
                        className="flex items-center gap-1.5 hover:text-white transition-colors"
                    >
                        <Mail className="w-3 h-3" />
                        <span>info@drspine.in</span>
                    </a>
                    <span className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        <span>Mon – Sat: 9AM – 7PM</span>
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" />
                        Indiranagar · Whitefield · New BEL Road · Jayanagar
                    </span>
                </div>
            </div>
        </div>
    );
}
