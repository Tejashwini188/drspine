import Link from "next/link";
import { ArrowRight, Heart, Users, BookOpen, Shield, Globe, CheckCircle, Building } from "lucide-react";

const bankDetails = {
  company: "Chiropractic India",
  account: "101 6940 0060",
  bank: "IDFC First",
  branch: "Bangalore Residency Road",
  ifsc: "IDFB 0080 151",
};

const donationTypes = [
  {
    icon: <Heart size={28} />,
    title: "Financial Donations",
    desc: "Money is the most fluid help you can give to promote chiropractic education and standards in India.",
  },
  {
    icon: <Building size={28} />,
    title: "In-Kind Support",
    desc: "Provide technical support and specialized equipment. Others can donate items like cars, office furniture, educational aids, laptops, computers, projectors, etc.",
  },
  {
    icon: <Globe size={28} />,
    title: "Corporate Donations",
    desc: "Corporate donations sought in cash or in-kind towards use of the college, such as land parcels, and bulk purchases of educational aids, I-pads, printers, or other IT software and hardware.",
  },
];

const focusAreas = [
  "Education to train Doctors of Chiropractic in India",
  "Scoliosis Awareness",
  "Posture Epidemic",
  "Student Backpack Safety",
  "Natural Immunity",
  "Pain Research – Non-Pharmacological, Non-Drug",
  "Support for Autism and Cerebral Palsy",
  "Sports Injury Prevention",
];

const communityActivities = [
  {
    num: "1",
    title: "Health Camps",
    desc: "Chiropractors can participate in health camps organized by Chiropractic India. Healthcare professionals will provide free spinal check-ups, spinal health education, and basic treatments to underprivileged communities in rural and urban areas.",
  },
  {
    num: "2",
    title: "Rehabilitation Centres",
    desc: "Chiropractors will offer their services to rehabilitation centers that provide care and support for individuals with disabilities, including those with musculoskeletal issues.",
  },
  {
    num: "3",
    title: "Health Education Programs",
    desc: "Chiropractors will collaborate with schools, colleges, and other educational institutions to conduct health education programs on topics related to the musculoskeletal system and how to prevent and manage injuries.",
  },
];

