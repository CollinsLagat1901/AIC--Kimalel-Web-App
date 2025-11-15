
'use server';

import { z } from 'zod';
import { createClient } from '@/utils/supabase/server';

const eventRsvpSchema = z.object({
  fullName: z.string().min(2, { message: 'Please enter your full name.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  event: z.string().min(1, { message: 'Please select an event to RSVP for.' }),
});

export async function handleEventRsvp(prevState: any, formData: FormData) {
  const validatedFields = eventRsvpSchema.safeParse({
    fullName: formData.get('fullName'),
    email: formData.get('email'),
    event: formData.get('event'),
  });

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;
    const errorMessage = fieldErrors.fullName?.[0] || fieldErrors.email?.[0] || fieldErrors.event?.[0] || 'Invalid input. Please check your details.';
    return {
      message: errorMessage,
      success: false,
    };
  }
  
  const supabase = createClient();
  const { error } = await supabase
    .from('event_rsvps')
    .insert([{ 
        full_name: validatedFields.data.fullName,
        email: validatedFields.data.email,
        event: validatedFields.data.event
    }]);

  if (error) {
    console.error('Supabase error:', error.message);
    if (error.code === '23505') { // Unique constraint violation
        return { message: 'You have already RSVPd for this event with this email address.', success: false };
    }
    return { 
        message: 'Sorry, there was a server error processing your RSVP. Please try again later.',
        success: false 
    };
  }

  return { message: `Thank you for your RSVP, ${validatedFields.data.fullName}! We look forward to seeing you at the event.`, success: true };
}
