'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimateOnScroll } from '../ui/Animations';
import { ArrowRight, MapPin, Zap, Activity, Brain, Bone, Hand, Footprints } from 'lucide-react';

const bodyParts = [
    { id: 'neck', label: 'Neck', icon: Brain, x: '50%', y: '12%', conditions: ['Cervical Pain', 'Text Neck', 'Neck Stiffness'] },
    { id: 'upper-back', label: 'Upper Back', icon: Activity, x: '50%', y: '25%', conditions: ['Thoracic Pain', 'Rounded Shoulders', 'Posture Issues'] },
    { id: 'lower-back', label: 'Lower Back', icon: Bone, x: '50%', y: '42%', conditions: ['Slip Disc', 'Lumbar Pain', 'Degenerative Disc'] },
    { id: 'hip', label: 'Hip & Pelvis', icon: MapPin, x: '50%', y: '55%', conditions: ['Sciatica', 'Hip Pain', 'SI Joint'] },
    { id: 'leg', label: 'Legs', icon: Footprints, x: '50%', y: '72%', conditions: ['Radiating Pain', 'Numbness', 'Weakness'] },
    { id: 'shoulder', label: 'Shoulders', icon: Hand, x: '30%', y: '20%', conditions: ['Frozen Shoulder', 'Shoulder Pain', 'Rotator Cuff'] },
];

export default function PainAssessment() {
    const [selectedPart, setSelectedPart] = useState<string | null>(null);
    const [severity, setSeverity] = useState(5);
    const selectedData = bodyParts.find(p => p.id === selectedPart);

    return (
        <section className="section-padding bg-navy-900 relative overflow-hidden" id="pain-assessment">
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-spine-500/5 rounded-full blur-[120px]" />

            <div className="container-default relative z-10">
                <AnimateOnScroll className="text-center mb-12">
                    <p className="section-label text-spine-400">AI-Powered Assessment</p>
                    <h2 className="text-heading-1 md:text-display font-heading font-bold text-white mb-3">
                        Not Sure What&apos;s Causing Your Pain?
                    </h2>
                    <p className="text-body text-navy-300 max-w-xl mx-auto">
                        Take our AI-powered assessment and get personalized recommendations. Select your pain area to begin.
                    </p>
                </AnimateOnScroll>

                <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
                    {/* Body Map */}
                    <AnimateOnScroll className="relative">
                        <div className="relative w-full max-w-[300px] mx-auto aspect-[1/2]">
                            {/* Body silhouette */}
                            <svg viewBox="0 0 200 400" className="w-full h-full" fill="none">
                                {/* Head */}
                                <ellipse cx="100" cy="35" rx="22" ry="28" className="fill-navy-800 stroke-navy-600" strokeWidth="0.5" />
                                {/* Neck */}
                                <rect x="90" y="62" width="20" height="18" rx="4" className="fill-navy-800" />
                                {/* Torso */}
                                <path d="M60 80 Q55 130 58 180 L80 200 L120 200 L142 180 Q145 130 140 80 Z" className="fill-navy-800 stroke-navy-600" strokeWidth="0.5" />
                                {/* Arms */}
                                <path d="M60 85 Q35 120 30 170 L40 172 Q48 125 65 92" className="fill-navy-800" />
                                <path d="M140 85 Q165 120 170 170 L160 172 Q152 125 135 92" className="fill-navy-800" />
                                {/* Hips */}
                                <path d="M65 195 Q60 220 65 240 L100 245 L135 240 Q140 220 135 195 Z" className="fill-navy-800" />
                                {/* Legs */}
                                <path d="M70 240 Q68 300 72 360 L88 362 Q86 305 85 245" className="fill-navy-800" />
                                <path d="M115 245 Q114 305 112 362 L128 360 Q132 300 130 240" className="fill-navy-800" />
                            </svg>

                            {/* Pain points */}
                            {bodyParts.map((part) => (
                                <button
                                    key={part.id}
                                    onClick={() => setSelectedPart(part.id)}
                                    className="absolute -translate-x-1/2 -translate-y-1/2 group"
                                    style={{ left: part.x, top: part.y }}
                                >
                                    <motion.div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                            selectedPart === part.id
                                                ? 'bg-spine-500 scale-125 shadow-lg shadow-spine-500/50'
                                                : 'bg-navy-600 hover:bg-spine-500 hover:scale-110'
                                        }`}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Zap className="w-3.5 h-3.5 text-white" />
                                    </motion.div>
                                    {selectedPart === part.id && (
                                        <motion.div
                                            className="absolute w-10 h-10 rounded-full border-2 border-spine-400 -inset-1"
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    )}
                                    <span className="absolute left-full ml-3 whitespace-nowrap text-xs font-medium text-navy-300 opacity-0 group-hover:opacity-100 transition-opacity bg-navy-800/80 px-2 py-1 rounded">
                                        {part.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </AnimateOnScroll>

                    {/* Assessment Panel */}
                    <AnimateOnScroll delay={0.2}>
                        <div className="bg-navy-800/50 backdrop-blur-xl border border-navy-700/50 rounded-3xl p-6">
                            <AnimatePresence mode="wait">
                                {selectedData ? (
                                    <motion.div
                                        key={selectedData.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        <div className="flex items-center gap-3 mb-5">
                                            <div className="w-10 h-10 rounded-xl bg-spine-500/20 flex items-center justify-center">
                                                <selectedData.icon className="w-5 h-5 text-spine-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-heading font-semibold text-white">{selectedData.label} Pain</h3>
                                                <p className="text-xs text-navy-400">Select severity below</p>
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <label className="text-sm text-navy-300 mb-2 block">Pain Severity: {severity}/10</label>
                                            <input
                                                type="range" min="1" max="10" value={severity}
                                                onChange={(e) => setSeverity(parseInt(e.target.value))}
                                                className="w-full h-2 bg-navy-700 rounded-full appearance-none cursor-pointer accent-spine-500"
                                            />
                                            <div className="flex justify-between text-[10px] text-navy-500 mt-1">
                                                <span>Mild</span><span>Moderate</span><span>Severe</span>
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <p className="text-sm text-navy-300 mb-3">Related conditions:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedData.conditions.map((c) => (
                                                    <span key={c} className="px-3 py-1.5 rounded-full bg-navy-700/50 text-xs text-spine-300 border border-navy-600/50">{c}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <a href="/appointment" className="btn-primary w-full justify-center">
                                            Get Expert Assessment <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </motion.div>
                                ) : (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
                                        <div className="w-16 h-16 rounded-2xl bg-spine-500/10 flex items-center justify-center mx-auto mb-4">
                                            <MapPin className="w-8 h-8 text-spine-400" />
                                        </div>
                                        <h3 className="text-lg font-heading font-semibold text-white mb-2">Where is your pain?</h3>
                                        <p className="text-sm text-navy-400">Select a pain point on the body map to begin your assessment</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
}
