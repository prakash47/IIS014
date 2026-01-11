import { z } from 'zod';

export const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name must be less than 100 characters')
        .regex(/^[a-zA-Z\s]+$/, 'Name must contain only letters and spaces'),
    email: z
        .string()
        .email('Please enter a valid email address')
        .toLowerCase(),
    phone: z
        .string()
        .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
    preferredUnit: z.enum(['2BHK', '3BHK', '4BHK'], {
        errorMap: () => ({ message: 'Please select a valid unit type' }),
    }),
    message: z
        .string()
        .max(500, 'Message must be less than 500 characters')
        .optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
export const scheduleFormSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().min(10, 'Please enter a valid phone number'),
    date: z.string().min(1, 'Please select a preferred date'),
    timeSlot: z.string().min(1, 'Please select a preferred time slot'),
    interest: z.enum(['2BHK', '3BHK', '4BHK', 'Investment'], {
        errorMap: () => ({ message: 'Please select an interest type' }),
    }),
});
