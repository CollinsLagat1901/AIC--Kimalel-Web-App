import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import QuickInfo from '@/components/sections/quick-info';
import UpcomingEvents from '@/components/sections/upcoming-events';
import FeaturedSermon from '@/components/sections/featured-sermon';
import Testimonies from '@/components/sections/testimonies';
import Ministries from '@/components/sections/ministries';
import CallToGive from '@/components/sections/call-to-give';
import NewsletterSignup from '@/components/sections/newsletter-signup';
import { FloatingAIButton } from '@/components/sections/floating-ai-button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <QuickInfo />
        <UpcomingEvents />
        <FeaturedSermon />
        <Testimonies />
        <Ministries />
        <CallToGive />
        <NewsletterSignup />
      </main>
      <Footer />
      <FloatingAIButton />
    </div>
  );
}
