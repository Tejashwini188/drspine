'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { conditions } from '../../data/siteData';
import { AnimateOnScroll } from '../../components/ui/Animations';
import {
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
    AlertTriangle,
    ChevronDown,
} from 'lucide-react';

export default function ConditionsPage() {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [activeIdx, setActiveIdx] = useState(0);

    // Track which card is centered as the user scrolls
    const handleScroll = useCallback(() => {
        const el = scrollerRef.current;
        if (!el) return;
        const center = el.scrollLeft + el.clientWidth / 2;
        const cards = Array.from(el.querySelectorAll<HTMLElement>('[data-card]'));
        let closest = 0;
        let minDist = Infinity;
        cards.forEach((card, i) => {
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const dist = Math.abs(center - cardCenter);
            if (dist < minDist) {
                minDist = dist;
                closest = i;
            }
        });
        setActiveIdx(closest);
    }, []);

    useEffect(() => {
        const el = scrollerRef.current;
        if (!el) return;
        el.addEventListener('scroll', handleScroll, { passive: true });
        return () => el.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const scrollToCard = (idx: number) => {
        const el = scrollerRef.current;
        if (!el) return;
        const card = el.querySelectorAll<HTMLElement>('[data-card]')[idx];
        if (!card) return;
        const left = card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2;
        el.scrollTo({ left, behavior: 'smooth' });
    };

    const scrollByOne = (dir: -1 | 1) => {
        scrollToCard(
            Math.max(0, Math.min(conditions.length - 1, activeIdx + dir))
        );
    };

    return (
        <>
            {/* HERO */}
            <section className="relative pt-20 pb-6 bg-gradient-hero overflow-hidden">
                <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-spine-200/30 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-spine-100/40 blur-3xl pointer-events-none" />
                <div className="container-default text-center relative">
                    <AnimateOnScroll>
                        <span className="badge-spine">Conditions We Help</span>
                        <h1 className="mt-4 text-heading-1 font-heading font-bold text-navy-900 leading-tight">
                            Spine Conditions{' '}
                            <span className="gradient-text">We Treat</span>
                        </h1>
                        <p className="mt-3 text-body text-navy-500 max-w-xl mx-auto">
                            Evidence-based, non-surgical care for every major spine condition.
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* CONDITION DETAIL CAROUSEL */}
            <section className="pt-6 pb-16 bg-surface-offwhite relative">
                <div className="container-default mb-4">
                    <div className="flex items-center justify-between gap-4">
                        <p className="text-caption uppercase tracking-widest text-navy-400 font-heading font-semibold">
                            {String(activeIdx + 1).padStart(2, '0')} / {String(conditions.length).padStart(2, '0')}
                            <span className="ml-2 text-navy-700">{conditions[activeIdx]?.name}</span>
                        </p>

                        {/* Arrow controls */}
                        <div className="hidden md:flex items-center gap-2">
                            <button
                                onClick={() => scrollByOne(-1)}
                                disabled={activeIdx === 0}
                                aria-label="Previous condition"
                                className="w-10 h-10 rounded-full bg-white border border-navy-100 flex items-center justify-center shadow-card hover:shadow-card-hover hover:border-spine-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            >
                                <ArrowLeft className="w-4 h-4 text-navy-700" />
                            </button>
                            <button
                                onClick={() => scrollByOne(1)}
                                disabled={activeIdx === conditions.length - 1}
                                aria-label="Next condition"
                                className="w-10 h-10 rounded-full bg-gradient-spine flex items-center justify-center shadow-button hover:shadow-button-hover disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            >
                                <ArrowRight className="w-4 h-4 text-white" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroller — bleeds to viewport edges; left/right gradient masks
                    fade the peeking cards so the edges don't look clipped. */}
                <div className="relative">
                    <div
                        ref={scrollerRef}
                        className="conditions-scroller flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 px-[max(1.25rem,calc((100vw-1280px)/2+1.25rem))]"
                        style={{ scrollbarWidth: 'none' }}
                    >
                        {conditions.map((c, i) => (
                            <ConditionCard
                                key={c.slug}
                                condition={c}
                                index={i}
                                isActive={i === activeIdx}
                            />
                        ))}
                    </div>
                    {/* Edge fade masks */}
                    <div
                        aria-hidden
                        className="hidden md:block absolute left-0 top-0 bottom-6 w-24 pointer-events-none bg-gradient-to-r from-surface-offwhite to-transparent"
                    />
                    <div
                        aria-hidden
                        className="hidden md:block absolute right-0 top-0 bottom-6 w-24 pointer-events-none bg-gradient-to-l from-surface-offwhite to-transparent"
                    />
                </div>

                {/* Pagination dots */}
                <div className="container-default mt-2 flex items-center justify-center gap-2">
                    {conditions.map((c, i) => (
                        <button
                            key={c.slug}
                            onClick={() => scrollToCard(i)}
                            aria-label={`Go to ${c.name}`}
                            className={`h-1.5 rounded-full transition-all ${
                                i === activeIdx
                                    ? 'w-10 bg-gradient-spine'
                                    : 'w-2 bg-navy-200 hover:bg-spine-300'
                            }`}
                        />
                    ))}
                </div>

                {/* Hide native scrollbar in Webkit */}
                <style jsx>{`
                    .conditions-scroller::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white">
                <div className="container-default max-w-4xl">
                    <AnimateOnScroll>
                        <div className="glass-card p-10 md:p-14 text-center">
                            <p className="section-label">Take the First Step</p>
                            <h2 className="section-title">
                                Not Sure Where to <span className="gradient-text">Begin?</span>
                            </h2>
                            <p className="section-subtitle mx-auto mt-3">
                                Speak with our team for a personalised assessment and a care plan built around your specific spine condition.
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <a href="/book" className="btn-primary">
                                    Book Appointment <ArrowRight className="w-4 h-4" />
                                </a>
                                <a href="/" className="btn-secondary">
                                    Back to Home
                                </a>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </div>
            </section>
        </>
    );
}

// ============================================================================
// Per-condition card (scroll-snap aligned)
// ============================================================================
type Condition = (typeof conditions)[number];

function ConditionCard({
    condition: c,
    index,
    isActive,
}: {
    condition: Condition;
    index: number;
    isActive: boolean;
}) {
    return (
        <article
            data-card
            id={c.slug}
            className={`relative shrink-0 snap-center w-[92vw] md:w-[920px] lg:w-[1180px] bg-white rounded-3xl border transition-all duration-500 overflow-hidden ${
                isActive
                    ? 'border-spine-200 shadow-glass-lg'
                    : 'border-navy-50 shadow-card opacity-90'
            }`}
        >
            {/* Header band */}
            <div className="relative bg-gradient-to-br from-spine-50 via-white to-spine-100/40 px-6 md:px-8 py-5 border-b border-navy-50">
                <div className="absolute -top-2 -right-2 text-[160px] leading-none opacity-[0.05] pointer-events-none select-none">
                    {c.icon}
                </div>

                <div className="relative flex items-center justify-between gap-6 flex-wrap">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-spine text-white flex items-center justify-center text-xl shadow-button shrink-0">
                            {c.icon}
                        </div>
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-spine-600 font-heading font-semibold">
                                Condition {String(index + 1).padStart(2, '0')}
                            </p>
                            <h3 className="text-heading-3 md:text-heading-2 font-heading font-bold text-navy-900 leading-tight">
                                {c.name}
                            </h3>
                            <p className="text-body-sm text-spine-700 font-medium">
                                {c.tagline}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="text-center bg-white rounded-xl border border-navy-50 px-4 py-2 min-w-[92px]">
                            <p className="text-[9px] uppercase tracking-widest text-navy-400 font-heading font-semibold">
                                Success
                            </p>
                            <p className="text-xl font-heading font-bold gradient-text leading-tight">
                                {c.successRate}
                            </p>
                        </div>
                        <div className="text-center bg-white rounded-xl border border-navy-50 px-4 py-2 min-w-[92px]">
                            <p className="text-[9px] uppercase tracking-widest text-navy-400 font-heading font-semibold">
                                Patients
                            </p>
                            <p className="text-xl font-heading font-bold text-navy-900 leading-tight">
                                {c.patientsTreated}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Body — two-column horizontal layout so the card fits one screen */}
            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6">
                {/* LEFT column — description + symptoms + risks */}
                <div className="space-y-7">
                    <p className="text-body-lg text-navy-600 leading-relaxed">
                        {c.description}
                    </p>

                    {c.symptoms.length > 0 && (
                        <div>
                            <h4 className="text-base font-heading font-semibold text-navy-900 mb-3 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-spine-600" />
                                Common Symptoms
                            </h4>
                            <ul className="grid grid-cols-1 gap-y-3">
                                {c.symptoms.slice(0, 5).map((s) => (
                                    <li
                                        key={s}
                                        className="flex items-start gap-3 text-base text-navy-600 leading-relaxed"
                                    >
                                        <span className="mt-2 w-2 h-2 rounded-full bg-spine-500 shrink-0" />
                                        <span>{s}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {c.risks.length > 0 && (
                        <div>
                            <h4 className="text-base font-heading font-semibold text-navy-900 mb-3 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-accent-coral" />
                                Risks if Untreated
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3">
                                {c.risks.slice(0, 4).map((r) => (
                                    <li
                                        key={r}
                                        className="flex items-start gap-3 text-base text-navy-600 leading-relaxed"
                                    >
                                        <span className="mt-2 w-2 h-2 rounded-full bg-accent-coral shrink-0" />
                                        <span>{r}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* RIGHT column — treatment timeline + FAQs + CTAs */}
                <div className="space-y-5">
                    {c.treatment.length > 0 && (
                        <div>
                            <h4 className="text-sm font-heading font-semibold text-navy-900 mb-3">
                                Our Treatment Approach
                            </h4>
                            <ol className="space-y-2">
                                {c.treatment.map((t, i) => (
                                    <li
                                        key={t.step}
                                        className="flex items-start gap-3 p-2.5 rounded-lg bg-spine-50/40 border border-spine-100/40"
                                    >
                                        <span className="w-6 h-6 rounded-md bg-gradient-spine text-white text-[11px] font-heading font-bold flex items-center justify-center shrink-0">
                                            {i + 1}
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-baseline justify-between gap-3">
                                                <p className="font-heading font-semibold text-[13px] text-navy-900 truncate">
                                                    {t.step}
                                                </p>
                                                <p className="text-[10px] text-spine-700 font-medium uppercase tracking-wider shrink-0">
                                                    {t.duration}
                                                </p>
                                            </div>
                                            <p className="text-xs text-navy-500 leading-snug mt-0.5">
                                                {t.description}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    )}

                    {c.faqs.length > 0 && (
                        <div>
                            <h4 className="text-sm font-heading font-semibold text-navy-900 mb-2">
                                Frequently Asked
                            </h4>
                            <div className="space-y-1.5">
                                {c.faqs.slice(0, 2).map((f) => (
                                    <details
                                        key={f.question}
                                        className="group bg-spine-50/30 rounded-lg border border-spine-100/40 px-3 py-2 open:bg-white open:shadow-card"
                                    >
                                        <summary className="cursor-pointer list-none flex items-center justify-between gap-3 font-heading font-semibold text-[13px] text-navy-900">
                                            {f.question}
                                            <ChevronDown className="w-3.5 h-3.5 text-spine-600 group-open:rotate-180 transition-transform shrink-0" />
                                        </summary>
                                        <p className="mt-1.5 text-xs text-navy-600 leading-relaxed">
                                            {f.answer}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="flex flex-wrap gap-3 pt-1">
                        <a
                            href={`/conditions/${c.slug}`}
                            className="btn-secondary text-sm"
                        >
                            Read Full Guide <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href="/book" className="btn-primary text-sm">
                            Book Consultation <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}
