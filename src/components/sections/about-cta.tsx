import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutCta() {
  return (
    <section className="py-20 text-center bg-background">
       <div className="section-divider mb-12"></div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-headline mb-4 text-primary">
          Be Part of Our Journey
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
          We welcome you to join us as we worship, grow, and serve together.
        </p>
        <Button
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:glow-gold"
          asChild
        >
          <Link href="/contact">Join Our Community</Link>
        </Button>
      </div>
    </section>
  );
}
