
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";
import { createClient } from "@/utils/supabase/server";

export default async function UpcomingEventsList() {
    const supabase = createClient();
    const { data: events, error } = await supabase
        .from('events')
        .select('*')
        .eq('published', true)
        .gt('date', new Date().toISOString())
        .order('date', { ascending: true });

    if (error) {
        console.error('Error fetching upcoming events:', error);
    }
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-white mb-4">Upcoming Events</h2>
        </div>
        {(!events || events.length === 0) ? (
            <p className="text-center text-muted-foreground">No upcoming events scheduled. Please check back soon!</p>
        ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => {
                const eventImage = PlaceHolderImages.find(p => p.id === 'event-1');
                return (
                <Card key={event.id} className="overflow-hidden group bg-gray-800/50 border-accent/20 border backdrop-blur-sm text-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:shadow-accent/20">
                    <div className="relative aspect-[16/9]">
                    {eventImage && (
                        <Image
                        src={eventImage.imageUrl}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={eventImage.imageHint}
                        />
                    )}
                    </div>
                    <CardContent className="p-6">
                    <h3 className="font-bold font-headline text-xl text-accent mb-3 h-14">{event.title}</h3>
                    <div className="space-y-2 text-gray-300 text-sm mb-4">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-accent" />
                            <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-accent" />
                            <span>All Day</span>
                        </div>
                        {event.ministry && (
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-accent" />
                                <span>{event.ministry}</span>
                            </div>
                        )}
                    </div>
                    <p className="text-gray-400 text-sm mb-6 h-20 overflow-hidden">{event.description}</p>
                    <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full transition-shadow hover:shadow-lg hover:glow-gold">
                        <Link href="#">RSVP Now</Link>
                    </Button>
                    </CardContent>
                </Card>
                );
            })}
            </div>
        )}
      </div>
    </section>
  );
}
