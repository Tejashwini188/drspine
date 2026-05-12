import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0E2D1F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8941F] flex items-center justify-center">
                <span className="text-[#0E2D1F] font-playfair font-bold text-sm">CI</span>
              </div>
              <div>
                <div className="font-playfair font-bold text-white text-xl">Chiropractic India</div>
                <div className="font-manrope text-[10px] text-[#D4AF37] uppercase tracking-widest">
                  Setting Standards Since 2022
                </div>
              </div>
            </div>
            <p className="font-manrope text-sm text-white/70 leading-relaxed max-w-md mb-6">
              Chiropractic India started in 2022 in response to the tragic decrease in genuine
              chiropractors in India. Our principal focus is to increase the formation of new
              chiropractic colleges and legitimize the chiropractic profession in India.
            </p>
            <div className="flex gap-2 flex-wrap">
              {[
                { label: "YouTube", href: "https://www.youtube.com/@ChiropracticIndia" },
                { label: "Instagram", href: "https://www.instagram.com/chiropracticindia.com/" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/chiropractic-india-835181231/" },
                { label: "WhatsApp", href: "https://api.whatsapp.com/send?phone=6364047575" },
                { label: "Telegram", href: "https://t.me/Chiropractic_India" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full border border-white/20 text-xs font-manrope text-white/70 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-base text-[#D4AF37] mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Fund Raising", href: "/fundraising" },
                { label: "Faculty Positions", href: "/faculty" },
                { label: "Information", href: "/information" },
                { label: "Blog", href: "/blog" },
                { label: "College", href: "/college" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-manrope text-sm text-white/70 hover:text-[#D4AF37] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D4AF37]/40 group-hover:bg-[#D4AF37] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair font-semibold text-base text-[#D4AF37] mb-5">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <p className="font-manrope text-sm text-white/70 leading-relaxed">
                  285, 5th Floor, opp. Star Bucks, RMV 2nd Stage, 2nd Block, Sanjayanagara,
                  Bengaluru, Karnataka 560094
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-[#D4AF37] flex-shrink-0" />
                <a
                  href="tel:+916364047575"
                  className="font-manrope text-sm text-white/70 hover:text-[#D4AF37] transition-colors"
                >
                  +91 636 404 7575
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={16} className="text-[#D4AF37] flex-shrink-0" />
                <a
                  href="mailto:ChiroIndia@chiropracticindia.com"
                  className="font-manrope text-sm text-white/70 hover:text-[#D4AF37] transition-colors break-all"
                >
                  ChiroIndia@chiropracticindia.com
                </a>
              </div>
            </div>
            <div className="mt-5 px-4 py-3 bg-white/5 rounded-xl border border-white/10">
              <p className="font-manrope text-xs text-white/50">Registration Number</p>
              <p className="font-manrope text-sm text-white/80 font-medium">IV 301/22-23</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-manrope text-xs text-white/40">
            &copy; {new Date().getFullYear()} Chiropractic India. All rights reserved.
          </p>
          <p className="font-manrope text-xs text-white/40">
            Setting Standards for Chiropractic in India
          </p>
        </div>
      </div>
    </footer>
  );
}
