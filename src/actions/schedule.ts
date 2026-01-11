'use server';

import { scheduleFormSchema } from '@/lib/validation';
import { resend } from '@/lib/resend';
import { ServerActionResponse } from '@/types';
import { after } from 'next/server';

export async function submitScheduleRequest(
    _prevState: ServerActionResponse | null,
    formData: FormData
): Promise<ServerActionResponse> {
    const rawData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        date: formData.get('date'),
        timeSlot: formData.get('timeSlot'),
        interest: formData.get('interest'),
    };

    const validatedFields = scheduleFormSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            success: false,
            message: 'Please check the form for errors',
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { name, email, phone, date, timeSlot, interest } = validatedFields.data;

    try {
        // In a real app, we would save to DB here

        // Send email in background
        after(async () => {
            try {
                await resend.emails.send({
                    from: 'Aria Residences <onboarding@resend.dev>',
                    to: 'saptdubey7@gmail.com', // Using the email from previous context or generic
                    subject: `New Site Visit Request: ${name}`,
                    html: `
                        <h2>New Site Visit Request</h2>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Preferred Date:</strong> ${date}</p>
                        <p><strong>Time Slot:</strong> ${timeSlot}</p>
                        <p><strong>Interest:</strong> ${interest}</p>
                    `,
                });
            } catch (error) {
                console.error('Failed to send email:', error);
            }
        });

        return {
            success: true,
            message: 'Your visit has been scheduled! We will confirm shortly.',
        };
    } catch (error) {
        return {
            success: false,
            message: 'Something went wrong. Please try again.',
        };
    }
}
