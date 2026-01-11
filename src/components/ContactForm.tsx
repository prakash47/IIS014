'use client';

import { useActionState } from 'react';
import { submitContactForm } from '@/actions/contact';
import type { ServerActionResponse } from '@/types';

const initialState: ServerActionResponse = {
    success: false,
    message: '',
};

export default function ContactForm() {
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

    return (
        <div className="max-w-2xl mx-auto">
            <form action={formAction} className="space-y-6">
                {/* Name Field */}
                <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-300 group-hover:border-brand-400"
                        placeholder="Enter your full name"
                    />
                    {state.errors?.name && (
                        <p className="mt-2 text-sm text-red-600 animate-fade-in">{state.errors.name[0]}</p>
                    )}
                </div>

                {/* Email Field */}
                <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-300 group-hover:border-brand-400"
                        placeholder="your.email@example.com"
                    />
                    {state.errors?.email && (
                        <p className="mt-2 text-sm text-red-600 animate-fade-in">{state.errors.email[0]}</p>
                    )}
                </div>

                {/* Phone Field */}
                <div className="group">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-300 group-hover:border-brand-400"
                        placeholder="9876543210"
                    />
                    {state.errors?.phone && (
                        <p className="mt-2 text-sm text-red-600 animate-fade-in">{state.errors.phone[0]}</p>
                    )}
                </div>

                {/* Preferred Unit Field */}
                <div className="group">
                    <label htmlFor="preferredUnit" className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Unit Type <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="preferredUnit"
                        name="preferredUnit"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-300 group-hover:border-brand-400 bg-white"
                    >
                        <option value="">Select a unit type</option>
                        <option value="2BHK">2 BHK</option>
                        <option value="3BHK">3 BHK</option>
                        <option value="4BHK">4 BHK</option>
                    </select>
                    {state.errors?.preferredUnit && (
                        <p className="mt-2 text-sm text-red-600 animate-fade-in">{state.errors.preferredUnit[0]}</p>
                    )}
                </div>

                {/* Message Field */}
                <div className="group">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Additional Message (Optional)
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-300 group-hover:border-brand-400 resize-none"
                        placeholder="Tell us more about your requirements..."
                    />
                    {state.errors?.message && (
                        <p className="mt-2 text-sm text-red-600 animate-fade-in">{state.errors.message[0]}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full luxury-gradient text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                    {isPending ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                        </span>
                    ) : (
                        'Register Your Interest'
                    )}
                </button>

                {/* Success/Error Messages */}
                {state.message && (
                    <div
                        className={`p-4 rounded-lg animate-fade-in ${state.success
                                ? 'bg-green-50 border border-green-200 text-green-800'
                                : 'bg-red-50 border border-red-200 text-red-800'
                            }`}
                    >
                        <p className="font-medium">{state.message}</p>
                    </div>
                )}
            </form>
        </div>
    );
}
