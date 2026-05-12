'use client';

import { stats } from '../../data/siteData';
import { AnimatedCounter, StaggerContainer, StaggerItem } from '../ui/Animations';

export default function StatsBar() {
    return (
        <section className="bg-navy-900 relative overflow-hidden" id="stats">
            <div className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }}
            />
            <div className="container-wide relative z-10 py-14">
                <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8" staggerDelay={0.1}>
                    {stats.map((stat) => (
                        <StaggerItem key={stat.label} className="text-center">
                            <p className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">
                                <AnimatedCounter target={stat.number} suffix={stat.suffix} prefix={stat.prefix || ''} />
                            </p>
                            <p className="text-sm font-heading font-medium text-spine-300 mb-1">{stat.label}</p>
                            <p className="text-xs text-navy-400">{stat.description}</p>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
