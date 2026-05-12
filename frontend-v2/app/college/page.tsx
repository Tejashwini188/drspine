import Link from "next/link";
import { ArrowRight, BookOpen, Users, Award, Globe, FlaskConical, GraduationCap, Building, CheckCircle, Send } from "lucide-react";

const programs = [
  {
    title: "Doctor of Chiropractic (DC)",
    duration: "4 Years",
    level: "Postgraduate",
    desc: "A comprehensive 4-year postgraduate program meeting international standards set by the World Federation of Chiropractic.",
    modules: ["Anatomy & Physiology", "Chiropractic Technique", "Clinical Sciences", "Spinal Biomechanics"],
  },
  {
    title: "Chiropractic BioPhysics (CBP)",
    duration: "Advanced Program",
    level: "Specialization",
    desc: "A specialized chiropractic technique that aims to correct abnormal spinal alignment and posture through targeted adjustments, exercises, and other therapies.",
    modules: ["Postural Analysis", "Spinal Correction", "Rehabilitation Protocols", "Patient Management"],
  },
  {
    title: "Scoliosis & Spine Management",
    duration: "Certificate Program",
    level: "Short Course",
    desc: "Focused program on identifying, assessing, and managing scoliosis and other spinal curvature conditions in clinical practice.",
    modules: ["AIS Assessment", "Cobb Angle Measurement", "Non-Surgical Management", "Bracing Protocols"],
  },
  {
    title: "Continuing Education for Chiropractors",
    duration: "Ongoing",
    level: "Continuing Education",
    desc: "Regular continuing education programs to keep practicing chiropractors in India updated with global standards and techniques.",
    modules: ["Latest Research Updates", "Technique Workshops", "Clinical Case Studies", "Ethics & Standards"],
  },
];

const whyUs = [
  { icon: <Award size={22} />, title: "International Standards", desc: "Programs designed to meet World Federation of Chiropractic international standards." },
  { icon: <Globe size={22} />, title: "Global Faculty", desc: "Learn from internationally recognized chiropractors and academic pioneers." },
  { icon: <FlaskConical size={22} />, title: "Research Focus", desc: "Strong emphasis on evidence-based practice and chiropractic research." },
  { icon: <Users size={22} />, title: "Diverse Student Body", desc: "Students from India and across Asia learning together in a collaborative environment." },
  { icon: <Building size={22} />, title: "State-of-the-Art Facilities", desc: "Modern clinical training facilities equipped with the latest chiropractic equipment." },
  { icon: <GraduationCap size={22} />, title: "Career Pathways", desc: "Clear career pathways into clinical practice, teaching, and research." },
];

const facultyMembers = [
  { name: "Prof. Dr. Jayul Doshi", role: "Founder & Chief Architect", specialty: "Far East Chiro Research (FECR)", initials: "JD" },
  { name: "Dr. Michel Tetrault", role: "Doctor of Chiropractic", specialty: "International Development", initials: "MT" },
  { name: "Prof. (Dr.) Tirthankar Ghosh", role: "Ergonomics Expert", specialty: "Clinical Biomechanics", initials: "TG" },
  { name: "Dr. Prof. Phillip Ebrall", role: "B.App.Sc. (Chiropractor)", specialty: "Academic Leadership", initials: "PE" },
];

const researchAreas = [
  { title: "Adolescent Idiopathic Scoliosis (AIS)", desc: "Research into early detection and non-surgical management of AIS prevalent in 2-4% of the global population." },
  { title: "Chiropractic BioPhysics (CBP) Research", desc: "Advancing the evidence base for CBP techniques in correcting spinal alignment and improving patient outcomes." },
  { title: "Spinal Health & Posture Epidemic", desc: "Studying the growing postural epidemic caused by today's information age and reliance on screened gadgets." },
  { title: "Pain Research – Non-Pharmacological", desc: "Developing drug-free, non-invasive approaches to pain management and rehabilitation." },
];

const studentResources = [
  { icon: <BookOpen size={20} />, title: "Library & Digital Resources", desc: "Access to global chiropractic journals, textbooks, and research databases." },
  { icon: <Users size={20} />, title: "Student Mentorship", desc: "One-on-one mentoring from experienced practicing chiropractors." },
  { icon: <FlaskConical size={20} />, title: "Clinical Internship", desc: "Supervised clinical practice in community health camps and wellness programs." },
  { icon: <Globe size={20} />, title: "International Exchange", desc: "Opportunities to train alongside faculty in Philippines, Dubai, and other Asian countries." },
];