export default function FundraisingPage() {
  return (
    <div className="pt-24 md:pt-36">
      {/* HERO */}
      <section className="relative py-20 gradient-hero pattern-overlay overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D4AF37]/8 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Support Our Cause</p>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#0E2D1F] leading-tight mb-4 gold-underline">
              Fund Raising
            </h1>
            <p className="font-manrope text-base text-[#555] mt-6 mb-2">
              <span className="font-semibold text-[#1F5E3A]">Registration Number:</span> IV 301/22-23
            </p>
            <p className="font-manrope text-lg text-[#444] leading-relaxed">
              Chiropractic India is tasked to establish chiropractic education in India. Decades of foreign graduates coming to India to bring their chiropractic services have paved the way — now we need your support to build what comes next.
            </p>
          </div>
        </div>
      </section>

      {/* DONATION TYPES */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Ways to Give</p>
            <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] gold-underline-center">How You Can Support</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {donationTypes.map((d) => (
              <div key={d.title} className="glass-card float-shadow rounded-2xl p-8 hover-lift group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] mb-5 group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-300">
                  {d.icon}
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#0E2D1F] mb-3">{d.title}</h3>
                <p className="font-manrope text-sm text-[#666] leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANKING DETAILS */}
      <section className="py-20 bg-[#FAF9F4]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Direct Transfer</p>
            <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] gold-underline-center">Banking Details</h2>
          </div>
          <div className="glass-card float-shadow-lg rounded-3xl overflow-hidden border border-[#D4AF37]/20">
            <div className="gradient-green p-6 text-center">
              <p className="font-playfair text-xl font-bold text-white">{bankDetails.company}</p>
              <p className="font-manrope text-sm text-white/70 mt-1">Secure Bank Transfer</p>
            </div>
            <div className="p-8">
              <div className="space-y-4">
                {[
                  { label: "Account Number", value: bankDetails.account },
                  { label: "Bank Name", value: bankDetails.bank },
                  { label: "Branch", value: bankDetails.branch },
                  { label: "IFSC Code", value: bankDetails.ifsc },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center py-3 border-b border-[#F5F5F2] last:border-0">
                    <span className="font-manrope text-sm text-[#999]">{row.label}</span>
                    <span className="font-manrope text-sm font-semibold text-[#0E2D1F]">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Mission Focus</p>
              <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] mb-6 gold-underline">The Focus of Our Mission Projects</h2>
              <div className="space-y-3 mt-4">
                {focusAreas.map((area) => (
                  <div key={area} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#1F5E3A] flex-shrink-0 mt-0.5" />
                    <p className="font-manrope text-sm text-[#444] leading-relaxed">{area}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              <div className="glass-card float-shadow rounded-2xl p-6">
                <h3 className="font-playfair text-lg font-bold text-[#0E2D1F] mb-3">Community Service</h3>
                <p className="font-manrope text-sm text-[#666] leading-relaxed">
                  Laypersons can be quickly instructed to perform Posture Screenings of children in local schools and adults in various community events, to counter the growing postural epidemic caused by today&apos;s information age and reliance on screened gadgets.
                </p>
                <div className="mt-4 p-4 bg-[#1F5E3A]/5 rounded-xl">
                  <p className="font-manrope text-sm text-[#1F5E3A] font-semibold">
                    We are already supported by our online communities of over 18,000 followers and by 48,500 patients who have already benefitted from chiropractic care.
                  </p>
                </div>
              </div>
              <div className="glass-card float-shadow rounded-2xl p-6">
                <h3 className="font-playfair text-lg font-bold text-[#0E2D1F] mb-2">Mission Volunteer Program</h3>
                <p className="font-manrope text-sm text-[#666] leading-relaxed">
                  Chiropractic India invites applications from chiropractors willing to do a 3 month mission project in India. 10 Veteran field doctors to provide basic Chiropractic care and scoliosis screening in various areas of India.
                </p>
                <p className="font-manrope text-xs text-[#999] mt-3 italic">All accommodations and food will be provided for mission work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY ACTIVITIES */}
      <section className="section-padding bg-[#FAF9F4] pattern-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">In the Field</p>
            <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] gold-underline-center">Community Service Activities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communityActivities.map((a) => (
              <div key={a.title} className="glass-card float-shadow rounded-2xl p-7 hover-lift">
                <div className="w-10 h-10 rounded-full gradient-green text-white flex items-center justify-center font-manrope font-bold text-base mb-4">
                  {a.num}
                </div>
                <h3 className="font-playfair text-lg font-bold text-[#0E2D1F] mb-3">{a.title}</h3>
                <p className="font-manrope text-sm text-[#666] leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHIROPRACTIC & SCOLIOSIS INFO */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <div className="glass-card float-shadow rounded-2xl p-8">
            <h3 className="font-playfair text-2xl font-bold text-[#0E2D1F] mb-4">Chiropractic: Spinal Screening</h3>
            <p className="font-manrope text-sm text-[#555] leading-relaxed">
              Spinal screening can act as a first step towards identifying the underlying cause of back pain, as well as giving your chiropractor an indication as to the overall health and condition of your spine and musculoskeletal system. Proper spine alignment allows for optimal functioning of the central nervous system. Chiropractic reduces pain and improves range of motion of your spine and other joints, reduces symptoms of chronic conditions like osteoarthritis, and treats minor neck or spine injuries, especially whiplash and many related conditions.
            </p>
          </div>
          <div className="glass-card float-shadow rounded-2xl p-8">
            <h3 className="font-playfair text-2xl font-bold text-[#0E2D1F] mb-4">Scoliosis Awareness</h3>
            <p className="font-manrope text-sm text-[#555] leading-relaxed mb-4">
              Adolescent idiopathic scoliosis (AIS) is a common spinal disorder that develops between 10 to 16 years of age and is characterized by a lateral curvature of spine with Cobb angle of more than 10°. About 2-3% adolescent population have scoliosis with a Cobb angle of greater than 10°.
            </p>
            <p className="font-manrope text-sm text-[#555] leading-relaxed">
              The establishment of the Asian Institute of Scoliosis LLP and CBP is a significant achievement that will benefit the chiropractic community in India. Early detection of AIS helps in preventing further progression of scoliosis.
            </p>
          </div>
        </div>
      </section>

      {/* DONATE CTA */}
      <section className="py-20 gradient-green">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Take Action Today</p>
          <h2 className="font-playfair text-4xl font-bold text-white mb-6">Register Your Support</h2>
          <p className="font-manrope text-base text-white/80 mb-8 max-w-lg mx-auto">
            Corporates, Institutions who would like to schedule a meeting and know more about how Chiropractic and Scoliosis screening can be beneficial to your team can reach out today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-gold">Register Here <ArrowRight size={16} /></Link>
            <Link href="/contact" className="border border-white/30 text-white px-8 py-3 rounded-full font-manrope font-semibold text-sm hover:bg-white/10 transition-all">
              Schedule a Meeting
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
