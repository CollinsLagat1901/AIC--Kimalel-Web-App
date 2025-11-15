'use server';

import { z } from 'zod';
import { createClient } from '@/utils/supabase/server';

const contactFormSchema = z.object({
  fullName: z.string().min(2, { message: 'Please enter your full name.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(2, { message: 'Please enter a subject.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function handleContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    fullName: formData.get('fullName'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const firstError = Object.values(validatedFields.error.flatten().fieldErrors)[0]?.[0];
    return {
      message: firstError || 'There was an issue with your submission. Please check your details and try again.',
      success: false,
    };
  }
  
  const supabase = createClient();
  const { error } = await supabase
    .from('contacts')
    .insert([{ 
        full_name: validatedFields.data.fullName,
        email: validatedFields.data.email,
        subject: validatedFields.data.subject,
        message: validatedFields.data.message
    }]);

  if (error) {
    console.error('Supabase error:', error.message);
    return { 
        message: 'Sorry, there was a server error sending your message. Please try again later.',
        success: false 
    };
  }

  return { message: `Thank you for your message, ${validatedFields.data.fullName}! We will get back to you soon.`, success: true };
}
