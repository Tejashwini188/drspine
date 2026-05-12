'use client';

import { doctors } from '../../data/siteData';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '../../components/ui/Animations';
import Image from 'next/image';

export default function DoctorsPage() {
    return (
        <main className="min-h-screen bg-surface-offwhite pt-32 pb-24">
            {/* JSON-LD Schema for Medical Organization / Physicians */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalClinic",
                        "name": "Dr Spine",
                        "medicalSpecialty": "Chiropractic",
                        "employee": doctors.map(doc => ({
                            "@type": "Physician",
                            "name": doc.name,
                            "jobTitle": doc.title,
                            "description": doc.bio
                        }))
                    }),
                }}
            />

            <div className="container-default">
                <AnimateOnScroll className="text-center mb-20">
                    <p className="section-label">Our Specialists</p>
                    <h1 className="text-display font-heading font-bold text-navy-900 mb-4">
                        Meet Our <span className="gradient-text">Expert Doctors</span>
                    </h1>
                    <p className="section-subtitle mx-auto">
                        Internationally trained chiropractors and structural rehabilitation experts dedicated to your pain-free life.
                    </p>
                </AnimateOnScroll>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" staggerDelay={0.2}>
                    {doctors.map((doctor, index) => (
                        <StaggerItem key={doctor.name} className="flex flex-col items-center text-center group">
                            
                            {/* Doctor Image Container with custom shapes based on screenshot */}
                            <div className="relative w-56 h-56 mb-8 transition-transform duration-500 group-hover:-translate-y-2">
                                {/* Background Accent Shape */}
                                <div className={`absolute inset-0 bg-spine-100 transition-transform duration-500 group-hover:scale-105 ${
                                    index === 0 ? 'rounded-[0_50%_50%_50%]' :
                                    index === 1 ? 'rounded-[0_50%_50%_50%]' :
                                    'rounded-full border-[3px] border-spine-400'
                                }`}></div>
                                
                                {/* Inner Image/Avatar */}
                                <div className={`absolute inset-1 overflow-hidden bg-spine-50 flex items-end justify-center ${
                                    index === 0 ? 'rounded-[0_50%_50%_50%]' :
                                    index === 1 ? 'rounded-[0_50%_50%_50%]' :
                                    'rounded-full'
                                }`}>
                                    {/* Try to load the image, fallback to a silhouette if missing */}
                                    <div className="relative w-full h-full">
                                        <Image 
                                            src={doctor.image || '/doctors/placeholder.png'} 
                                            alt={doctor.name}
                                            fill
                                            className="object-cover object-top"
                                            onError={(e) => {
                                                // Fallback if image doesn't exist
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement?.classList.add('bg-spine-200');
                                            }}
                                        />
                                        {/* Placeholder silhouette shown if image fails to load */}
                                        <div className="absolute inset-0 flex items-end justify-center opacity-30 -z-10">
                                            <svg viewBox="0 0 100 100" className="w-4/5 h-4/5 fill-navy-800">
                                                <circle cx="50" cy="35" r="20" />
                                                <path d="M20 100 Q20 70 50 70 Q80 70 80 100 Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Special overlay accent for the third doctor as seen in screenshot */}
                                {index === 2 && (
                                    <div className="absolute -bottom-2 -right-2 w-full h-full rounded-full border-[3px] border-spine-500 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                                )}
                            </div>

                            {/* Doctor Info */}
                            <div className="space-y-3 px-4">
                                <div>
                                    <h3 className="text-2xl font-heading font-bold text-navy-900 leading-tight">
                                        {doctor.name}
                                    </h3>
                                    <p className="text-sm font-heading font-bold text-navy-800 mt-1">
                                        {doctor.title}
                                    </p>
                                </div>
                                <div className="w-12 h-0.5 bg-spine-300 mx-auto rounded-full my-4"></div>
                                <p className="text-sm text-navy-500 leading-relaxed max-w-[280px] mx-auto">
                                    {doctor.bio}
                                </p>
                            </div>
                            
                            {/* Hover Action */}
                            <div className="mt-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                <a href="/appointment" className="text-sm font-heading font-bold text-spine-600 hover:text-spine-700 inline-flex items-center gap-1">
                                    Book Consultation <span>→</span>
                                </a>
                            </div>

                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </main>
    );
}
