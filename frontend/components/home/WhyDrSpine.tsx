'use client';

import { whyDrSpine } from '../../data/siteData';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '../ui/Animations';
import { ArrowRight } from 'lucide-react';

export default function WhyDrSpine() {
    return (
        <section className="section-padding bg-surface-offwhite" id="why-dr-spine">
            <div className="container-default">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <AnimateOnScroll>
                            <p className="section-label">Why Choose Dr Spine</p>
                            <h2 className="section-title">We don&apos;t just treat pain. <br /><span className="gradient-text">We fix the cause.</span></h2>
                            <p className="section-subtitle mt-4">
                                Unlike conventional approaches that mask symptoms, our structural rehabilitation methodology 
                                addresses the root cause of your spine condition using evidence-based CBP™ protocols.
                            </p>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={0.2} className="mt-8">
                            <div className="premium-card p-6">
                                <h4 className="text-sm font-heading font-semibold text-navy-800 mb-4">Our Treatment Philosophy</h4>
                                <div className="space-y-3">
                                    {['Diagnose the structural root cause', 'Map posture & spinal alignment', 'Apply evidence-based corrections', 'Rehabilitate & strengthen', 'Maintain long-term spinal health'].map((step, i) => (
                                        <div key={step} className="flex items-center gap-3">
                                            <div className="w-7 h-7 rounded-lg bg-gradient-spine flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                                                {i + 1}
                                            </div>
                                            <p className="text-sm text-navy-700">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={0.3} className="mt-6">
                            <a href="/about" className="btn-primary">
                                More About Us <ArrowRight className="w-4 h-4" />
                            </a>
                        </AnimateOnScroll>
                    </div>

                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.08}>
                        {whyDrSpine.map((item) => (
                            <StaggerItem key={item.title}>
                                <div className="premium-card p-5 h-full group">
                                    <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                    <h3 className="text-sm font-heading font-semibold text-navy-900 mb-2">{item.title}</h3>
                                    <p className="text-xs text-navy-500 leading-relaxed">{item.description}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </div>
        </section>
    );
}
