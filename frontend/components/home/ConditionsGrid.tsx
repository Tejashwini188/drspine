'use client';

import { conditions } from '../../data/siteData';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '../ui/Animations';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ConditionsGrid() {
    return (
        <section className="section-padding bg-white" id="conditions">
            <div className="container-default">
                <AnimateOnScroll className="text-center mb-14">
                    <p className="section-label">Conditions We Help</p>
                    <h2 className="section-title">Expert Care for Complex <span className="gradient-text">Spine Conditions</span></h2>
                    <p className="section-subtitle mx-auto mt-3">
                        From slip discs to scoliosis, our evidence-based approach delivers lasting results — not just temporary relief.
                    </p>
                </AnimateOnScroll>

                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
                    {conditions.map((condition) => (
                        <StaggerItem key={condition.slug}>
                            <a
                                href={`/conditions/${condition.slug}`}
                                className="group block premium-card p-6 h-full"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-spine-50 to-spine-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500">
                                        {condition.icon}
                                    </div>
                                    <ArrowUpRight className="w-4 h-4 text-navy-300 group-hover:text-spine-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                                </div>
                                <h3 className="text-lg font-heading font-semibold text-navy-900 mb-2 group-hover:text-spine-700 transition-colors">
                                    {condition.name}
                                </h3>
                                <p className="text-sm text-navy-500 leading-relaxed mb-4">
                                    {condition.tagline}
                                </p>
                                <div className="flex items-center gap-4 pt-3 border-t border-navy-50">
                                    <div>
                                        <p className="text-xs text-navy-400">Success Rate</p>
                                        <p className="text-sm font-heading font-bold gradient-text">{condition.successRate}</p>
                                    </div>
                                    <div className="w-px h-8 bg-navy-100" />
                                    <div>
                                        <p className="text-xs text-navy-400">Patients</p>
                                        <p className="text-sm font-heading font-bold text-navy-800">{condition.patientsTreated}</p>
                                    </div>
                                </div>
                            </a>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <AnimateOnScroll className="text-center mt-10" delay={0.3}>
                    <a href="/conditions" className="btn-secondary">
                        Explore All Conditions <ArrowRight className="w-4 h-4" />
                    </a>
                </AnimateOnScroll>
            </div>
        </section>
    );
}
