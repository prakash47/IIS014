'use server';

import { after } from 'next/server';
import { contactFormSchema } from '@/lib/validation';
import { resend } from '@/lib/resend';
import type { ServerActionResponse } from '@/types';

export async function submitContactForm(
    _prevState: ServerActionResponse | null,
    formData: FormData
): Promise<ServerActionResponse> {
    try {
        // Extract and validate form data
        const rawData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            preferredUnit: formData.get('preferredUnit'),
            message: formData.get('message') || undefined,
        };

        const validationResult = contactFormSchema.safeParse(rawData);

        if (!validationResult.success) {
            return {
                success: false,
                message: 'Please correct the errors in the form',
                errors: validationResult.error.flatten().fieldErrors,
            };
        }

        const data = validationResult.data;

        // Schedule email sending as a background task using after()
        after(async () => {
            try {
                await resend.emails.send({
                    from: 'Aria Residences <noreply@ariaresidences.com>',
                    to: ['sales@ariaresidences.com'], // Replace with actual sales email
                    replyTo: data.email,
                    subject: `New Interest Registration - ${data.preferredUnit}`,
                    html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1a1a1a; border-bottom: 3px solid #d4af37; padding-bottom: 10px;">
                New Lead from Aria Residences Website
              </h2>
              <div style="margin: 20px 0;">
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>Preferred Unit:</strong> ${data.preferredUnit}</p>
                ${data.message ? `<p><strong>Message:</strong><br/>${data.message}</p>` : ''}
              </div>
              <p style="color: #666; font-size: 12px; margin-top: 30px;">
                This email was sent from the Aria Residences contact form.
              </p>
            </div>
          `,
                });
            } catch (emailError) {
                console.error('Failed to send email:', emailError);
                // Email failure doesn't affect user response
            }
        });

        return {
            success: true,
            message: 'Thank you for your interest! Our team will contact you shortly.',
        };
    } catch (error) {
        console.error('Contact form submission error:', error);
        return {
            success: false,
            message: 'An unexpected error occurred. Please try again later.',
        };
    }
}
