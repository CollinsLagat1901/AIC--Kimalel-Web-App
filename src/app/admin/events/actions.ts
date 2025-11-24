
'use server';

import { z } from 'zod';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

const eventSchema = z.object({
  title: z.string().min(1, 'Title is required.'),
  date: z.date(),
  location: z.string().optional(),
  ministry: z.string().optional(),
  description: z.string().optional(),
  published: z.boolean(),
});

export async function addEvent(prevState: any, formData: FormData) {
  const supabase = createClient();
  
  const validatedFields = eventSchema.safeParse({
    title: formData.get('title'),
    date: new Date(formData.get('date') as string),
    location: formData.get('location'),
    ministry: formData.get('ministry'),
    description: formData.get('description'),
    published: formData.get('published') === 'on',
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      message: 'Invalid event data.',
      success: false,
    };
  }
  
  const { title, date, location, ministry, description, published } = validatedFields.data;

  const { error } = await supabase.from('events').insert({
    title,
    date: date.toISOString(),
    location,
    ministry,
    description,
    published,
    // The image_id is now optional or handled differently, so we remove the direct mapping
    // image_id: ministryDetails?.imageId || 'event-1', 
  });

  if (error) {
    console.error('Supabase error:', error.message);
    return {
      message: 'Failed to add event. Please try again.',
      success: false,
    };
  }

  revalidatePath('/admin/events');
  revalidatePath('/events');
  revalidatePath('/');
  return { message: 'Event added successfully!', success: true };
}
