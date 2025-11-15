
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { featuredSermon } from '@/lib/constants';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SermonAIChatTrigger } from './sermon-ai-chat';
import { PlayCircle } from 'lucide-react';

export default function FeaturedSermon() {
  const sermonImage = PlaceHolderImages.find(p => p.id === 'hero-slide-3');

  return (
    <section id="sermons" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden shadow-lg border-none bg-card">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-video md:aspect-auto group cursor-pointer">
              {sermonImage && (
                <Image
                  src={sermonImage.imageUrl}
                  alt={sermonImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={sermonImage.imageHint}
                />
              )}
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-center justify-center transition-all duration-300 group-hover:bg-black/50">
                <PlayCircle className="w-20 h-20 text-white/80 drop-shadow-lg transition-all duration-300 group-hover:text-white group-hover:scale-110" />
               </div>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold font-headline text-primary mb-2">{featuredSermon.title}</h3>
              <p className="text-muted-foreground mb-4">
                {featuredSermon.speaker} • {featuredSermon.date}
              </p>
              <p className="mb-6 text-foreground">{featuredSermon.summary}</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full transition-shadow hover:shadow-lg hover:glow-gold">
                  Watch Sermon
                </Button>
                <SermonAIChatTrigger sermonTranscript={featuredSermon.transcript} />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
