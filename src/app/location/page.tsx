'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Navigation, School, ShoppingBag, Plane, Stethoscope } from 'lucide-react';

const landmarks = [
    { icon: <School className="w-6 h-6" />, category: 'Education', places: ['International School (5 mins)', 'City University (15 mins)'] },
    { icon: <Stethoscope className="w-6 h-6" />, category: 'Healthcare', places: ['Medicare Multi-specialty (10 mins)', 'Apollo Clinic (8 mins)'] },
    { icon: <ShoppingBag className="w-6 h-6" />, category: 'Shopping', places: ['Phoenix Mall (12 mins)', 'High Street (5 mins)'] },
    { icon: <Plane className="w-6 h-6" />, category: 'Connectivity', places: ['International Airport (30 mins)', 'Metro Station (2 mins)'] },
];

export default function LocationPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <section className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-brand-900 mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                            The Pulse of the City
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Aria Residences boasts a location that is the envy of all. Nestled in the heart of the premium district, you are never more than a few minutes away from everything you need.
                        </p>

                        <div className="grid gap-6">
                            {landmarks.map((item, index) => (
                                <motion.div
                                    key={item.category}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex gap-4"
                                >
                                    <div className="text-brand-600 bg-brand-50 p-3 rounded-lg h-fit">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-brand-900 text-lg mb-2">{item.category}</h3>
                                        <ul className="space-y-1 text-gray-600">
                                            {item.places.map(place => <li key={place}>• {place}</li>)}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-[600px] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl relative group"
                    >
                        {/* Placeholder for map */}
                        <div className="absolute inset-0 bg-gray-300 animate-pulse flex items-center justify-center">
                            <span className="text-gray-500 font-semibold">Interactive Map Loading...</span>
                        </div>
                        {/* Overlay Card */}
                        <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-red-500 w-8 h-8 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Aria Residences</h3>
                                    <p className="text-gray-600 text-sm">Sector 15, Premium District, Mumbai, Maharashtra 400001</p>
                                    <button className="mt-3 flex items-center gap-2 text-brand-600 font-semibold text-sm hover:underline">
                                        <Navigation className="w-4 h-4" /> Get Directions
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
