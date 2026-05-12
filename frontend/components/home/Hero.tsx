'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, Award, Globe, Stethoscope } from 'lucide-react';
import { MagneticButton, AnimateOnScroll } from '../ui/Animations';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-surface-offwhite" id="hero">
            {/* Subtle grid background */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(16,42,67,1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,42,67,1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />
            
            {/* Gradient orbs */}
            <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-spine-100/40 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-spine-50/50 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-wide relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-var(--nav-height)-40px)] py-16 lg:py-0">
                    
                    {/* Left Content */}
                    <div className="max-w-2xl">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <span className="badge-gold inline-flex items-center gap-2 mb-6">
                                <Award className="w-3.5 h-3.5" />
                                India&apos;s Most Trusted Chiropractic &amp; Structural Rehab Centre
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0, 1] }}
                            className="text-heading-1 md:text-display lg:text-display-xl font-heading font-bold text-navy-900 text-balance"
                        >
                            Realign Your Spine.{' '}
                            <span className="gradient-text">Reclaim Your Life.</span>
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-body-lg text-navy-500 mt-5 max-w-xl leading-relaxed"
                        >
                            Advanced Chiropractic Care &amp; Structural Rehabilitation for lasting relief, 
                            better posture, and a pain-free life.
                        </motion.p>

                        {/* Trust pills */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-wrap items-center gap-4 mt-7"
                        >
                            {[
                                { icon: Shield, text: 'Non-Surgical Approach' },
                                { icon: Stethoscope, text: 'CBP™ & Evidence-Based Protocols' },
                                { icon: Globe, text: 'Internationally Trained Experts' },
                            ].map((pill) => (
                                <div key={pill.text} className="flex items-center gap-2 text-sm text-navy-600">
                                    <div className="w-7 h-7 rounded-lg bg-spine-50 flex items-center justify-center">
                                        <pill.icon className="w-3.5 h-3.5 text-spine-600" />
                                    </div>
                                    <span className="font-medium">{pill.text}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-wrap items-center gap-4 mt-9"
                        >
                            <MagneticButton>
                                <a href="/appointment" className="btn-primary text-base px-8 py-4">
                                    Book an Appointment
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </MagneticButton>
                            <MagneticButton>
                                <a href="#pain-assessment" className="btn-secondary text-base px-8 py-4">
                                    Take Pain Assessment
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </MagneticButton>
                        </motion.div>

                        {/* Social proof */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex items-center gap-4 mt-10"
                        >
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div
                                        key={i}
                                        className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-spine-200 to-spine-400 flex items-center justify-center text-white text-xs font-bold"
                                    >
                                        {String.fromCharCode(64 + i)}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="text-sm font-heading font-semibold text-navy-800">90,000+ Patients Treated</p>
                                <div className="flex items-center gap-1 mt-0.5">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                    <span className="text-xs text-navy-400 ml-1">4.9/5 from 2500+ reviews</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Visual — Spine Visualization */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 40 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0, 1] }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-[4/5] max-w-[520px] mx-auto">
                            {/* Main visual container */}
                            <div className="absolute inset-0 bg-gradient-to-b from-spine-50/50 via-transparent to-spine-50/30 rounded-[2.5rem] overflow-hidden border border-spine-100/30">
                                {/* Spine SVG Visualization */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg viewBox="0 0 200 500" className="w-48 h-auto opacity-90">
                                        {/* Spine vertebrae */}
                                        {[
                                            { y: 30, w: 28, h: 16, rx: 6 },
                                            { y: 52, w: 30, h: 16, rx: 6 },
                                            { y: 74, w: 32, h: 16, rx: 6 },
                                            { y: 96, w: 34, h: 16, rx: 6 },
                                            { y: 118, w: 34, h: 16, rx: 6 },
                                            { y: 140, w: 36, h: 16, rx: 6 },
                                            { y: 162, w: 36, h: 16, rx: 6 },
                                            { y: 190, w: 38, h: 18, rx: 6 },
                                            { y: 214, w: 40, h: 18, rx: 6 },
                                            { y: 238, w: 42, h: 18, rx: 6 },
                                            { y: 262, w: 44, h: 18, rx: 6 },
                                            { y: 286, w: 44, h: 18, rx: 6 },
                                            { y: 316, w: 46, h: 20, rx: 7 },
                                            { y: 342, w: 48, h: 20, rx: 7 },
                                            { y: 368, w: 50, h: 20, rx: 7 },
                                            { y: 394, w: 50, h: 20, rx: 7 },
                                            { y: 420, w: 48, h: 20, rx: 7 },
                                        ].map((v, i) => (
                                            <motion.rect
                                                key={i}
                                                x={100 - v.w / 2}
                                                y={v.y}
                                                width={v.w}
                                                height={v.h}
                                                rx={v.rx}
                                                fill={`url(#spineGrad${i < 5 ? '1' : i < 12 ? '2' : '3'})`}
                                                stroke="#0070b3"
                                                strokeWidth="0.5"
                                                strokeOpacity="0.3"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                                            />
                                        ))}
                                        {/* Discs between vertebrae */}
                                        {[48, 70, 92, 114, 136, 158, 186, 210, 234, 258, 282, 312, 338, 364, 390, 416].map((y, i) => (
                                            <motion.ellipse
                                                key={`disc-${i}`}
                                                cx="100"
                                                cy={y}
                                                rx={12 + (i > 6 ? 4 : i > 11 ? 6 : 0)}
                                                ry="3"
                                                fill="#0fbcb6"
                                                fillOpacity="0.3"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.8 + i * 0.04 }}
                                            />
                                        ))}
                                        {/* Nerve pathways */}
                                        <motion.path
                                            d="M100 30 C 80 100, 120 200, 100 250 C 80 300, 120 370, 100 440"
                                            stroke="url(#nerveGrad)"
                                            strokeWidth="1.5"
                                            fill="none"
                                            strokeDasharray="4 4"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ delay: 1.2, duration: 2, ease: "easeInOut" }}
                                        />
                                        {/* Glow effect on healthy areas */}
                                        {[100, 240, 350].map((y, i) => (
                                            <motion.circle
                                                key={`glow-${i}`}
                                                cx="100"
                                                cy={y}
                                                r="25"
                                                fill="url(#glowGrad)"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: [0, 0.6, 0] }}
                                                transition={{ delay: 2 + i * 0.5, duration: 3, repeat: Infinity, repeatDelay: 2 }}
                                            />
                                        ))}
                                        <defs>
                                            <linearGradient id="spineGrad1" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#e6f7ff" />
                                                <stop offset="100%" stopColor="#b3e7ff" />
                                            </linearGradient>
                                            <linearGradient id="spineGrad2" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#b3e7ff" />
                                                <stop offset="100%" stopColor="#80d4ff" />
                                            </linearGradient>
                                            <linearGradient id="spineGrad3" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#80d4ff" />
                                                <stop offset="100%" stopColor="#4dbfff" />
                                            </linearGradient>
                                            <linearGradient id="nerveGrad" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#0fbcb6" stopOpacity="0.8" />
                                                <stop offset="100%" stopColor="#0070b3" stopOpacity="0.4" />
                                            </linearGradient>
                                            <radialGradient id="glowGrad">
                                                <stop offset="0%" stopColor="#0fbcb6" stopOpacity="0.4" />
                                                <stop offset="100%" stopColor="#0fbcb6" stopOpacity="0" />
                                            </radialGradient>
                                        </defs>
                                    </svg>
                                </div>

                                {/* Floating stat cards */}
                                <motion.div
                                    className="absolute top-8 right-6 glass-card px-4 py-3 rounded-2xl"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.2, duration: 0.5 }}
                                >
                                    <p className="text-xs text-navy-500 font-medium">Pain Reduction Rate</p>
                                    <p className="text-2xl font-heading font-bold gradient-text">72%</p>
                                    <p className="text-[10px] text-navy-400">within first 2 weeks</p>
                                </motion.div>

                                <motion.div
                                    className="absolute top-1/3 right-4 glass-card px-4 py-3 rounded-2xl"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.5, duration: 0.5 }}
                                >
                                    <p className="text-xs text-navy-500 font-medium">Posture Improvement</p>
                                    <p className="text-2xl font-heading font-bold text-accent-teal">80%</p>
                                    <p className="text-[10px] text-navy-400">post-rehabilitation average</p>
                                </motion.div>

                                <motion.div
                                    className="absolute bottom-1/4 left-4 glass-card px-4 py-3 rounded-2xl"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.8, duration: 0.5 }}
                                >
                                    <p className="text-xs text-navy-500 font-medium">Mobility Gained</p>
                                    <p className="text-2xl font-heading font-bold text-navy-800">+65%</p>
                                    <p className="text-[10px] text-navy-400">range of motion restored</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Trust Bar */}
            <AnimateOnScroll className="relative z-10">
                <div className="bg-white border-t border-navy-50">
                    <div className="container-wide py-5">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                                    <Award className="w-5 h-5 text-amber-600" />
                                </div>
                                <div>
                                    <p className="text-xs font-heading font-semibold text-navy-800">Awarded India&apos;s Most Trusted</p>
                                    <p className="text-[11px] text-navy-400">Healthcare Brand — Times Health Excellence</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 justify-center">
                                <div className="w-10 h-10 rounded-xl bg-spine-50 flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-spine-600" />
                                </div>
                                <div>
                                    <p className="text-xs font-heading font-semibold text-navy-800">India&apos;s First Chiropractic Chain</p>
                                    <p className="text-[11px] text-navy-400">Specializing in Structural Rehabilitation &amp; Scoliosis Care</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 justify-center md:justify-end">
                                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                                    <Globe className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-xs font-heading font-semibold text-navy-800">4 Advanced Centres — Bangalore</p>
                                    <p className="text-[11px] text-navy-400">Indiranagar · Whitefield · New BEL Road · Jayanagar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimateOnScroll>
        </section>
    );
}
