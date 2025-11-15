
'use server';

import { z } from 'zod';
import { createClient } from '@/utils/supabase/server';

const ministrySignupSchema = z.object({
  fullName: z.string().min(2, { message: 'Please enter your full name.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  ministry: z.string(),
  childName: z.string().optional(),
  childAge: z.string().optional(),
});

export async function handleMinistrySignup(prevState: any, formData: FormData) {
    const ministry = formData.get('ministry');
  
    const validatedFields = ministrySignupSchema.safeParse({
        fullName: formData.get('fullName') || formData.get('parentName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        ministry: ministry,
        childName: formData.get('childName'),
        childAge: formData.get('childAge')
    });


  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;
    const errorMessage = fieldErrors.fullName?.[0] || fieldErrors.email?.[0] || fieldErrors.phone?.[0] || 'Invalid input. Please check all fields.';
    return {
      message: errorMessage,
      success: false,
    };
  }
  
  const supabase = createClient();
  const { error } = await supabase
    .from('ministry_signups')
    .insert([{ 
        full_name: validatedFields.data.fullName,
        email: validatedFields.data.email,
        phone: validatedFields.data.phone,
        ministry: validatedFields.data.ministry,
        meta: ministry === "Children's Ministry" ? { childName: validatedFields.data.childName, childAge: validatedFields.data.childAge } : {}
    }]);

  if (error) {
    console.error('Supabase error:', error.message);
    return { 
        message: 'Sorry, there was a server error processing your signup. Please try again later.',
        success: false 
    };
  }

  return { message: `Thank you for your interest, ${validatedFields.data.fullName}! We will be in touch shortly.`, success: true };
}
