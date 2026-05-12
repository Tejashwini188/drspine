"use client";
import Link from "next/link";
import { ArrowRight, ChevronDown, Shield, BookOpen, Heart, Globe, Users, Award, TrendingUp, Activity, Brain, Zap, Stethoscope } from "lucide-react";

const stats = [
  { value: "25+", label: "Years of Advocacy", icon: <Award size={22} /> },
  { value: "10000+", label: "Lives Impacted", icon: <Users size={22} /> },
  { value: "50+", label: "Awareness Programs", icon: <TrendingUp size={22} /> },
  { value: "Pan India", label: "Presence", icon: <Globe size={22} /> },
];

const conditions = [
  { icon: <Activity size={24} />, name: "Back Pain", desc: "Relief & Strength" },
  { icon: <Brain size={24} />, name: "Neck Pain", desc: "Relief & Mobility" },
  { icon: <Zap size={24} />, name: "Sciatica", desc: "Non-Invasive Treatment" },
  { icon: <Shield size={24} />, name: "Sports Injuries", desc: "Recovery & Prevention" },
  { icon: <Stethoscope size={24} />, name: "Posture Problems", desc: "Alignment & Balance" },
  { icon: <Heart size={24} />, name: "Headaches & Migraines", desc: "Tension & Pain" },
  { icon: <Activity size={24} />, name: "Joint Pain", desc: "Mobility & Comfort" },
  { icon: <Brain size={24} />, name: "Muscle Tension", desc: "Relief & Relaxation" },
];

const pillars = [
  { icon: <Shield size={24} />, title: "Awareness", desc: "Educating communities about chiropractic care across India." },
  { icon: <BookOpen size={24} />, title: "Education", desc: "Building chiropractic knowledge and university programs." },
  { icon: <Globe size={24} />, title: "Advocacy", desc: "Promoting policy & standards for legitimate practice." },
  { icon: <Heart size={24} />, title: "Accessibility", desc: "Making chiropractic care available to all in India." },
];

