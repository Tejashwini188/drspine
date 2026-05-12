import Link from "next/link";
import { ArrowRight, BookOpen, Brain, Heart, Activity, Shield, Clock } from "lucide-react";

const posts = [
  {
    title: "How chiropractors effectively manage tension-type headaches",
    category: "Chiropractic Education",
    date: "May 25, 2023",
    author: "docJay",
    excerpt: "Trigger points are sensitive areas of tight muscle fibers that can cause pain in other parts of the body. Commonly found in muscles, trigger points can be responsible for tension-type headaches. Chiropractors are uniquely trained to identify and treat these sensitive areas through manual therapy and targeted adjustments.",
    readTime: "5 min read",
    icon: <Brain size={28} />,
    href: "https://chiropracticindia.com/how-chiropractors-effectively-manage-tension-type-headaches/",
    featured: true,
  },
  {
    title: "Do I need a Chiropractor or a Physical Therapist?",
    category: "Chiropractic Education",
    date: "May 25, 2023",
    author: "docJay",
    excerpt: "Chiropractic Vs Physical Therapy. Lower back pain is a common problem people experience in their daily lives. When it comes to treatment, chiropractic and physical therapies are two popular options. Understanding the difference can help you make an informed decision.",
    readTime: "4 min read",
    icon: <Activity size={28} />,
    href: "https://chiropracticindia.com/do-i-need-a-chiropractor-or-a-physical-therapyst/",
    featured: false,
  },
  {
    title: "Abdominal Conditions",
    category: "Chiropractic Condition",
    date: "March 5, 2023",
    author: "docJay",
    excerpt: "The abdomen is the centre of all the other organs of the body. The abdomen condition is a discomfort in the belly that occurs right from the ribcage area to the pelvis. Chiropractic care can help address underlying musculoskeletal causes of abdominal discomfort.",
    readTime: "6 min read",
    icon: <Heart size={28} />,
    href: "https://chiropracticindia.com/abdominal-conditions/",
    featured: false,
  },
  {
    title: "Chiropractor and the Orthopedic Surgeon",
    category: "Chiropractic Education",
    date: "March 5, 2023",
    author: "docJay",
    excerpt: "In healthcare circles there are professions that do not always see eye to eye. Chiropractic has earned the trust of the public, the healthcare agencies, the insurance industries and government bodies. Learn how chiropractors and orthopedic surgeons can work together.",
    readTime: "5 min read",
    icon: <Shield size={28} />,
    href: "https://chiropracticindia.com/chiropractor-and-the-orthopedic-surgeon/",
    featured: false,
  },
  {
    title: "Chiropractor and the Neurosurgeon",
    category: "Chiropractic Education",
    date: "March 5, 2023",
    author: "docJay",
    excerpt: "When we think about chiropractic, one feature that does stand out is that this is a non-surgical profession; and this is a good thing! Many, far too many surgeries are performed that could have been avoided with proper chiropractic care.",
    readTime: "5 min read",
    icon: <Brain size={28} />,
    href: "https://chiropracticindia.com/chiropractor-and-the-neurosurgeon/",
    featured: false,
  },
  {
    title: "Chiropractor and the Dentist",
    category: "Chiropractic Education",
    date: "March 5, 2023",
    author: "docJay",
    excerpt: "What would a Chiropractor and a Dentist have in common in patient care? There is one condition that both practitioners treat but using different methods, and that condition is Temporo-Mandibular Joint (TMJ) disorder.",
    readTime: "4 min read",
    icon: <BookOpen size={28} />,
    href: "https://chiropracticindia.com/chiropractor-and-the-dentist/",
    featured: false,
  },
];

const categories = ["All", "Chiropractic Education", "Chiropractic Condition"];

