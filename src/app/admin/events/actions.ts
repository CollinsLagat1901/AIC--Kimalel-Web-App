
'use server';

import { z } from 'zod';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

const eventSchema = z.object({
  title: z.string().min(1, 'Title is required.'),
  date: z.coerce.date(),
  location: z.string().optional(),
  ministry: z.string().optional(),
  description: z.string().optional(),
  published: z.boolean(),
});

export async function addEvent(prevState: any, formData: FormData) {
  const supabase = createClient();
  
  const validatedFields = eventSchema.safeParse({
    title: formData.get('title'),
    date: formData.get('date'),
    location: formData.get('location'),
    ministry: formData.get('ministry'),
    description: formData.get('description'),
    published: formData.get('published') === 'on',
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      message: 'Invalid event data. Please check all fields.',
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
