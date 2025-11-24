
'use server';

import { z } from 'zod';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

const sermonSchema = z.object({
  title: z.string().min(1, 'Title is required.'),
  preacher: z.string().min(1, 'Preacher is required.'),
  date: z.coerce.date(),
  description: z.string().optional(),
  published: z.boolean(),
});

export async function addSermon(prevState: any, formData: FormData) {
  const supabase = createClient();
  
  const validatedFields = sermonSchema.safeParse({
    title: formData.get('title'),
    preacher: formData.get('preacher'),
    date: formData.get('date'),
    description: formData.get('description'),
    published: formData.get('published') === 'on',
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      message: 'Invalid sermon data. Please check all fields.',
      success: false,
    };
  }
  
  const { title, preacher, date, description, published } = validatedFields.data;

  const { error } = await supabase.from('sermons').insert({
    title,
    preacher,
    date: date.toISOString(),
    description,
    published,
  });

  if (error) {
    console.error('Supabase error:', error.message);
    return {
      message: 'Failed to add sermon. Please try again.',
      success: false,
    };
  }

  revalidatePath('/admin/sermons');
  revalidatePath('/services'); // Revalidate public sermons page
  revalidatePath('/'); // Revalidate homepage for featured sermon
  return { message: 'Sermon added successfully!', success: true };
}
