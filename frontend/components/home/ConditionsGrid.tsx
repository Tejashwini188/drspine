'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { conditions } from '../../data/siteData';
import { AnimateOnScroll } from '../ui/Animations';
import {
    ArrowRight,
    Check,
    ChevronRight,
    Activity,
    Users,
    Award,
    Sparkles,
} from 'lucide-react';

// Each condition maps to a spine region for the SpineIndicator SVG.
// Indices are zero-based slices into a 24-vertebra column
//   0–6  = cervical (C1–C7)
//   7–18 = thoracic (T1–T12)
//   19–23 = lumbar (L1–L5)
//   +sacrum/coccyx implied at base
const regionMap: Record<string, [number, number][]> = {
    'slip-disc':            [[19, 23]],
    'sciatica':             [[19, 23]],
    'scoliosis':            [[7, 23]],
    'cervical-pain':        [[0, 6]],
    'neck-pain':            [[0, 6]],
    'posture-correction':   [[0, 18]],
};

const AUTO_ROTATE_MS = 7000;

export default function ConditionsGrid() {
    const [selected, setSelected] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(0);
    const tickRef = useRef<number | null>(null);

    // Auto-rotate with smooth progress bar that resets on manual select
    useEffect(() => {
        if (isPaused) return;
        let start = performance.now();
        const tick = (now: number) => {
            const elapsed = now - start;
            const p = Math.min(1, elapsed / AUTO_ROTATE_MS);
            setProgress(p);
            if (p >= 1) {
                start = now;
                setSelected((s) => (s + 1) % conditions.length);
            }
            tickRef.current = requestAnimationFrame(tick);
        };
        tickRef.current = requestAnimationFrame(tick);
        return () => {
            if (tickRef.current) cancelAnimationFrame(tickRef.current);
        };
    }, [isPaused, selected]);

    const current = conditions[selected];

    const onSelect = (i: number) => {
        setSelected(i);
        setProgress(0);
    };

    return (
        <section className="section-padding bg-gradient-to-b from-white via-spine-50/20 to-white relative overflow-hidden" id="conditions">
            {/* Decorative background */}
            <div className="absolute top-20 -left-20 w-[400px] h-[400px] rounded-full bg-spine-100/30 blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-spine-100/30 blur-3xl pointer-events-none" />

            <div className="container-default relative">
                {/* HEADER */}
                <AnimateOnScroll className="text-center mb-12 max-w-3xl mx-auto">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-spine-100 text-spine-700 text-xs font-heading font-semibold uppercase tracking-widest mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-spine-500 animate-pulse" />
                        Conditions We Help
                    </span>
                    <h2 className="text-heading-1 md:text-display font-heading font-bold text-navy-900 mb-4">
                        Expert Care for Complex{' '}
                        <span className="gradient-text">Spine Conditions</span>
                    </h2>
                    <p className="text-body-lg text-navy-500 leading-relaxed">
                        From slip discs to scoliosis, our evidence-based approach delivers lasting results &mdash; not just temporary relief.
                    </p>
                </AnimateOnScroll>

                {/* TRUST STRIP */}
                <AnimateOnScroll delay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
                    {[
                        { value: '150,000+', label: 'Patients Treated', Icon: Users },
                        { value: '12+', label: 'Care Centres', Icon: Activity },
                        { value: '92%', label: 'Avg. Success Rate', Icon: Award },
                        { value: 'Zero', label: 'Drugs · Zero Surgery', Icon: Sparkles },
                    ].map(({ value, label, Icon }) => (
                        <div
                            key={label}
                            className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-spine-100/40 shadow-card"
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-spine-50 to-spine-100 text-spine-700 flex items-center justify-center shrink-0">
                                <Icon size={18} />
                            </div>
                            <div className="min-w-0">
                                <p className="text-lg font-heading font-bold gradient-text leading-tight">{value}</p>
                                <p className="text-[11px] text-navy-500 leading-tight">{label}</p>
                            </div>
                        </div>
                    ))}
                </AnimateOnScroll>

                {/* INTERACTIVE EXPLORER */}
                <AnimateOnScroll delay={0.15}>
                    <div
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-4 lg:gap-6"
                    >
                        {/* LEFT: Condition selector list */}
                        <div className="space-y-2">
                            {conditions.map((c, i) => {
                                const isActive = selected === i;
                                return (
                                    <button
                                        key={c.slug}
                                        onClick={() => onSelect(i)}
                                        className={`relative w-full text-left rounded-2xl p-4 flex items-center gap-4 transition-all duration-300 border ${
                                            isActive
                                                ? 'bg-gradient-to-r from-spine-50 to-white border-spine-200 shadow-card-hover'
                                                : 'bg-white/70 border-transparent hover:border-spine-100 hover:bg-spine-50/40'
                                        }`}
                                    >
                                        <div
                                            className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 shrink-0 ${
                                                isActive
                                                    ? 'bg-gradient-spine text-white scale-110 shadow-button'
                                                    : 'bg-spine-50 text-spine-700'
                                            }`}
                                        >
                                            {c.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p
                                                className={`font-heading font-semibold transition-colors leading-tight ${
                                                    isActive ? 'text-spine-700' : 'text-navy-900'
                                                }`}
                                            >
                                                {c.name}
                                            </p>
                                            <p className="text-xs text-navy-500 truncate mt-0.5">
                                                {c.tagline}
                                            </p>
                                        </div>
                                        <ChevronRight
                                            className={`w-4 h-4 shrink-0 transition-all ${
                                                isActive
                                                    ? 'text-spine-600 translate-x-1'
                                                    : 'text-navy-300'
                                            }`}
                                        />

                                        {/* Active rail accent */}
                                        {isActive && (
                                            <motion.span
                                                layoutId="active-rail"
                                                className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-gradient-spine"
                                            />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* RIGHT: Featured condition detail */}
                        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white via-spine-50/30 to-spine-100/30 border border-spine-100/60 shadow-glass-lg min-h-[520px]">
                            {/* Top progress bar (auto-rotate indicator) */}
                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-spine-100/60 z-20">
                                <div
                                    className="h-full bg-gradient-spine transition-[width] duration-100 ease-linear"
                                    style={{ width: `${progress * 100}%` }}
                                />
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.45, ease: [0.25, 0.1, 0, 1] }}
                                    className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 p-7 md:p-10 h-full"
                                >
                                    {/* Decorative giant icon in background */}
                                    <div className="absolute -top-4 -right-6 text-[200px] leading-none opacity-[0.05] pointer-events-none select-none">
                                        {current.icon}
                                    </div>

                                    <div className="relative">
                                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-spine-100 text-spine-700 text-[11px] font-heading font-semibold uppercase tracking-widest">
                                            Condition {String(selected + 1).padStart(2, '0')} of{' '}
                                            {String(conditions.length).padStart(2, '0')}
                                        </span>

                                        <h3 className="mt-4 text-heading-2 md:text-heading-1 font-heading font-bold text-navy-900 leading-tight">
                                            {current.name}
                                        </h3>
                                        <p className="mt-2 text-base text-spine-700 font-medium">
                                            {current.tagline}
                                        </p>

                                        <p className="mt-5 text-navy-600 leading-relaxed text-[15px]">
                                            {current.description}
                                        </p>

                                        {/* Symptoms */}
                                        {current.symptoms.length > 0 && (
                                            <div className="mt-7">
                                                <p className="text-[11px] font-heading font-semibold uppercase tracking-widest text-navy-400 mb-3">
                                                    Common Symptoms
                                                </p>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                                                    {current.symptoms.slice(0, 4).map((s) => (
                                                        <div
                                                            key={s}
                                                            className="flex items-start gap-2.5"
                                                        >
                                                            <div className="mt-0.5 w-5 h-5 rounded-full bg-spine-100 text-spine-700 flex items-center justify-center shrink-0">
                                                                <Check className="w-3 h-3" />
                                                            </div>
                                                            <span className="text-[13px] text-navy-700 leading-snug">
                                                                {s}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Stats + CTA */}
                                        <div className="mt-8 pt-6 border-t border-navy-100/60 flex flex-wrap items-center justify-between gap-4">
                                            <div className="flex gap-8">
                                                <div>
                                                    <p className="text-3xl font-heading font-bold gradient-text leading-none">
                                                        {current.successRate}
                                                    </p>
                                                    <p className="text-[11px] text-navy-400 mt-1 uppercase tracking-wider">
                                                        Success Rate
                                                    </p>
                                                </div>
                                                <div className="border-l border-navy-100 pl-8">
                                                    <p className="text-3xl font-heading font-bold text-navy-900 leading-none">
                                                        {current.patientsTreated}
                                                    </p>
                                                    <p className="text-[11px] text-navy-400 mt-1 uppercase tracking-wider">
                                                        Patients Treated
                                                    </p>
                                                </div>
                                            </div>
                                            <a
                                                href={`/conditions/${current.slug}`}
                                                className="btn-primary"
                                            >
                                                Read Full Guide <ArrowRight className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Side: stylized spine indicator showing affected region */}
                                    <div className="hidden md:flex flex-col items-center justify-center relative">
                                        <SpineIndicator
                                            highlightRanges={regionMap[current.slug] ?? []}
                                        />
                                        <p className="mt-3 text-[10px] uppercase tracking-widest text-navy-400 text-center">
                                            Affected
                                            <br />
                                            Region
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Bottom: condition pagination dots */}
                            <div className="absolute bottom-5 left-7 right-7 flex items-center gap-1.5">
                                {conditions.map((c, i) => (
                                    <button
                                        key={c.slug}
                                        onClick={() => onSelect(i)}
                                        aria-label={`View ${c.name}`}
                                        className={`h-1 rounded-full transition-all ${
                                            i === selected
                                                ? 'flex-1 bg-gradient-spine'
                                                : 'w-6 bg-navy-100 hover:bg-spine-200'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>

                {/* CTA */}
                <AnimateOnScroll className="text-center mt-12" delay={0.25}>
                    <a href="/conditions" className="btn-secondary">
                        Explore All {conditions.length} Conditions{' '}
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </AnimateOnScroll>
            </div>
        </section>
    );
}

// ============================================================================
// Stylized Spine Indicator
// Vertical stack of 24 vertebrae; highlighted ranges glow cyan.
// ============================================================================
function SpineIndicator({ highlightRanges }: { highlightRanges: [number, number][] }) {
    const vertebrae = 24;
    const isHighlighted = (i: number) =>
        highlightRanges.some(([from, to]) => i >= from && i <= to);

    return (
        <svg
            viewBox="0 0 60 320"
            className="w-16 h-72"
            fill="none"
            aria-hidden
        >
            <defs>
                <linearGradient id="spine-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e8edf2" />
                    <stop offset="100%" stopColor="#c8d3e0" />
                </linearGradient>
                <linearGradient id="spine-active" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#26c6da" />
                    <stop offset="100%" stopColor="#006064" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Skull */}
            <ellipse cx="30" cy="14" rx="13" ry="14" fill="url(#spine-bg)" />

            {/* Vertebrae */}
            {Array.from({ length: vertebrae }).map((_, i) => {
                const y = 36 + i * 10;
                const w = 22 - Math.abs(i - 11) * 0.3;
                const active = isHighlighted(i);
                return (
                    <g key={i}>
                        <rect
                            x={30 - w / 2}
                            y={y}
                            width={w}
                            height="7"
                            rx="2"
                            fill={active ? 'url(#spine-active)' : 'url(#spine-bg)'}
                            filter={active ? 'url(#glow)' : undefined}
                        />
                        {/* Disc beneath */}
                        <rect
                            x={30 - (w - 2) / 2}
                            y={y + 7}
                            width={w - 2}
                            height="2"
                            rx="1"
                            fill={active ? '#80deea' : '#dde4ec'}
                        />
                    </g>
                );
            })}

            {/* Sacrum/coccyx */}
            <path
                d="M 19 282 L 41 282 L 38 308 L 22 308 Z"
                fill="url(#spine-bg)"
            />
        </svg>
    );
}
