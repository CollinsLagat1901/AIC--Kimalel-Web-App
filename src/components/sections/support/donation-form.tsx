'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { handleDonationForm } from '@/app/support/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full transition-shadow hover:shadow-lg hover:glow-gold">
      {pending ? 'Submitting...' : 'Submit Donation Pledge'}
    </Button>
  );
}

export default function DonationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(handleDonationForm, { message: '', success: false });
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Thank You!" : "Oops!",
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);
  
  return (
    <section className="py-20 bg-secondary">
      <div className="section-divider mb-20"></div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold font-headline text-primary mb-4">
            Make a Donation Pledge
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
            This is a demonstration form. No payment will be processed.
        </p>
        <form ref={formRef} action={formAction} className="max-w-2xl mx-auto mt-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
                name="fullName"
                placeholder="Full Name"
                required
                className="bg-card border-border text-foreground focus:ring-accent"
            />
            <Input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="bg-card border-border text-foreground focus:ring-accent"
            />
          </div>
          <Input
                type="number"
                name="amount"
                placeholder="Amount (Ksh)"
                required
                className="bg-card border-border text-foreground focus:ring-accent"
            />
          <Textarea
            name="message"
            placeholder="Message (optional, e.g. for renovations)"
            rows={3}
            className="bg-card border-border text-foreground focus:ring-accent"
          />
          <SubmitButton />
        </form>
      </div>
    </section>
  );
}
