import Link from "next/link";
import { ArrowRight, MapPin, Globe, Briefcase, CheckCircle, Send } from "lucide-react";

const positions = [
  {
    title: "Chiropractic Faculty – India",
    location: "Bangalore, India",
    type: "Full-Time / Part-Time",
    desc: "Join as a pioneer faculty member for chiropractic education in India. We are developing university-based programs that meet international standards.",
    requirements: ["Doctor of Chiropractic (DC) degree", "CBP certification preferred", "Teaching or clinical experience", "Passion for international chiropractic development"],
  },
  {
    title: "Chiropractic Faculty – Philippines",
    location: "Philippines",
    type: "Full-Time",
    desc: "Be part of our Philippine university partnership program. Educate and mentor the next generation of chiropractors in Southeast Asia.",
    requirements: ["Doctor of Chiropractic (DC) degree", "International teaching experience preferred", "CBP knowledge an asset", "Willingness to relocate"],
  },
  {
    title: "Chiropractic Faculty – Dubai (UAE)",
    location: "Dubai, UAE",
    type: "Full-Time",
    desc: "Exciting opportunities in the rapidly growing Middle East chiropractic market. Teach and shape the future of chiropractic in the region.",
    requirements: ["Doctor of Chiropractic (DC) degree", "Clinical practice experience (5+ years)", "Interest in CBP techniques", "Valid work authorization or ability to obtain"],
  },
  {
    title: "CBP Faculty Pioneer",
    location: "Asia & Middle East",
    type: "Pioneer Role",
    desc: "As a Chiropractic BioPhysics (CBP) faculty pioneer, unlike a stagnant environment in America or Canada, there is a wealth of opportunities to grow your knowledge base and teach as a pioneer.",
    requirements: ["CBP certification required", "Willingness to pioneer new programs", "Excellent teaching skills", "Adaptability to diverse cultural environments"],
  },
  {
    title: "Mission Volunteer – India",
    location: "Various, India",
    type: "3-Month Mission",
    desc: "10 Veteran field doctors needed to provide basic Chiropractic care and scoliosis screening in various areas of India. All accommodations and food will be provided.",
    requirements: ["Qualified Chiropractor", "3-month availability", "Community care orientation", "Passion for underserved populations"],
  },
];

const whyJoin = [
  { icon: <Globe size={22} />, title: "Pioneer Opportunity", desc: "Be at the forefront of chiropractic development in Asia and the Middle East." },
  { icon: <Briefcase size={22} />, title: "Career Growth", desc: "Grow your knowledge base unlike stagnant environments in Western countries." },
  { icon: <CheckCircle size={22} />, title: "Meaningful Impact", desc: "Bring chiropractic care and wellness to new cultures as a faculty pioneer." },
  { icon: <MapPin size={22} />, title: "Multiple Locations", desc: "Opportunities in India, Philippines, and Dubai (UAE)." },
];

