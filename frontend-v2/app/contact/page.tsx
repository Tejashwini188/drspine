import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, MessageCircle, Send, Clock, Globe } from "lucide-react";

const contactCards = [
  {
    icon: <MapPin size={24} />,
    title: "Visit Us",
    lines: ["Chiropractic India", "285, 5th Floor, opp. Star Bucks", "RMV 2nd Stage, 2nd Block, Sanjayanagara", "Bengaluru, Karnataka 560094"],
    action: null,
  },
  {
    icon: <Phone size={24} />,
    title: "Phone Us",
    lines: ["+91 636 404 7575"],
    action: { label: "Call Now", href: "tel:+916364047575" },
  },
  {
    icon: <Mail size={24} />,
    title: "Mail Us",
    lines: ["ChiroIndia@chiropracticindia.com"],
    action: { label: "Send Email", href: "mailto:ChiroIndia@chiropracticindia.com" },
  },
];

const socialLinks = [
  { name: "WhatsApp", href: "https://api.whatsapp.com/send?phone=6364047575", color: "bg-green-50 text-green-600 hover:bg-green-100" },
  { name: "Telegram", href: "https://t.me/Chiropractic_India", color: "bg-blue-50 text-blue-600 hover:bg-blue-100" },
  { name: "Instagram", href: "https://www.instagram.com/chiropracticindia.com/", color: "bg-pink-50 text-pink-600 hover:bg-pink-100" },
  { name: "YouTube", href: "https://www.youtube.com/@ChiropracticIndia", color: "bg-red-50 text-red-600 hover:bg-red-100" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/chiropractic-india-835181231/", color: "bg-blue-50 text-blue-700 hover:bg-blue-100" },
];

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-36">
      {/* HERO */}
      <section className="relative py-20 gradient-hero pattern-overlay overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#1F5E3A]/5 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Get in Touch</p>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#0E2D1F] leading-tight mb-6 gold-underline">
              Contact Us
            </h1>
            <p className="font-manrope text-lg text-[#444] leading-relaxed mt-6">
              Want To Get In Touch? We&apos;d love to hear from you — whether it&apos;s a general inquiry, partnership discussion, or to schedule a consultation.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactCards.map((card) => (
              <div key={card.title} className="glass-card float-shadow rounded-2xl p-8 text-center hover-lift">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1F5E3A]/8 text-[#1F5E3A] mb-5 mx-auto">
                  {card.icon}
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#0E2D1F] mb-4">{card.title}</h3>
                <div className="space-y-1 mb-5">
                  {card.lines.map((line, i) => (
                    <p key={i} className="font-manrope text-sm text-[#666]">{line}</p>
                  ))}
                </div>
                {card.action && (
                  <a href={card.action.href} className="btn-secondary text-sm w-full justify-center">
                    {card.action.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT: FORM + MAP */}
      <section className="section-padding bg-[#FAF9F4] pattern-overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* INQUIRY FORM */}
            <div>
              <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Send a Message</p>
              <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] mb-8 gold-underline">General Inquiries</h2>
              <div className="glass-card float-shadow-lg rounded-3xl p-8 border border-[#1F5E3A]/10">
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-manrope text-xs text-[#666] font-medium block mb-1.5">Full Name *</label>
                      <input type="text" id="contact-name" className="w-full px-4 py-3 rounded-xl border border-[#E5E5E0] bg-white font-manrope text-sm text-[#333] focus:outline-none focus:border-[#1F5E3A] transition-colors" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="font-manrope text-xs text-[#666] font-medium block mb-1.5">Email Address *</label>
                      <input type="email" id="contact-email" className="w-full px-4 py-3 rounded-xl border border-[#E5E5E0] bg-white font-manrope text-sm text-[#333] focus:outline-none focus:border-[#1F5E3A] transition-colors" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-manrope text-xs text-[#666] font-medium block mb-1.5">Phone Number</label>
                      <input type="tel" id="contact-phone" className="w-full px-4 py-3 rounded-xl border border-[#E5E5E0] bg-white font-manrope text-sm text-[#333] focus:outline-none focus:border-[#1F5E3A] transition-colors" placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label className="font-manrope text-xs text-[#666] font-medium block mb-1.5">Subject</label>
                      <select id="contact-subject" className="w-full px-4 py-3 rounded-xl border border-[#E5E5E0] bg-white font-manrope text-sm text-[#333] focus:outline-none focus:border-[#1F5E3A] transition-colors">
                        <option>General Inquiry</option>
                        <option>Faculty Positions</option>
                        <option>Donations & Fundraising</option>
                        <option>Corporate Partnership</option>
                        <option>College Information</option>
                        <option>Media / Press</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="font-manrope text-xs text-[#666] font-medium block mb-1.5">Your Message *</label>
                    <textarea id="contact-message" rows={5} className="w-full px-4 py-3 rounded-xl border border-[#E5E5E0] bg-white font-manrope text-sm text-[#333] focus:outline-none focus:border-[#1F5E3A] transition-colors resize-none" placeholder="Tell us how we can help you..." />
                  </div>
                  <button type="submit" id="contact-submit" className="btn-primary w-full justify-center">
                    Send Message <Send size={15} />
                  </button>
                  <p className="font-manrope text-xs text-[#999] text-center">We typically respond within 1-2 business days.</p>
                </form>
              </div>
            </div>

            {/* INFO SIDE */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <div>
                <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">Location</p>
                <h2 className="font-playfair text-4xl font-bold text-[#0E2D1F] mb-6 gold-underline">Find Us</h2>
                <div className="rounded-2xl overflow-hidden float-shadow h-64 bg-gradient-to-br from-[#E8F3EC] to-[#F0F7F2] border border-[#1F5E3A]/10 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[#1F5E3A]/10 flex items-center justify-center mx-auto mb-3">
                      <MapPin size={28} className="text-[#1F5E3A]" />
                    </div>
                    <p className="font-manrope text-sm text-[#555] font-medium">Sanjayanagara, Bengaluru</p>
                    <p className="font-manrope text-xs text-[#999]">Karnataka 560094</p>
                    <a href="https://maps.google.com/?q=RMV+2nd+Stage+Sanjayanagara+Bengaluru" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 font-manrope text-xs text-[#1F5E3A] hover:underline">
                      <Globe size={12} /> Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="glass-card float-shadow rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1F5E3A]/8 text-[#1F5E3A] flex items-center justify-center">
                    <Clock size={20} />
                  </div>
                  <h3 className="font-playfair text-lg font-bold text-[#0E2D1F]">Office Hours</h3>
                </div>
                <div className="space-y-2">
                  {[{ day: "Monday – Friday", time: "9:00 AM – 6:00 PM" }, { day: "Saturday", time: "9:00 AM – 2:00 PM" }, { day: "Sunday", time: "Closed" }].map((h) => (
                    <div key={h.day} className="flex justify-between items-center py-2 border-b border-[#F5F5F2] last:border-0">
                      <span className="font-manrope text-sm text-[#555]">{h.day}</span>
                      <span className="font-manrope text-sm font-medium text-[#0E2D1F]">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="glass-card float-shadow rounded-2xl p-6">
                <h3 className="font-playfair text-lg font-bold text-[#0E2D1F] mb-4">Connect on Social Media</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((s) => (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className={`px-4 py-2.5 rounded-xl font-manrope text-sm font-medium text-center transition-all ${s.color}`}>
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 gradient-green">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-manrope text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">We&apos;re Here to Help</p>
          <h2 className="font-playfair text-3xl font-bold text-white mb-4">Let&apos;s Build a Healthier India Together</h2>
          <p className="font-manrope text-base text-white/80 mb-6 max-w-lg mx-auto">
            Whether you want to support our mission, explore faculty positions, or simply learn more about chiropractic care — we&apos;re happy to connect.
          </p>
          <a href="https://api.whatsapp.com/send?phone=6364047575" target="_blank" rel="noopener noreferrer" className="btn-gold">
            <MessageCircle size={16} /> Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
