'use server';

import { z } from 'zod';
import { askAiAboutSermon } from '@/ai/flows/ai-sermon-assistant';
import { createClient } from '@/utils/supabase/server';

export async function handleSermonQuery(sermonTranscript: string, question: string) {
  if (!process.env.GEMINI_API_KEY) {
    return { success: false, error: 'The AI assistant is not configured. Please add your Google AI API key.' };
  }
  if (!question) {
    return { success: false, error: 'Please enter a question.' };
  }
  if (!sermonTranscript) {
    return { success: false, error: 'Sermon transcript is not available.' };
  }

  try {
    const result = await askAiAboutSermon({ sermonTranscript, question });
    return { success: true, answer: result.answer };
  } catch (error) {
    console.error('Error querying AI about sermon:', error);
    return { success: false, error: 'Sorry, I encountered an error while processing your question. Please try again.' };
  }
}


const newsletterSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

export async function handleNewsletterSignup(prevState: any, formData: FormData) {
  const validatedFields = newsletterSchema.safeParse({
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.email?.[0] || 'Invalid input.',
    };
  }
  
  const supabase = createClient();
  const { error } = await supabase
    .from('subscribers')
    .insert([{ email: validatedFields.data.email }]);

  if (error) {
    console.error('Supabase error:', error.message);
    if (error.code === '23505') { // Unique violation
        return { message: 'This email address is already subscribed.' };
    }
    return { message: 'Sorry, there was an error. Please try again.' };
  }

  return { message: `Thank you for subscribing! Welcome to our community.` };
}
