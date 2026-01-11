import { Resend } from 'resend';

// Only throw error at runtime if trying to send email without key
// This allows build to pass
const apiKey = process.env.RESEND_API_KEY || 're_123456789'; // Dummy key for build

export const resend = new Resend(apiKey);

