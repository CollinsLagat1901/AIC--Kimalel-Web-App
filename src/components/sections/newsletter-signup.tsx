'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { handleNewsletterSignup } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button 
      type="submit" 
      disabled={pending} 
      size="lg" 
      className="absolute right-1 top-1/2 -translate-y-1/2 h-[calc(100%-0.5rem)] bg-accent text-accent-foreground hover:bg-accent/90 rounded-full transition-shadow hover:shadow-lg hover:glow-gold"
    >
      {pending ? 'Subscribing...' : 'Subscribe'}
    </Button>
  );
}

export default function NewsletterSignup() {
  const [state, formAction] = useActionState(handleNewsletterSignup, { message: '' });
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: "Newsletter",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="bg-background py-16 text-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-headline mb-2 text-primary">Stay Connected</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to our weekly devotionals & church news.
          </p>
          <form action={formAction} className="relative">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              className="w-full h-14 pl-6 pr-36 rounded-full text-base bg-card border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-accent focus-visible:ring-offset-0 transition-shadow focus:shadow-[0_0_15px_2px_hsl(var(--accent)/0.4)]"
            />
            <SubmitButton />
          </form>
        </div>
      </div>
    </section>
  );
}
