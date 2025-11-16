'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { DotButton, PrevButton, NextButton } from '@/components/ui/carousel-buttons';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { TheeEntityLogo } from '../thee-entity-logo';


const heroSlides = [
  PlaceHolderImages.find(p => p.id === 'hero-background'),
  PlaceHolderImages.find(p => p.id === 'hero-slide-1'),
  PlaceHolderImages.find(p => p.id === 'hero-slide-3'),
  PlaceHolderImages.find(p => p.id === 'hero-slide-4'),
].filter(Boolean) as (typeof PlaceHolderImages)[0][];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 50 }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  return (
    <section className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden bg-primary">
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {heroSlides.map((slide, index) => (
            <div
              className="relative flex-[0_0_100%] h-full transition-opacity duration-1000"
              key={slide.id}
            >
              <Image
                src={slide.imageUrl}
                alt={slide.description}
                fill
                className={cn(
                    "object-cover transition-opacity duration-1000",
                    selectedIndex === index ? "opacity-100" : "opacity-0"
                )}
                priority={index === 0}
                data-ai-hint={slide.imageHint}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-primary/80"></div>
      
      <div className="relative z-10 px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 text-white animate-fade-in-down">
          AIC Kimalel Saramek Church
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up">
          A Place of Worship, Growth, and Community
        </p>
        <div className="animate-fade-in-up animation-delay-300">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:glow-gold"
            asChild
          >
            <Link href="#services">Join Us This Sunday</Link>
          </Button>
        </div>
      </div>

      <div className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-12">
        <PrevButton onClick={scrollPrev} />
        <div className="flex items-center justify-center gap-3">
            {heroSlides.map((_, index) => (
                <DotButton
                key={index}
                onClick={() => scrollTo(index)}
                selected={index === selectedIndex}
                />
            ))}
        </div>
        <NextButton onClick={scrollNext} />
      </div>

      <style jsx>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animate-fade-in-up, .animate-fade-in-down {
          opacity: 0; 
        }
      `}</style>
    </section>
  );
}
