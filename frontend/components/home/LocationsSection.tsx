'use client';

import { locations } from '../../data/siteData';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '../ui/Animations';
import { MapPin, Phone, Clock, ArrowUpRight, CheckCircle } from 'lucide-react';

export default function LocationsSection() {
    return (
        <section className="section-padding bg-white" id="locations">
            <div className="container-default">
                <AnimateOnScroll className="text-center mb-12">
                    <p className="section-label">Visit Our Advanced Centres</p>
                    <h2 className="section-title">4 Locations Across <span className="gradient-text">Bangalore</span></h2>
                    <p className="section-subtitle mx-auto mt-3">
                        World-class spine care, close to you. Each centre is equipped with advanced rehabilitation technology.
                    </p>
                </AnimateOnScroll>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
                    {locations.map((loc) => (
                        <StaggerItem key={loc.slug}>
                            <a href={`/locations/${loc.slug}`} className="group premium-card overflow-hidden h-full flex flex-col">
                                {/* Location image placeholder */}
                                <div className="h-40 bg-gradient-to-br from-navy-100 to-spine-50 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <MapPin className="w-10 h-10 text-spine-300" />
                                    </div>
                                    <div className="absolute top-3 right-3">
                                        <ArrowUpRight className="w-4 h-4 text-navy-400 group-hover:text-spine-500 transition-colors" />
                                    </div>
                                </div>
                                <div className="p-5 flex-1 flex flex-col">
                                    <h3 className="text-base font-heading font-semibold text-navy-900 mb-3 group-hover:text-spine-700 transition-colors">
                                        {loc.name}
                                    </h3>
                                    <div className="space-y-2 text-xs text-navy-500 mb-4 flex-1">
                                        <p className="flex items-start gap-2">
                                            <MapPin className="w-3.5 h-3.5 text-navy-400 mt-0.5 flex-shrink-0" />
                                            {loc.address}
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <Clock className="w-3.5 h-3.5 text-navy-400 flex-shrink-0" />
                                            {loc.timings}
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <Phone className="w-3.5 h-3.5 text-navy-400 flex-shrink-0" />
                                            {loc.phone}
                                        </p>
                                    </div>
                                    <div className="pt-3 border-t border-navy-50 space-y-1">
                                        {loc.features.slice(0, 2).map((f) => (
                                            <p key={f} className="flex items-center gap-1.5 text-[11px] text-navy-500">
                                                <CheckCircle className="w-3 h-3 text-accent-teal flex-shrink-0" />
                                                {f}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
