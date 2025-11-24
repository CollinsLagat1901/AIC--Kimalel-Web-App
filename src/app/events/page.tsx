
import EventsHero from '@/components/sections/events/hero';
import UpcomingEventsList from '@/components/sections/events/upcoming-events-list';
import PastEvents from '@/components/sections/events/past-events';
import EventRsvp from '@/components/sections/events/rsvp';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { createClient } from '@/utils/supabase/server';

export default async function EventsPage() {
    const supabase = createClient();
    const { data: upcomingEvents, error } = await supabase
        .from('events')
        .select('title')
        .eq('published', true)
        .gt('date', new Date().toISOString())
        .order('date', { ascending: true });
    
    if (error) {
        console.error("Error fetching events for RSVP form:", error);
    }
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <EventsHero />
        <UpcomingEventsList />
        <PastEvents />
        <EventRsvp upcomingEvents={upcomingEvents || []} />
      </main>
      <Footer />
    </div>
  );
}
