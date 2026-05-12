"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Fund Raising", href: "/fundraising" },
  { label: "Faculty Positions", href: "/faculty" },
  {
    label: "Information",
    href: "/information",
    children: [
      { label: "Chiropractic Information", href: "/information" },
      { label: "Advocacy", href: "/information#advocacy" },
      { label: "Supporter", href: "/information#supporter" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "College", href: "/college" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-deep-forest text-white py-2 px-6 text-sm font-manrope hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 opacity-90">
            <Phone size={13} />
            <a href="tel:+916364047575" className="hover:text-[#F3E8A1] transition-colors">
              +91 636 404 7575
            </a>
            <span className="mx-3 opacity-30">|</span>
            <a
              href="mailto:ChiroIndia@chiropracticindia.com"
              className="hover:text-[#F3E8A1] transition-colors"
            >
              ChiroIndia@chiropracticindia.com
            </a>
          </div>
          <div className="flex items-center gap-4 opacity-90">
            <a href="https://api.whatsapp.com/send?phone=6364047575" className="hover:text-[#F3E8A1] transition-colors" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://www.instagram.com/chiropracticindia.com/" className="hover:text-[#F3E8A1] transition-colors" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.youtube.com/@ChiropracticIndia" className="hover:text-[#F3E8A1] transition-colors" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`fixed top-0 md:top-9 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "navbar-blur float-shadow py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1F5E3A] to-[#0E2D1F] flex items-center justify-center">
              <span className="text-white font-playfair font-bold text-sm">CI</span>
            </div>
            <div>
              <div className="font-playfair font-bold text-[#0E2D1F] text-lg leading-tight">
                Chiropractic
              </div>
              <div
                className="font-manrope text-[10px] text-[#1F5E3A] uppercase tracking-widest leading-tight"
              >
                India
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 rounded-full font-manrope text-sm font-500 text-[#222222] hover:bg-[#1F5E3A]/8 hover:text-[#1F5E3A] transition-all duration-200">
                    {link.label}
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                  </button>
                  <div
                    className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                      activeDropdown === link.label ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="glass-card float-shadow-lg rounded-2xl py-2 min-w-[220px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-5 py-3 font-manrope text-sm text-[#222222] hover:bg-[#1F5E3A]/6 hover:text-[#1F5E3A] transition-all"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 rounded-full font-manrope text-sm text-[#222222] hover:bg-[#1F5E3A]/8 hover:text-[#1F5E3A] transition-all duration-200"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link href="/contact" className="btn-primary ml-3 text-sm">
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-toggle"
            className="lg:hidden p-2 rounded-xl hover:bg-[#1F5E3A]/8 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={22} color="#1F5E3A" /> : <Menu size={22} color="#1F5E3A" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/20" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 pt-20">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="block px-4 py-3 rounded-xl font-manrope text-sm text-[#222222] hover:bg-[#1F5E3A]/8 hover:text-[#1F5E3A] transition-all"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 border-l-2 border-[#1F5E3A]/20 pl-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-2 rounded-lg font-manrope text-xs text-[#666] hover:text-[#1F5E3A] transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-[#F5F5F2]">
              <div className="flex items-center gap-2 text-sm text-[#666] font-manrope">
                <Phone size={13} />
                <a href="tel:+916364047575">+91 636 404 7575</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
