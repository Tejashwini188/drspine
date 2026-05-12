import Link from "next/link";
import { ArrowRight, ExternalLink, BookOpen, Activity, Brain, Heart, Shield } from "lucide-react";

const conditions = [
  { name: "Abdominal Conditions Complaints", href: "https://chiropracticindia.com/abdominal-conditions/" },
  { name: "Arthritis – Osteoarthritis", href: "https://chiropracticindia.com/arthritis-osteoarthritis-psoriatic-arthritis-rheumatoid-arthritis/" },
  { name: "Disc Rehydration – Spine Care", href: "https://chiropracticindia.com/disc-rehydration-spine-care/" },
  { name: "Headaches, Pain Generated From Neck – Cervicogenic", href: "https://chiropracticindia.com/headaches-pain-generated-from-neck-cervicogenic/" },
  { name: "Lower Back Pain / Lumbar Pain Without Leg Pain", href: "https://chiropracticindia.com/lower-back-pain-lumbar-pain-without-leg-pain/" },
  { name: "Osteoarthritis", href: "https://chiropracticindia.com/osteoarthritis/" },
  { name: "Physiotherapy", href: "https://chiropracticindia.com/physiotherapy/" },
  { name: "Sciatica – Non-Invasive & Non-Surgical Treatment", href: "https://chiropracticindia.com/sciatica-non-invasive-non-surgical-treatment/" },
  { name: "Scoliosis Perspective", href: "https://chiropracticindia.com/scoliosis-perspective/" },
  { name: "Shoulder Pain – Rotator Cuff Syndrome", href: "https://chiropracticindia.com/shoulder-pain-rotator-cuff-syndrome/" },
  { name: "Functional Lower Back Pain Versus Structural Lower Back Pain", href: "https://chiropracticindia.com/functional-lower-back-pain-versus-structural-lower-back-pain/" },
];

const globalLinks = [
  { name: "India Association of Chiropractic Doctors", href: "http://www.indiachiropractic.org/" },
  { name: "Association of Chiropractic Colleges", href: "https://www.chirocolleges.org/" },
  { name: "Chiropractic Educational Institutions (WFC)", href: "https://www.wfc.org/website/" },
  { name: "Federation of Chiropractic Licensing Boards", href: "https://fclb.org/index.php" },
  { name: "World Federation of Chiropractic", href: "https://www.wfc.org/website/" },
  { name: "International Chiropractors Association", href: "https://www.chiropractic.org/" },
  { name: "Christian Chiropractors Association", href: "https://www.christianchiropractors.org/" },
];

const articles = [
  { title: "How chiropractors effectively manage tension-type headaches", category: "Chiropractic Education", date: "May 25, 2023", excerpt: "Trigger points are sensitive areas of tight muscle fibers that can cause pain in other parts of the body. Commonly found in the...", icon: <Brain size={24} /> },
  { title: "Do I need a Chiropractor or a Physical Therapist?", category: "Chiropractic Education", date: "May 25, 2023", excerpt: "Chiropractic Vs Physical Therapy. Lower back pain is a common problem people experience in their daily lives. When it comes to treatment...", icon: <Activity size={24} /> },
  { title: "Abdominal Conditions", category: "Chiropractic Condition", date: "March 5, 2023", excerpt: "The abdomen is the centre of all the other organs of the body. The abdomen condition is a discomfort in the belly that occurs right from the...", icon: <Heart size={24} /> },
  { title: "Chiropractor and the Orthopedic Surgeon", category: "Chiropractic Education", date: "March 5, 2023", excerpt: "In healthcare circles there are professions that do not always see eye to eye. Chiropractic has earned the trust of the public, the healthcare agencies...", icon: <Shield size={24} /> },
  { title: "Chiropractor and the Neurosurgeon", category: "Chiropractic Education", date: "March 5, 2023", excerpt: "When we think about chiropractic, one feature that does stand out is that this is a non-surgical profession; and this is a good thing! Many, far too many surgeries...", icon: <Brain size={24} /> },
  { title: "Chiropractor and the Dentist", category: "Chiropractic Education", date: "March 5, 2023", excerpt: "What would a Chiropractor and a Dentist have in common in patient care? There is one condition that both practitioners treat but using different methods...", icon: <BookOpen size={24} /> },
];

const dcMdComparison = [
  { aspect: "Education Duration", dc: "4 year post-graduate DC program", md: "4 year medical school + residency" },
  { aspect: "Primary Focus", dc: "Musculoskeletal & nervous system", md: "General medicine & pharmacology" },
  { aspect: "Treatment Approach", dc: "Manual therapy, drug-free", md: "Pharmaceutical, surgical" },
  { aspect: "Spinal Specialization", dc: "High specialization", md: "General knowledge" },
];

