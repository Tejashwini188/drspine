'use client';

import { AnimateOnScroll } from '../ui/Animations';
import { Phone, Calendar, Shield, Clock, CreditCard, MapPin } from 'lucide-react';

const features = [
    { icon: Shield, title: '24/7 Support', description: 'Always here for you, even after hours' },
    { icon: Calendar, title: 'Easy Booking', description: 'Book online in under 30 seconds' },
    { icon: CreditCard, title: 'Insurance Friendly', description: 'We accept major insurance plans' },
    { icon: MapPin, title: 'Multiple Locations', description: 'Trusted centres across Bangalore' },
];

export default function CTASection() {
    return (
        <section className="bg-surface-offwhite py-12" id="quick-actions">
            <div className="container-default">
                <AnimateOnScroll>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {features.map((f) => (
                            <div key={f.title} className="flex items-center gap-3 p-4 rounded-2xl bg-white shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5">
                                <div className="w-10 h-10 rounded-xl bg-spine-50 flex items-center justify-center flex-shrink-0">
                                    <f.icon className="w-5 h-5 text-spine-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-heading font-semibold text-navy-800">{f.title}</p>
                                    <p className="text-xs text-navy-400">{f.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}
