'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ChildrenHero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'children-hero');

  return (
    <section className="relative h-[50vh] flex items-center justify-center text-white text-center overflow-hidden bg-yellow-300">
        {heroImage && (
             <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover opacity-50"
                priority
                data-ai-hint={heroImage.imageHint}
            />
        )}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/50 via-blue-400/50 to-pink-400/50 mix-blend-multiply"></div>
      <div className="relative z-10 px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-white text-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            AIC Saramek Kimalel Kids
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
            A fun, safe, and exciting place to learn about Jesus!
        </p>
      </div>
       <style jsx>{`
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
      `}</style>
    </section>
  );
}