export default function InformationPage() {
  return (
    <div className="pt-24 md:pt-36">
      {/* HERO */}
      <section className="relative py-20 gradient-hero pattern-overlay overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#1F5E3A]/5 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Educational Resource Center</p>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#0E2D1F] leading-tight mb-6 gold-underline">
              Chiropractic Information
            </h1>
            <p className="font-manrope text-lg text-[#444] leading-relaxed mt-6">
              A comprehensive resource for understanding chiropractic care, conditions treated, global links, and the latest educational articles.
            </p>
          </div>
        </div>
      </section>

      {/* TABS NAVIGATION */}
      <div className="sticky top-[72px] z-30 bg-white border-b border-[#F5F5F2] shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 py-3 overflow-x-auto">
            {["Conditions Treated", "DC vs MD Comparison", "Global Resources", "Latest Articles"].map((tab) => (
              <a key={tab} href={`#${tab.toLowerCase().replace(/ /g, "-")}`} className="flex-shrink-0 px-5 py-2 rounded-full font-manrope text-sm text-[#666] hover:text-[#1F5E3A] hover:bg-[#1F5E3A]/8 transition-all whitespace-nowrap">
                {tab}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* VISION & MISSION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card float-shadow rounded-2xl p-8">
              <h2 className="font-playfair text-2xl font-bold text-[#0E2D1F] mb-4">Our Vision</h2>
              <p className="font-manrope text-sm text-[#555] leading-relaxed">
                Chiropractic India is distinguished for advancing the development of the Chiropractic profession, education and standards in India.
              </p>
            </div>
            <div className="glass-card float-shadow rounded-2xl p-8">
              <h2 className="font-playfair text-2xl font-bold text-[#0E2D1F] mb-4">Our Mission</h2>
              <p className="font-manrope text-sm text-[#555] leading-relaxed">
                The Mission of Chiropractic India is to establish University-based Chiropractic Educational programs that meet international standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS TREATED */}
      <section id="conditions-treated" className="section-padding bg-[#FAF9F4] pattern-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">What We Address</p>
            <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] gold-underline-center">Conditions Treated</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {conditions.map((c) => (
              <a key={c.name} href={c.href} target="_blank" rel="noopener noreferrer" className="glass-card float-shadow rounded-xl px-5 py-4 flex items-center gap-3 hover-lift group">
                <div className="w-2 h-2 rounded-full bg-[#1F5E3A] flex-shrink-0 group-hover:bg-[#D4AF37] transition-colors" />
                <span className="font-manrope text-sm text-[#333] group-hover:text-[#1F5E3A] transition-colors flex-1">{c.name}</span>
                <ExternalLink size={12} className="text-[#999] group-hover:text-[#1F5E3A] transition-colors flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DC vs MD */}
      <section id="dc-vs-md-comparison" className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Education Comparison</p>
            <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] gold-underline-center">DC / MD Education Comparison</h2>
          </div>
          <div className="glass-card float-shadow-lg rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-[#0E2D1F] text-white">
              <div className="p-4 font-manrope text-xs uppercase tracking-widest text-white/60">Aspect</div>
              <div className="p-4 font-manrope text-xs uppercase tracking-widest text-[#D4AF37] text-center">Doctor of Chiropractic (DC)</div>
              <div className="p-4 font-manrope text-xs uppercase tracking-widest text-white/60 text-center">Medical Doctor (MD)</div>
            </div>
            {dcMdComparison.map((row, i) => (
              <div key={row.aspect} className={`grid grid-cols-3 border-b border-[#F5F5F2] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#FAF9F4]"}`}>
                <div className="p-4 font-manrope text-xs font-semibold text-[#666]">{row.aspect}</div>
                <div className="p-4 font-manrope text-xs text-[#1F5E3A] text-center font-medium">{row.dc}</div>
                <div className="p-4 font-manrope text-xs text-[#666] text-center">{row.md}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL LINKS */}
      <section id="global-resources" className="section-padding bg-[#FAF9F4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">International Network</p>
            <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] gold-underline-center">Global Links</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {globalLinks.map((link) => (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="glass-card float-shadow rounded-xl px-6 py-4 flex items-center gap-3 hover-lift group">
                <div className="w-8 h-8 rounded-full bg-[#1F5E3A]/8 text-[#1F5E3A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1F5E3A] group-hover:text-white transition-all">
                  <ExternalLink size={14} />
                </div>
                <span className="font-manrope text-sm text-[#333] group-hover:text-[#1F5E3A] transition-colors flex-1 font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section id="latest-articles" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Latest Resources on Chiropractic</p>
            <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] gold-underline-center">Educational Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <article key={a.title} className="glass-card float-shadow rounded-2xl overflow-hidden hover-lift group">
                <div className="h-32 bg-gradient-to-br from-[#E8F3EC] to-[#F0F7F2] flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#1F5E3A]/10 flex items-center justify-center text-[#1F5E3A] group-hover:bg-[#1F5E3A] group-hover:text-white transition-all duration-300">{a.icon}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 bg-[#1F5E3A]/8 rounded-full font-manrope text-xs text-[#1F5E3A]">{a.category}</span>
                    <span className="font-manrope text-xs text-[#999]">{a.date}</span>
                  </div>
                  <h3 className="font-playfair text-base font-semibold text-[#0E2D1F] mb-3 leading-snug group-hover:text-[#1F5E3A] transition-colors">{a.title}</h3>
                  <p className="font-manrope text-xs text-[#777] leading-relaxed mb-4 line-clamp-3">{a.excerpt}</p>
                  <Link href="/blog" className="font-manrope text-xs text-[#1F5E3A] font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="btn-primary">View More Articles <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ADVOCACY SECTION */}
      <section id="advocacy" className="py-16 gradient-green">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Advocacy</p>
          <h2 className="font-playfair text-3xl font-bold text-white mb-5">Become an Advocate for Chiropractic</h2>
          <p className="font-manrope text-base text-white/80 mb-8 max-w-2xl mx-auto">
            Learn more about advocates that support Chiropractic India and how you can help raise awareness for spinal health across the country.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/fundraising" className="btn-gold">Become a Supporter <ArrowRight size={16} /></Link>
            <Link href="/contact" className="border border-white/30 text-white px-8 py-3 rounded-full font-manrope font-semibold text-sm hover:bg-white/10 transition-all">Know Our Advocates</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
