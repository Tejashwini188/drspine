'use client';

// SVG Logo component recreated from the Dr Spine brand logo
// Cyan/blue spine icon matching the original brand identity

import Image from 'next/image';

export function LogoFull({ className = '' }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2.5 ${className}`}>
            {/* The user should place their logo image as logo.png in frontend/public/ */}
            <Image 
                src="/logo.png" 
                alt="Dr Spine Logo" 
                width={160} 
                height={50} 
                className="h-10 w-auto object-contain"
                priority
            />
        </div>
    );
}

export function LogoFullWhite({ className = '' }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2.5 ${className}`}>
            {/* The user should place their white logo image as logo-white.png in frontend/public/ */}
            {/* Fallback to text if white logo isn't provided */}
            <div className="relative h-10 w-40 flex items-center">
                <Image 
                    src="/logo.png" 
                    alt="Dr Spine Logo" 
                    width={160} 
                    height={50} 
                    className="h-10 w-auto object-contain brightness-0 invert"
                    priority
                />
            </div>
        </div>
    );
}
