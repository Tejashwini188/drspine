'use client';

import Hero from '../components/home/Hero';
import ConditionsGrid from '../components/home/ConditionsGrid';
import StatsBar from '../components/home/StatsBar';
import WhyDrSpine from '../components/home/WhyDrSpine';
import Testimonials from '../components/home/Testimonials';
import PainAssessment from '../components/home/PainAssessment';
import KnowledgeHub from '../components/home/KnowledgeHub';
import LocationsSection from '../components/home/LocationsSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
    return (
        <>
            {/* JSON-LD: Homepage FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Can slip disc heal without surgery?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Most slip disc cases respond well to non-surgical treatments. Chiropractic care, combined with structural rehabilitation, can help the disc heal naturally by reducing pressure and restoring proper spinal alignment."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Is chiropractic treatment safe?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely. Chiropractic care is a proven, evidence-based treatment method. Our internationally trained specialists use gentle, precise techniques tailored to each patient's condition."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can scoliosis improve in adults?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. While the spine is less flexible in adults, significant improvements in both curvature and symptoms are achievable with CBP-based treatment. Many adult patients see 10-30% improvement in Cobb angle."
                                }
                            }
                        ]
                    }),
                }}
            />

            <Hero />
            <ConditionsGrid />
            <StatsBar />
            <WhyDrSpine />
            <Testimonials />
            <PainAssessment />
            <KnowledgeHub />
            <LocationsSection />
            <CTASection />
        </>
    );
}
