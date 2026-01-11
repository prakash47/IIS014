'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScheduleForm from '@/components/ScheduleForm';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ScheduleVisitPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Header Section */}
            <div className="bg-brand-900 text-white pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                        Experience It Yourself
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Book a personalized site visit to Aria Residences. Our relationship managers will guide you through the property and answer all your questions.
                    </motion.p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-10 pb-24">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Information Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-1 space-y-6"
                    >
                        <div className="bg-white p-8 rounded-2xl shadow-card">
                            <h3 className="text-xl font-bold text-brand-900 mb-6">Visit Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-gold-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Site Address</p>
                                        <p className="text-gray-600 text-sm mt-1">
                                            Aria Residences, Sector 45,
                                            <br />Palm Avenue, Mumbai - 400001
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-5 h-5 text-gold-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Visiting Hours</p>
                                        <p className="text-gray-600 text-sm mt-1">
                                            Mon - Sun: 10:00 AM - 7:00 PM
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-gold-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Contact Us</p>
                                        <p className="text-gray-600 text-sm mt-1">
                                            +91 98765 43210
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-gold-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Email</p>
                                        <p className="text-gray-600 text-sm mt-1">
                                            sales@ariaresidences.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-brand-900 p-8 rounded-2xl shadow-card text-white">
                            <h3 className="text-xl font-bold mb-4">Pick-up Service</h3>
                            <p className="text-gray-300 text-sm mb-4">
                                We offer complimentary pick-up and drop services for site visits within a 15km radius.
                            </p>
                            <p className="text-gold-400 text-sm font-semibold">
                                *Mention in remarks if required
                            </p>
                        </div>
                    </motion.div>

                    {/* Form Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-2"
                    >
                        <ScheduleForm />
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
