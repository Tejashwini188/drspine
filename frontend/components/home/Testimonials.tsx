'use client';

import { testimonials } from '../../data/siteData';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '../ui/Animations';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { useState } from 'react';

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="section-padding bg-white" id="testimonials">
            <div className="container-default">
                <div className="grid lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-2">
                        <AnimateOnScroll>
                            <p className="section-label">Real Stories. Real Results.</p>
                            <h2 className="section-title">Patients Who <span className="gradient-text">Found Relief</span></h2>
                            <p className="section-subtitle mt-4">
                                Every story here represents someone who chose non-surgical care and got their life back.
                            </p>
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={0.2} className="mt-6 flex flex-wrap gap-2">
                            {testimonials.map((t, i) => (
                                <button
                                    key={t.name}
                                    onClick={() => setActiveIndex(i)}
                                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                                        i === activeIndex
                                            ? 'bg-gradient-spine text-white shadow-button'
                                            : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
                                    }`}
                                >
                                    {t.condition}
                                </button>
                            ))}
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={0.3} className="mt-6">
                            <a href="/reviews" className="btn-secondary text-sm">
                                View All Stories <ArrowRight className="w-4 h-4" />
                            </a>
                        </AnimateOnScroll>
                    </div>

                    <div className="lg:col-span-3">
                        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.1}>
                            {testimonials.slice(0, 4).map((t, i) => (
                                <StaggerItem key={t.name}>
                                    <div className={`premium-card p-5 h-full ${i === activeIndex ? 'ring-2 ring-spine-200' : ''}`}>
                                        <div className="flex items-center gap-1 mb-3">
                                            {Array.from({ length: t.rating }).map((_, j) => (
                                                <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                            ))}
                                        </div>
                                        <Quote className="w-6 h-6 text-spine-200 mb-2" />
                                        <p className="text-sm text-navy-600 leading-relaxed mb-4 line-clamp-4">
                                            {t.text}
                                        </p>
                                        <div className="flex items-center gap-3 pt-3 border-t border-navy-50">
                                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-spine-200 to-spine-400 flex items-center justify-center text-white text-xs font-bold">
                                                {t.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-heading font-semibold text-navy-800">{t.name}</p>
                                                <p className="text-xs text-navy-400">{t.condition} · {t.location} · Age {t.age}</p>
                                            </div>
                                        </div>
                                        {t.beforeAfter && (
                                            <div className="mt-3">
                                                <span className="badge-spine text-[10px]">Before/After Available</span>
                                            </div>
                                        )}
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </div>
        </section>
    );
}