export default function BlogPage() {
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div className="pt-24 md:pt-36">
      {/* HERO */}
      <section className="relative py-20 gradient-hero pattern-overlay overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#1F5E3A]/5 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Educational Publication</p>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#0E2D1F] leading-tight mb-6 gold-underline">
              Blog & Resources
            </h1>
            <p className="font-manrope text-lg text-[#444] leading-relaxed mt-6">
              Discover the latest articles and educational resources on chiropractic care, spinal health, and wellness from our expert contributors.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      <div className="sticky top-[72px] z-30 bg-white border-b border-[#F5F5F2] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button key={cat} className={`flex-shrink-0 px-5 py-2 rounded-full font-manrope text-sm font-medium transition-all ${cat === "All" ? "bg-[#1F5E3A] text-white" : "text-[#666] hover:text-[#1F5E3A] hover:bg-[#1F5E3A]/8"}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* FEATURED POST */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Featured Article</p>
            <h2 className="font-playfair text-3xl font-bold text-[#0E2D1F] gold-underline-center">Editor&apos;s Pick</h2>
          </div>
          <a href={featuredPost.href} target="_blank" rel="noopener noreferrer" className="block glass-card float-shadow-lg rounded-3xl overflow-hidden hover-lift group">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-gradient-to-br from-[#E8F3EC] via-[#F0F7F2] to-[#FAF9F4] flex items-center justify-center min-h-[280px] p-12">
                <div className="w-24 h-24 rounded-full bg-[#1F5E3A]/10 flex items-center justify-center text-[#1F5E3A] group-hover:bg-[#1F5E3A] group-hover:text-white transition-all duration-500">
                  {featuredPost.icon}
                </div>
              </div>
              <div className="lg:col-span-3 p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#D4AF37]/15 rounded-full font-manrope text-xs text-[#B8941F] font-semibold">Featured</span>
                  <span className="px-3 py-1 bg-[#1F5E3A]/8 rounded-full font-manrope text-xs text-[#1F5E3A]">{featuredPost.category}</span>
                </div>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#0E2D1F] mb-4 leading-snug group-hover:text-[#1F5E3A] transition-colors">{featuredPost.title}</h2>
                <p className="font-manrope text-sm text-[#666] leading-relaxed mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#999] font-manrope">
                    <Clock size={12} />
                    {featuredPost.readTime}
                  </div>
                  <div className="text-xs text-[#999] font-manrope">{featuredPost.date}</div>
                  <div className="ml-auto font-manrope text-sm text-[#1F5E3A] font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* ALL POSTS */}
      <section className="section-padding bg-[#FAF9F4] pattern-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">All Articles</p>
              <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] gold-underline">Latest Posts</h2>
            </div>
            <p className="font-manrope text-sm text-[#999]">{posts.length} articles</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <article key={post.title} className="glass-card float-shadow rounded-2xl overflow-hidden hover-lift group flex flex-col">
                <a href={post.href} target="_blank" rel="noopener noreferrer" className="flex flex-col flex-1">
                  <div className="h-40 bg-gradient-to-br from-[#E8F3EC] to-[#F0F7F2] flex items-center justify-center flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#1F5E3A]/10 flex items-center justify-center text-[#1F5E3A] group-hover:bg-[#1F5E3A] group-hover:text-white transition-all duration-300">
                      {post.icon}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 bg-[#1F5E3A]/8 rounded-full font-manrope text-xs text-[#1F5E3A] font-medium">{post.category}</span>
                    </div>
                    <h3 className="font-playfair text-base font-semibold text-[#0E2D1F] mb-3 leading-snug group-hover:text-[#1F5E3A] transition-colors flex-1">{post.title}</h3>
                    <p className="font-manrope text-xs text-[#777] leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-[#F5F5F2]">
                      <div className="flex items-center gap-3 text-xs text-[#999] font-manrope">
                        <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                        <span>{post.date}</span>
                      </div>
                      <span className="font-manrope text-xs text-[#1F5E3A] font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="https://chiropracticindia.com/get-healthy-and-stay-healthy/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              More Articles <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="glass-card float-shadow-lg rounded-3xl p-10 border border-[#D4AF37]/20">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Stay Updated</p>
            <h2 className="font-playfair text-3xl font-bold text-[#0E2D1F] mb-4">Get the Latest Articles</h2>
            <p className="font-manrope text-sm text-[#666] mb-6">Subscribe to receive the latest chiropractic education and spinal health resources directly from Chiropractic India.</p>
            <div className="flex gap-3">
              <input type="email" id="blog-newsletter-email" placeholder="Your email address" className="flex-1 px-4 py-3 rounded-xl border border-[#E5E5E0] bg-white font-manrope text-sm focus:outline-none focus:border-[#1F5E3A] transition-colors" />
              <button id="blog-subscribe-btn" className="btn-primary whitespace-nowrap">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
