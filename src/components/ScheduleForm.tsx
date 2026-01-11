'use client';

import { useActionState } from 'react';
import { submitScheduleRequest } from '@/actions/schedule';
import { Calendar, Clock, User, Mail, Phone, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { ServerActionResponse } from '@/types';

const initialState: ServerActionResponse = {
    success: false,
    message: '',
};

export default function ScheduleForm() {
    const [state, formAction, isPending] = useActionState(submitScheduleRequest, initialState);

    if (state?.success) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
            >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-600">
                    Thank you for your interest. Our team will contact you shortly to confirm your visit.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                    Schedule Another
                </button>
            </motion.div>
        );
    }

    return (
        <form action={formAction} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-brand-900 mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                Schedule a Visit
            </h2>

            <div className="space-y-6">
                {/* Personal Details */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <User className="w-4 h-4" /> Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all"
                        />
                        {state?.errors?.name && <p className="text-red-500 text-sm">{state.errors.name[0]}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <Mail className="w-4 h-4" /> Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all"
                        />
                        {state?.errors?.email && <p className="text-red-500 text-sm">{state.errors.email[0]}</p>}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <Phone className="w-4 h-4" /> Phone
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all"
                        />
                        {state?.errors?.phone && <p className="text-red-500 text-sm">{state.errors.phone[0]}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <Home className="w-4 h-4" /> Interested In
                        </label>
                        <select
                            name="interest"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all bg-white"
                        >
                            <option value="">Select Unit Type</option>
                            <option value="2BHK">2 BHK Luxury</option>
                            <option value="3BHK">3 BHK Premium</option>
                            <option value="4BHK">4 BHK Royal</option>
                            <option value="Investment">Investment</option>
                        </select>
                        {state?.errors?.interest && <p className="text-red-500 text-sm">{state.errors.interest[0]}</p>}
                    </div>
                </div>

                {/* Date & Time */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> Preferred Date
                        </label>
                        <input
                            type="date"
                            name="date"
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all"
                        />
                        {state?.errors?.date && <p className="text-red-500 text-sm">{state.errors.date[0]}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <Clock className="w-4 h-4" /> Time Slot
                        </label>
                        <select
                            name="timeSlot"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition-all bg-white"
                        >
                            <option value="">Select Time</option>
                            <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                            <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
                            <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
                            <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
                        </select>
                        {state?.errors?.timeSlot && <p className="text-red-500 text-sm">{state.errors.timeSlot[0]}</p>}
                    </div>
                </div>

                {state?.message && !state.success && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm">
                        {state.message}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full py-4 luxury-gradient text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isPending ? 'Scheduling...' : 'Confirm Schedule Visit Request'}
                </button>
            </div>
        </form>
    );
}
