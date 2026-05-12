import Link from "next/link";
import { ArrowRight, CheckCircle, BookOpen, Globe, Award, Users } from "lucide-react";

const objectives = [
  "Standards for Chiropractic In India",
  "Chiropractic Research In India",
  "Chiropractic Education",
  "Establishing 10 Universities in India",
  "Continuing Education for Chiropractors in India",
  "Legitimising a Chiropractic Council",
];

const team = [
  { name: "Prof. Dr. Jayul Doshi", role: "Founder & Chief Architect", org: "Far East Chiro Research (FECR)" },
  { name: "Dr. Michel Tetrault", role: "Doctor of Chiropractic", org: "Co-Founder" },
  { name: "Prof. (Dr.) Tirthankar Ghosh", role: "Ergonomics Expert", org: "Advisory Board" },
  { name: "Dr. Prof. Phillip Ebrall", role: "B.App.Sc. (Chiropractor)", org: "International Faculty" },
  { name: "Vinutha M. R", role: "Core Team Member", org: "Operations" },
  { name: "Ms Bia Sandhu", role: "Core Team Member", org: "Administration" },
];

const timeline = [
  { year: "2004", title: "The Pioneer Beginning", desc: "Dr. Michel Tetrault and Dr. Gary Auerbach invited to Bangalore by Dr. Vasu Pandurangi under a WHO grant to support the Bangalore Healthy City initiative." },
  { year: "2004–2020", title: "Foundational Discussions", desc: "Discussions between CDC and CAMHADD began. Application for the federal government's approval for the Doctor of Chiropractic course was submitted." },
  { year: "2022", title: "Chiropractic India Founded", desc: "Chiropractic India started in response to the tragic decrease in genuine chiropractors in India as a result of the global pandemic." },
  { year: "Present", title: "Setting Standards", desc: "Chiropractic India adopted CDC's vision to assure India's availability and equal access to chiropractic services, focused on forming new colleges." },
];

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-36">
      {/* PAGE HERO */}
      <section className="relative py-20 gradient-hero pattern-overlay overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#1F5E3A]/5 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Who We Are</p>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#0E2D1F] leading-tight mb-6 gold-underline">
              About Chiropractic India
            </h1>
            <p className="font-manrope text-lg text-[#444] leading-relaxed mt-6">
              The national voice for chiropractic awareness, education, and advocacy — setting standards for chiropractic in India since 2022.
            </p>
          </div>
        </div>
      </section>

      {/* ORGANIZATION OVERVIEW */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Our Story</p>
              <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] mb-6 gold-underline">Chiropractic India</h2>
              <div className="space-y-5 mt-6">
                <p className="font-manrope text-base text-[#444] leading-relaxed">
                  Chiropractic India started in 2022 in response to the tragic decrease in GENUINE CHIROPRACTORS in India as a result of the global pandemic.
                </p>
                <p className="font-manrope text-base text-[#444] leading-relaxed">
                  This pioneer revolution originally started in 2004 when Dr. Michel Tetrault and Dr. Gary Auerbach, founding president of the World Federation of Chiropractic, were invited to Bangalore by Dr. Vasu Pandurangi, a UK Star of India recipient, to support his Bangalore Healthy City initiative, under a WHO grant.
                </p>
                <p className="font-manrope text-base text-[#444] leading-relaxed">
                  Chiropractic Diplomatic Corps has become an authority on the International development of Chiropractic. This involves setting standards of practice and education, accreditation, and legislation. Chiropractic India has adopted and shares this vision for our nation to assure India&apos;s availability and equal access to chiropractic services.
                </p>
              </div>
            </div>
            {/* Decorative card */}
            <div className="space-y-4">
              <div className="glass-card float-shadow-lg rounded-3xl p-8 border border-[#D4AF37]/20">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1F5E3A]/8 text-[#1F5E3A] mb-4">
                  <Globe size={28} />
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#0E2D1F] mb-3">Our Vision</h3>
                <p className="font-manrope text-sm text-[#666] leading-relaxed">
                  Chiropractic India is distinguished for advancing the development of the Chiropractic profession, education and standards in India.
                </p>
              </div>
              <div className="glass-card float-shadow-lg rounded-3xl p-8 border border-[#1F5E3A]/10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] mb-4">
                  <Award size={28} />
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#0E2D1F] mb-3">Our Mission</h3>
                <p className="font-manrope text-sm text-[#666] leading-relaxed">
                  The Mission of Chiropractic India is to establish University-based Chiropractic Educational programs that meet international standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="section-padding bg-[#FAF9F4] pattern-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">What We Aim For</p>
            <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] gold-underline-center">Our Objectives</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {objectives.map((obj, i) => (
              <div key={obj} className="glass-card float-shadow rounded-2xl p-6 flex items-start gap-4 hover-lift">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5E3A] text-white flex items-center justify-center font-manrope text-xs font-bold">
                  {i + 1}
                </div>
                <p className="font-manrope text-sm text-[#333] leading-relaxed font-medium">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Our Journey</p>
            <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] gold-underline-center">A Timeline of Progress</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1F5E3A] to-[#D4AF37]" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div key={item.year} className="relative pl-20">
                  <div className="absolute left-4 top-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#1F5E3A] to-[#0E2D1F] border-2 border-white shadow-md flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  </div>
                  <div className="glass-card float-shadow rounded-2xl p-6 hover-lift">
                    <span className="inline-block px-3 py-1 bg-[#1F5E3A]/8 rounded-full font-manrope text-xs text-[#1F5E3A] font-semibold mb-2">{item.year}</span>
                    <h3 className="font-playfair text-lg font-bold text-[#0E2D1F] mb-2">{item.title}</h3>
                    <p className="font-manrope text-sm text-[#666] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="section-padding bg-[#FAF9F4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Our People</p>
            <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] gold-underline-center">Leadership & Faculty</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="glass-card float-shadow rounded-2xl p-6 text-center hover-lift group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1F5E3A] to-[#0E2D1F] mx-auto mb-4 flex items-center justify-center">
                  <span className="font-playfair text-xl font-bold text-white">
                    {member.name.split(" ").slice(-1)[0][0]}
                  </span>
                </div>
                <h3 className="font-playfair text-lg font-bold text-[#0E2D1F] mb-1">{member.name}</h3>
                <p className="font-manrope text-sm text-[#1F5E3A] font-medium mb-1">{member.role}</p>
                <p className="font-manrope text-xs text-[#999]">{member.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION NOTE */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-card float-shadow-lg rounded-3xl p-10 border border-[#D4AF37]/20">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#1F5E3A]/8 text-[#1F5E3A] flex items-center justify-center">
                <BookOpen size={28} />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-[#0E2D1F] mb-4">Chiropractic Education in India and Philippines</h3>
                <div className="space-y-3">
                  {[
                    "The faculty shortage in the existing 46 Chiropractic institutions of education could not resolve the faculty manpower needed for India.",
                    "The cost of paying foreign faculty in an Indian university is untenable.",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[#1F5E3A] flex-shrink-0 mt-0.5" />
                      <p className="font-manrope text-sm text-[#555] leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-green">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Join the Movement</p>
          <h2 className="font-playfair text-4xl font-bold text-white mb-6">Be Part of India&apos;s Chiropractic Revolution</h2>
          <p className="font-manrope text-base text-white/80 mb-8 max-w-lg mx-auto">
            Support our mission to establish chiropractic education and bring genuine care to every Indian.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/fundraising" className="btn-gold">Support Us <ArrowRight size={16} /></Link>
            <Link href="/contact" className="border border-white/30 text-white px-8 py-3 rounded-full font-manrope font-semibold text-sm hover:bg-white/10 transition-all flex items-center gap-2">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
