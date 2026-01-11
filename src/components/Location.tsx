'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const locationHighlights = [
    { icon: '🏥', title: 'Hospitals', distance: '2 km', name: 'City Hospital' },
    { icon: '🏫', title: 'Schools', distance: '1.5 km', name: 'International School' },
    { icon: '🏪', title: 'Shopping', distance: '3 km', name: 'Metro Mall' },
    { icon: '✈️', title: 'Airport', distance: '15 km', name: 'International Airport' },
    { icon: '🚇', title: 'Metro', distance: '500 m', name: 'Metro Station' },
    { icon: '🍽️', title: 'Restaurants', distance: '1 km', name: 'Food Street' },
];

export default function Location() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="location" ref={ref} className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-900 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                        Prime Location
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Strategically located in the heart of the city with excellent connectivity
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Map Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative aspect-square lg:aspect-auto lg:h-[500px] bg-gray-200 rounded-2xl overflow-hidden shadow-luxury hover-lift"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-gray-500">
                                <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p className="text-lg font-semibold">Interactive Map</p>
                                <p className="text-sm">Location visualization</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Location Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-bold text-brand-900 mb-6">Nearby Landmarks</h3>
                        {locationHighlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: 20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                                className="group flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-card transition-all duration-300 cursor-pointer"
                            >
                                <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                                    {item.icon}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors duration-300">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-600">{item.name}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-brand-600">{item.distance}</p>
                                    <p className="text-xs text-gray-500">away</p>
                                </div>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="mt-8 p-6 luxury-gradient rounded-xl text-white"
                        >
                            <h4 className="text-xl font-bold mb-2">Address</h4>
                            <p className="opacity-90">
                                Aria Residences, Sector 15<br />
                                Mumbai, Maharashtra 400001<br />
                                India
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
