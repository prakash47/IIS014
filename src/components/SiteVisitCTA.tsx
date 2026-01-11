'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock } from 'lucide-react';

export default function SiteVisitCTA() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-brand-900 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl"
                >
                    {/* Background Icon */}
                    <div className="absolute top-1/2 -right-10 -translate-y-1/2 text-white/5 pointer-events-none">
                        <Clock size={300} strokeWidth={1} />
                    </div>

                    <div className="relative z-10 text-center md:text-left">
                        <h2
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                            style={{ fontFamily: 'var(--font-playfair)' }}
                        >
                            Site Visits
                        </h2>

                        <p className="text-gray-300 text-lg mb-8 max-w-xl">
                            Schedule a personalized tour of our show residence.
                            Complimentary pick-up and drop-off available for verified appointments.
                        </p>

                        <Link
                            href="/schedule-visit"
                            className="block w-full md:w-auto text-center md:px-12 py-4 bg-gold-500 hover:bg-gold-400 text-brand-900 font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg"
                        >
                            Schedule Visit
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