const blogPreviews = [
  { title: "How Chiropractors Effectively Manage Tension-Type Headaches", category: "Chiropractic Education", date: "May 25, 2023" },
  { title: "Do I Need a Chiropractor or a Physical Therapist?", category: "Chiropractic Education", date: "May 25, 2023" },
  { title: "Abdominal Conditions and Chiropractic Care", category: "Chiropractic Condition", date: "March 5, 2023" },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center gradient-hero pattern-overlay pt-32">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#1F5E3A]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-[#D4AF37]/8 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1F5E3A]/8 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full bg-[#1F5E3A] animate-pulse" />
                <span className="font-manrope text-xs text-[#1F5E3A] font-semibold uppercase tracking-widest">
                  Advancing Spinal Health &amp; Wellbeing
                </span>
              </div>
              <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#0E2D1F] leading-tight mb-6">
                Building a Healthier India,{" "}
                <em className="text-[#1F5E3A] not-italic">One Spine</em> at a Time
              </h1>
              <p className="font-manrope text-base text-[#666] leading-relaxed mb-8 max-w-lg">
                Chiropractic India is the national voice for chiropractic awareness, education, and advocacy. Together, we promote drug-free, non-invasive, and holistic spinal care.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/about" className="btn-primary">Learn More About Chiropractic <ArrowRight size={16} /></Link>
                <Link href="/fundraising" className="btn-secondary">Join Our Mission</Link>
              </div>
              <div className="flex flex-wrap gap-6">
                {["Evidence Based", "Drug-Free Care", "Holistic Approach", "Global Standards"].map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span className="font-manrope text-xs text-[#666]">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex items-center justify-center min-h-[480px]">
              <div className="w-52 h-80 rounded-3xl bg-gradient-to-b from-[#E8F3EC] to-[#FAF9F4] border border-[#1F5E3A]/10 green-glow flex items-center justify-center">
                <svg viewBox="0 0 120 280" className="w-28 h-64 opacity-25" fill="none">
                  {Array.from({ length: 13 }).map((_, i) => (
                    <rect key={i} x="30" y={i * 20 + 8} width="60" height="12" rx="4" fill="#1F5E3A" />
                  ))}
                  <line x1="60" y1="8" x2="60" y2="268" stroke="#D4AF37" strokeWidth="2" opacity="0.5" />
                </svg>
              </div>
              <div className="absolute -right-4 top-8 glass-card float-shadow rounded-2xl px-4 py-3 min-w-[140px] hover-lift">
                <div className="text-[#1F5E3A] mb-1"><Activity size={18} /></div>
                <p className="font-playfair text-sm font-semibold text-[#0E2D1F]">Spinal Health</p>
                <p className="font-manrope text-xs text-[#666]">Better movement, better life</p>
              </div>
              <div className="absolute -right-4 top-1/2 glass-card float-shadow rounded-2xl px-4 py-3 min-w-[150px] hover-lift">
                <div className="text-[#1F5E3A] mb-1"><Brain size={18} /></div>
                <p className="font-playfair text-sm font-semibold text-[#0E2D1F]">Nerve Function</p>
                <p className="font-manrope text-xs text-[#666]">Healthy spine, healthy nervous system</p>
              </div>
              <div className="absolute -left-4 bottom-12 glass-card float-shadow rounded-2xl px-4 py-3 min-w-[150px] hover-lift">
                <div className="text-[#D4AF37] mb-1"><Shield size={18} /></div>
                <p className="font-playfair text-sm font-semibold text-[#0E2D1F]">Posture &amp; Alignment</p>
                <p className="font-manrope text-xs text-[#666]">Align your spine, align your life</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-manrope text-xs text-[#666] uppercase tracking-widest">Scroll</span>
          <ChevronDown size={18} className="text-[#1F5E3A] animate-bounce" />
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center glass-card float-shadow rounded-2xl p-6 hover-lift">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1F5E3A]/8 text-[#1F5E3A] mb-3 mx-auto">{stat.icon}</div>
                <div className="font-playfair text-3xl font-bold text-[#D4AF37] mb-1">{stat.value}</div>
                <p className="font-manrope text-sm text-[#666]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS CHIROPRACTIC */}
      <section className="section-padding bg-[#FAF9F4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-full h-96 rounded-3xl bg-gradient-to-br from-[#E8F3EC] to-[#F0F7F2] border border-[#1F5E3A]/10 flex items-center justify-center">
              <div className="flex flex-col gap-3">
                {[{ name: "Neck Pain", desc: "Relief & Mobility" }, { name: "Back Pain", desc: "Relief & Strength" }, { name: "Posture Issues", desc: "Alignment & Balance" }, { name: "Headaches", desc: "Tension & Migraine" }].map((c) => (
                  <div key={c.name} className="glass-card float-shadow rounded-xl px-5 py-3 flex items-center gap-3 hover-lift">
                    <div className="w-2 h-8 rounded-full bg-gradient-to-b from-[#1F5E3A] to-[#D4AF37]" />
                    <div>
                      <p className="font-playfair text-sm font-semibold text-[#0E2D1F]">{c.name}</p>
                      <p className="font-manrope text-xs text-[#666]">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Understanding Chiropractic</p>
              <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] mb-4 gold-underline">What is Chiropractic?</h2>
              <p className="font-manrope text-base text-[#444] leading-relaxed mb-5 mt-4">
                Chiropractic is a healthcare profession concerned with the diagnosis, treatment and prevention of mechanical disorders of the musculoskeletal system, especially the spine.
              </p>
              <p className="font-manrope text-base text-[#444] leading-relaxed mb-8">
                It focuses on restoring proper alignment, improving mobility, and enhancing the body&apos;s natural ability to heal itself without drugs or surgery.
              </p>
              <Link href="/information" className="btn-primary">Explore Chiropractic <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Our Purpose</p>
              <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] mb-2 gold-underline">Our Mission, Our Commitment</h2>
              <p className="font-manrope text-base text-[#444] leading-relaxed mt-6 mb-6">
                To promote chiropractic awareness, support education, uphold professional standards, and advocate for the integration of chiropractic care into mainstream healthcare in India.
              </p>
              <Link href="/about" className="btn-secondary">About Our Journey <ArrowRight size={16} /></Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((p) => (
                <div key={p.title} className="glass-card float-shadow rounded-2xl p-5 hover-lift">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#1F5E3A]/8 text-[#1F5E3A] mb-3">{p.icon}</div>
                  <h3 className="font-playfair text-base font-semibold text-[#0E2D1F] mb-1">{p.title}</h3>
                  <p className="font-manrope text-xs text-[#666] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="section-padding bg-[#FAF9F4] pattern-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">We Help With</p>
            <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] gold-underline-center">Conditions We Address</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {conditions.map((c) => (
              <div key={c.name} className="glass-card float-shadow rounded-2xl p-6 text-center hover-lift cursor-default group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#1F5E3A]/8 text-[#1F5E3A] mb-4 group-hover:bg-[#1F5E3A] group-hover:text-white transition-all duration-300">{c.icon}</div>
                <h3 className="font-playfair text-sm font-semibold text-[#0E2D1F] mb-1">{c.name}</h3>
                <div className="w-6 h-0.5 bg-[#D4AF37] mx-auto mb-2" />
                <p className="font-manrope text-xs text-[#666]">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/information" className="btn-primary">View All Conditions <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="py-20 gradient-green relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Making a Difference</p>
          <h2 className="font-playfair text-4xl font-bold text-white mb-12">Our Impact Across India</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[{ value: "10000+", label: "People Reached", icon: <Users size={22} /> }, { value: "50+", label: "Health Camps", icon: <Heart size={22} /> }, { value: "200+", label: "Workshops Conducted", icon: <BookOpen size={22} /> }, { value: "25+", label: "Years of Service", icon: <Award size={22} /> }].map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] mb-3 mx-auto">{s.icon}</div>
                <div className="font-playfair text-3xl font-bold text-[#D4AF37] mb-1">{s.value}</div>
                <p className="font-manrope text-sm text-white/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Latest Resources</p>
              <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] gold-underline">Educational Articles</h2>
            </div>
            <Link href="/blog" className="btn-secondary shrink-0">View All Articles <ArrowRight size={16} /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPreviews.map((post) => (
              <article key={post.title} className="glass-card float-shadow rounded-2xl overflow-hidden hover-lift group">
                <div className="h-40 bg-gradient-to-br from-[#E8F3EC] to-[#F0F7F2] flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#1F5E3A]/10 flex items-center justify-center">
                    <BookOpen size={24} className="text-[#1F5E3A]" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#1F5E3A]/8 rounded-full font-manrope text-xs text-[#1F5E3A] font-medium">{post.category}</span>
                    <span className="font-manrope text-xs text-[#999]">{post.date}</span>
                  </div>
                  <h3 className="font-playfair text-base font-semibold text-[#0E2D1F] leading-snug mb-4 group-hover:text-[#1F5E3A] transition-colors">{post.title}</h3>
                  <Link href="/blog" className="font-manrope text-sm text-[#1F5E3A] font-medium flex items-center gap-1 hover:gap-2 transition-all">Read More <ArrowRight size={14} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DONATE CTA */}
      <section className="py-20 bg-[#FAF9F4]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass-card float-shadow-lg rounded-3xl p-12 border border-[#D4AF37]/20">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Support Our Mission</p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#0E2D1F] mb-4">Become a Supporter of Chiropractic India</h2>
            <p className="font-manrope text-base text-[#666] leading-relaxed mb-8 max-w-lg mx-auto">
              Your support helps us establish chiropractic education and bring holistic spinal healthcare to every corner of India.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/fundraising" className="btn-gold">Donate Now <ArrowRight size={16} /></Link>
              <Link href="/about" className="btn-secondary">Learn How You Help</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
