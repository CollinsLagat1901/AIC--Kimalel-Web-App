
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { createClient } from "@/utils/supabase/server";

export default async function PastEvents() {
    const supabase = createClient();
    const { data: events, error } = await supabase
        .from('events')
        .select('title, image_id')
        .eq('published', true)
        .lt('date', new Date().toISOString())
        .order('date', { ascending: false })
        .limit(6);
    
    if (error) {
        console.error('Error fetching past events:', error);
    }
  
  return (
    <section className="py-20">
      <div className="section-divider mb-20"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-white mb-4">Past Events Highlights</h2>
        </div>
        {(!events || events.length === 0) ? (
             <p className="text-center text-muted-foreground">No past events to show yet.</p>
        ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {events.map((event, index) => {
                const image = PlaceHolderImages.find(p => p.id === (event.image_id || 'event-2'));
                if (!image) return null;
                return (
                <div key={index} className="relative aspect-video group overflow-hidden rounded-lg">
                    <Image
                    src={image.imageUrl}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    data-ai-hint={image.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                        <p className="text-white text-center text-sm">{event.title}</p>
                    </div>
                </div>
                );
            })}
            </div>
        )}
      </div>
    </section>
  );
}
