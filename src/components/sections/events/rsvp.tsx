
'use client';

import { useEffect } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { handleEventRsvp } from '@/app/events/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type EventTitle = {
    title: string;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full">
      {pending ? 'Submitting...' : 'RSVP Now'}
    </Button>
  );
}

export default function EventRsvp({ upcomingEvents }: { upcomingEvents: EventTitle[] }) {
  const [state, formAction] = useActionState(handleEventRsvp, { message: '', success: false });
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: "Event RSVP",
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
    }
  }, [state, toast]);
  
  return (
    <section className="py-20">
      <div className="section-divider mb-20"></div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold font-headline text-white mb-4">
            Register for an Event
        </h2>
        <form action={formAction} className="max-w-xl mx-auto mt-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
                name="fullName"
                placeholder="Full Name"
                required
                className="bg-gray-800 border-gray-700 text-white focus:ring-accent"
            />
            <Input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="bg-gray-800 border-gray-700 text-white focus:ring-accent"
            />
          </div>
          <Select name="event" required>
            <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white focus:ring-accent">
                <SelectValue placeholder="Select an event" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 text-white border-gray-700">
                {upcomingEvents.map(event => (
                    <SelectItem key={event.title} value={event.title}>{event.title}</SelectItem>
                ))}
            </SelectContent>
          </Select>
          <SubmitButton />
        </form>
      </div>
    </section>
  );
}
