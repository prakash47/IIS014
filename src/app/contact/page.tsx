'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <section className="pt-32 pb-24 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-50 opacity-50 -skew-x-12 transform translate-x-20" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-brand-900 mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Get in Touch
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Begin your journey towards owning a masterpiece. Our team is here to assist you with every query.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <h3 className="text-2xl font-bold text-brand-900 mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                                    Sales Office
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-brand-50 rounded-lg text-brand-600">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Address</h4>
                                            <p className="text-gray-600">Aria Residences Experience Center,<br />Sector 15, Premium District,<br />Mumbai, Maharashtra 400001</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-brand-50 rounded-lg text-brand-600">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Phone</h4>
                                            <p className="text-gray-600">+91 98765 43210</p>
                                            <p className="text-gray-500 text-sm">Mon-Sun, 10 AM - 7 PM</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-brand-50 rounded-lg text-brand-600">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Email</h4>
                                            <p className="text-gray-600">sales@ariaresidences.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-brand-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Clock className="w-32 h-32" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10" style={{ fontFamily: 'var(--font-playfair)' }}>
                                    Site Visits
                                </h3>
                                <p className="mb-6 relative z-10 text-gray-300">
                                    Schedule a personalized tour of our show residence. Complimentary pick-up and drop-off available for verified appointments.
                                </p>
                                <button className="w-full py-3 bg-gold-500 text-brand-900 font-bold rounded-lg hover:bg-gold-400 transition-colors relative z-10">
                                    Schedule Visit
                                </button>
                            </div>
                        </motion.div>

                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white p-8 md:p-12 rounded-3xl shadow-luxury border-t-4 border-brand-600"
                        >
                            <h3 className="text-3xl font-bold text-brand-900 mb-2">Register Interest</h3>
                            <p className="text-gray-600 mb-8">Fill out the form below and our relationship manager will contact you shortly.</p>
                            <ContactForm />
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
