import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function AboutHero() {
    const aboutHeroImage = PlaceHolderImages.find(p => p.id === 'about-hero');

    return (
        <section className="relative h-[50vh] flex items-center justify-center text-white text-center overflow-hidden">
            {aboutHeroImage && (
                 <Image
                    src={aboutHeroImage.imageUrl}
                    alt={aboutHeroImage.description}
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={aboutHeroImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-primary/70"></div>
            <div className="relative z-10 px-4 flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-white">
                    About AIC Saramek Kimalel Church
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto">
                    Rooted in Faith, Growing in Love, Serving in Community
                </p>
            </div>
        </section>
    );
}