export default function FacultyPage() {
  return (
    <div className="pt-24 md:pt-36">
      {/* HERO */}
      <section className="relative py-20 gradient-hero pattern-overlay overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#1F5E3A]/5 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Career Opportunities</p>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#0E2D1F] leading-tight mb-6 gold-underline">
              Faculty Positions
            </h1>
            <p className="font-manrope text-lg text-[#444] leading-relaxed mt-6">
              CHIROPRACTIC & CBP FACULTY POSITIONS IN ASIA & MIDDLE EAST — Join the adventure, the challenge, and the opportunity of a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass-card float-shadow-lg rounded-3xl p-10 border border-[#1F5E3A]/10">
            <h2 className="font-playfair text-3xl font-bold text-[#0E2D1F] mb-6">About These Positions</h2>
            <div className="space-y-5">
              <p className="font-manrope text-base text-[#444] leading-relaxed">
                As a chiropractic & CBP faculty pioneer, unlike a stagnant environment in America or Canada, there is a wealth of opportunities to grow your knowledge base and teach as a pioneer. Chiropractic is still in the development stages in most eastern countries and you will be at the forefront of it all.
              </p>
              <p className="font-manrope text-base text-[#444] leading-relaxed">
                Chiropractic is booming in Asia, Far East and the Middle East. While chiropractic practice has been existing for a while, it is relatively young and still developing in Asia. While there is significant room for development, it will also be a challenging endeavour. But the rewards will surely be gratifying.
              </p>
              <p className="font-manrope text-base text-[#444] leading-relaxed">
                We are focused on opportunities for you to be a faculty of Chiropractic in India, Philippines & Dubai (UAE). Not just with the opportunity to earn but also to bring chiropractic care and wellness to a new culture as a faculty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="py-16 bg-[#FAF9F4] pattern-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Benefits</p>
            <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] gold-underline-center">Why Join as Faculty?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyJoin.map((w) => (
              <div key={w.title} className="glass-card float-shadow rounded-2xl p-6 text-center hover-lift">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1F5E3A]/8 text-[#1F5E3A] mb-4 mx-auto">{w.icon}</div>
                <h3 className="font-playfair text-base font-bold text-[#0E2D1F] mb-2">{w.title}</h3>
                <p className="font-manrope text-xs text-[#666] leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POSITIONS LIST */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Open Roles</p>
            <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] gold-underline-center">Available Positions</h2>
          </div>
          <div className="space-y-6">
            {positions.map((pos) => (
              <div key={pos.title} className="glass-card float-shadow rounded-2xl p-8 hover-lift border border-transparent hover:border-[#1F5E3A]/20 transition-all">
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-5">
                  <div className="flex-1">
                    <h3 className="font-playfair text-xl font-bold text-[#0E2D1F] mb-2">{pos.title}</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1F5E3A]/8 rounded-full font-manrope text-xs text-[#1F5E3A] font-medium">
                        <MapPin size={11} /> {pos.location}
                      </span>
                      <span className="px-3 py-1 bg-[#D4AF37]/10 rounded-full font-manrope text-xs text-[#B8941F] font-medium">{pos.type}</span>
                    </div>
                  </div>
                </div>
                <p className="font-manrope text-sm text-[#555] leading-relaxed mb-5">{pos.desc}</p>
                <div>
                  <p className="font-manrope text-xs font-semibold text-[#999] uppercase tracking-wider mb-3">Requirements</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {pos.requirements.map((req) => (
                      <div key={req} className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-[#1F5E3A] flex-shrink-0 mt-0.5" />
                        <span className="font-manrope text-xs text-[#555]">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM CTA */}
      <section className="py-20 bg-[#FAF9F4]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="glass-card float-shadow-lg rounded-3xl p-10 border border-[#D4AF37]/20 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1F5E3A]/8 text-[#1F5E3A] mb-5">
              <Send size={28} />
            </div>
            <h2 className="font-playfair text-3xl font-bold text-[#0E2D1F] mb-4">Register Your Interest</h2>
            <p className="font-manrope text-sm text-[#666] leading-relaxed mb-8">
              Kindly fill up the form and submit it to pursue the application. Our team will review your profile and get in touch with next steps.
            </p>
            {/* Simple contact form */}
            <form className="space-y-4 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-manrope text-xs text-[#666] font-medium block mb-1.5">Full Name *</label>
                  <input type="text" id="faculty-name" className="w-full px-4 py-3 rounded-xl border border-[#E5E5E0] bg-white font-manrope text-sm text-[#333] focus:outline-none focus:border-[#1F5E3A] transition-colors" placeholder="Dr. John Smith" />
                </div>
                <div>
                  <label className="font-manrope text-xs text-[#666] font-medium block mb-1.5">Email Address *</label>
                  <input type="email" id="faculty-email" className="w-full px-4 py-3 rounded-xl border border-[#E5E5E0] bg-white font-manrope text-sm text-[#333] focus:outline-none focus:border-[#1F5E3A] transition-colors" placeholder="doctor@example.com" />
                </div>
              </div>
              <div>
                <label className="font-manrope text-xs text-[#666] font-medium block mb-1.5">Position of Interest *</label>
                <select id="faculty-position" className="w-full px-4 py-3 rounded-xl border border-[#E5E5E0] bg-white font-manrope text-sm text-[#333] focus:outline-none focus:border-[#1F5E3A] transition-colors">
                  <option>Select a position...</option>
                  <option>Faculty – India</option>
                  <option>Faculty – Philippines</option>
                  <option>Faculty – Dubai (UAE)</option>
                  <option>CBP Faculty Pioneer</option>
                  <option>Mission Volunteer</option>
                </select>
              </div>
              <div>
                <label className="font-manrope text-xs text-[#666] font-medium block mb-1.5">Message / Qualifications</label>
                <textarea id="faculty-message" rows={4} className="w-full px-4 py-3 rounded-xl border border-[#E5E5E0] bg-white font-manrope text-sm text-[#333] focus:outline-none focus:border-[#1F5E3A] transition-colors resize-none" placeholder="Briefly describe your qualifications and interest..." />
              </div>
              <button type="submit" id="faculty-submit" className="btn-primary w-full justify-center">
                Submit Application <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-green">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold text-white mb-4">Have Questions?</h2>
          <p className="font-manrope text-base text-white/80 mb-6">Reach out to our team directly and we will guide you through the next steps.</p>
          <Link href="/contact" className="btn-gold">Contact Us <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}