export default function CollegePage() {
  return (
    <div className="pt-24 md:pt-36">
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center gradient-hero pattern-overlay overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#1F5E3A]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#D4AF37]/8 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1F5E3A]/8 rounded-full mb-6">
                <GraduationCap size={14} className="text-[#1F5E3A]" />
                <span className="font-manrope text-xs text-[#1F5E3A] font-semibold uppercase tracking-widest">
                  Premium Academic Institution
                </span>
              </div>
              <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#0E2D1F] leading-tight mb-6">
                Chiropractic India{" "}
                <em className="text-[#1F5E3A] not-italic">College</em>
              </h1>
              <p className="font-manrope text-lg text-[#444] leading-relaxed mb-8 max-w-xl">
                Establishing University-based Chiropractic Educational programs that meet international standards — the first of its kind across India and South Asia.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#admissions" className="btn-primary">Explore Admissions <ArrowRight size={16} /></a>
                <a href="#programs" className="btn-secondary">View Programs</a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ value: "10", label: "Universities Planned", sub: "Across India" }, { value: "DC", label: "Degree Offered", sub: "Doctor of Chiropractic" }, { value: "Int'l", label: "Standards", sub: "WFC Compliant" }, { value: "2022", label: "Founded", sub: "Bengaluru, India" }].map((stat) => (
                <div key={stat.label} className="glass-card float-shadow rounded-2xl p-5 text-center hover-lift">
                  <div className="font-playfair text-2xl font-bold text-[#D4AF37] mb-1">{stat.value}</div>
                  <p className="font-manrope text-xs font-semibold text-[#0E2D1F] mb-0.5">{stat.label}</p>
                  <p className="font-manrope text-xs text-[#999]">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT THE COLLEGE */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">About Us</p>
              <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] mb-6 gold-underline">About the College</h2>
              <div className="space-y-4 mt-4">
                <p className="font-manrope text-base text-[#444] leading-relaxed">
                  The Chiropractic India College initiative is the academic arm of Chiropractic India, established to create university-based chiropractic educational programs that meet the standards of the World Federation of Chiropractic (WFC).
                </p>
                <p className="font-manrope text-base text-[#444] leading-relaxed">
                  Our principal focus is to increase the formation of new chiropractic colleges across India — with a goal of establishing 10 universities. We are working in partnership with the Chiropractic Diplomatic Corps (CDC), an international authority on chiropractic development, practice standards, accreditation, and legislation.
                </p>
                <p className="font-manrope text-base text-[#444] leading-relaxed">
                  The Asian Institute of Scoliosis LLP and CBP is a significant achievement integrated into our academic framework, focused on teaching CBP programs to chiropractors, physiotherapists, and osteopathic doctors.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="glass-card float-shadow-lg rounded-2xl p-6 border border-[#D4AF37]/20">
                <h3 className="font-playfair text-lg font-bold text-[#0E2D1F] mb-3">Academic Vision</h3>
                <p className="font-manrope text-sm text-[#555] leading-relaxed">
                  Chiropractic India is distinguished for advancing the development of the Chiropractic profession, education and standards in India.
                </p>
              </div>
              <div className="glass-card float-shadow rounded-2xl p-6">
                <h3 className="font-playfair text-lg font-bold text-[#0E2D1F] mb-3">Academic Mission</h3>
                <p className="font-manrope text-sm text-[#555] leading-relaxed">
                  To establish University-based Chiropractic Educational programs that meet international standards and produce competent, ethical graduates.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[{ label: "India Association of Chiropractic Doctors", href: "http://www.indiachiropractic.org/" }, { label: "World Federation of Chiropractic", href: "https://www.wfc.org/website/" }].map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="glass-card float-shadow rounded-xl p-4 hover-lift text-center group">
                    <Globe size={18} className="text-[#1F5E3A] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="font-manrope text-xs text-[#555] leading-tight">{link.label}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="section-padding bg-[#FAF9F4] pattern-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Academic Offerings</p>
            <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] gold-underline-center">Programs & Courses</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((prog) => (
              <div key={prog.title} className="glass-card float-shadow rounded-2xl p-8 hover-lift group">
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1F5E3A]/8 text-[#1F5E3A] flex items-center justify-center group-hover:bg-[#1F5E3A] group-hover:text-white transition-all duration-300">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-[#0E2D1F] mb-1">{prog.title}</h3>
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 bg-[#1F5E3A]/8 rounded-full font-manrope text-xs text-[#1F5E3A]">{prog.level}</span>
                      <span className="px-2 py-0.5 bg-[#D4AF37]/10 rounded-full font-manrope text-xs text-[#B8941F]">{prog.duration}</span>
                    </div>
                  </div>
                </div>
                <p className="font-manrope text-sm text-[#555] leading-relaxed mb-5">{prog.desc}</p>
                <div>
                  <p className="font-manrope text-xs font-semibold text-[#999] uppercase tracking-wider mb-3">Key Modules</p>
                  <div className="grid grid-cols-2 gap-2">
                    {prog.modules.map((m) => (
                      <div key={m} className="flex items-center gap-2">
                        <CheckCircle size={12} className="text-[#1F5E3A] flex-shrink-0" />
                        <span className="font-manrope text-xs text-[#555]">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACULTY */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Our Experts</p>
            <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] gold-underline-center">Faculty & Leadership</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyMembers.map((f) => (
              <div key={f.name} className="glass-card float-shadow rounded-2xl p-6 text-center hover-lift group">
                <div className="w-20 h-20 rounded-full gradient-green mx-auto mb-4 flex items-center justify-center">
                  <span className="font-playfair text-xl font-bold text-white">{f.initials}</span>
                </div>
                <h3 className="font-playfair text-lg font-bold text-[#0E2D1F] mb-1">{f.name}</h3>
                <p className="font-manrope text-sm text-[#1F5E3A] font-medium mb-1">{f.role}</p>
                <p className="font-manrope text-xs text-[#999]">{f.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding bg-[#FAF9F4] pattern-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Our Advantages</p>
            <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] gold-underline-center">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((w) => (
              <div key={w.title} className="glass-card float-shadow rounded-2xl p-6 hover-lift group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1F5E3A]/8 text-[#1F5E3A] mb-4 group-hover:bg-[#1F5E3A] group-hover:text-white transition-all duration-300">{w.icon}</div>
                <h3 className="font-playfair text-lg font-bold text-[#0E2D1F] mb-2">{w.title}</h3>
                <p className="font-manrope text-sm text-[#666] leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Academic Research</p>
            <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] gold-underline-center">Research & Innovation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchAreas.map((r, i) => (
              <div key={r.title} className="glass-card float-shadow rounded-2xl p-7 hover-lift flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-green text-white flex items-center justify-center font-manrope font-bold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-bold text-[#0E2D1F] mb-2">{r.title}</h3>
                  <p className="font-manrope text-sm text-[#666] leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT RESOURCES */}
      <section className="section-padding bg-[#FAF9F4] pattern-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Student Support</p>
            <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] gold-underline-center">Student Resources</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {studentResources.map((r) => (
              <div key={r.title} className="glass-card float-shadow rounded-2xl p-6 text-center hover-lift group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1F5E3A]/8 text-[#1F5E3A] mb-4 mx-auto group-hover:bg-[#1F5E3A] group-hover:text-white transition-all duration-300">{r.icon}</div>
                <h3 className="font-playfair text-base font-bold text-[#0E2D1F] mb-2">{r.title}</h3>
                <p className="font-manrope text-xs text-[#666] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSIONS CTA */}
      <section id="admissions" className="py-20 gradient-green relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Admissions</p>
            <h2 className="font-playfair text-4xl font-bold text-white mb-4">Begin Your Journey in Chiropractic Education</h2>
            <p className="font-manrope text-base text-white/80 max-w-lg mx-auto">
              Express your interest in our upcoming programs. Our admissions team will contact you with all the details you need.
            </p>
          </div>
          <div className="glass-card float-shadow-lg rounded-3xl p-8">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-manrope text-xs text-[#666] font-medium block mb-1.5">Full Name *</label>
                  <input type="text" id="admissions-name" className="w-full px-4 py-3 rounded-xl border border-[#E5E5E0] bg-white font-manrope text-sm text-[#333] focus:outline-none focus:border-[#1F5E3A] transition-colors" placeholder="Your full name" />
                </div>
                <div>
                  <label className="font-manrope text-xs text-[#666] font-medium block mb-1.5">Email Address *</label>
                  <input type="email" id="admissions-email" className="w-full px-4 py-3 rounded-xl border border-[#E5E5E0] bg-white font-manrope text-sm text-[#333] focus:outline-none focus:border-[#1F5E3A] transition-colors" placeholder="your@email.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-manrope text-xs text-[#666] font-medium block mb-1.5">Phone Number</label>
                  <input type="tel" id="admissions-phone" className="w-full px-4 py-3 rounded-xl border border-[#E5E5E0] bg-white font-manrope text-sm text-[#333] focus:outline-none focus:border-[#1F5E3A] transition-colors" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="font-manrope text-xs text-[#666] font-medium block mb-1.5">Program Interest *</label>
                  <select id="admissions-program" className="w-full px-4 py-3 rounded-xl border border-[#E5E5E0] bg-white font-manrope text-sm text-[#333] focus:outline-none focus:border-[#1F5E3A] transition-colors">
                    <option>Doctor of Chiropractic (DC)</option>
                    <option>Chiropractic BioPhysics (CBP)</option>
                    <option>Scoliosis & Spine Management</option>
                    <option>Continuing Education</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="font-manrope text-xs text-[#666] font-medium block mb-1.5">Additional Message</label>
                <textarea id="admissions-message" rows={3} className="w-full px-4 py-3 rounded-xl border border-[#E5E5E0] bg-white font-manrope text-sm text-[#333] focus:outline-none focus:border-[#1F5E3A] transition-colors resize-none" placeholder="Tell us about your background or any questions you have..." />
              </div>
              <button type="submit" id="admissions-submit" className="btn-gold w-full justify-center">
                Submit Inquiry <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
