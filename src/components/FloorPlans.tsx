'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const floorPlans = [
    {
        id: '1',
        type: '2BHK' as const,
        area: '1,250 sq.ft',
        price: '₹85 Lakhs onwards',
        features: ['2 Bedrooms', '2 Bathrooms', 'Living Room', 'Kitchen', 'Balcony'],
    },
    {
        id: '2',
        type: '3BHK' as const,
        area: '1,650 sq.ft',
        price: '₹1.15 Crores onwards',
        features: ['3 Bedrooms', '3 Bathrooms', 'Living Room', 'Kitchen', '2 Balconies', 'Utility Area'],
    },
    {
        id: '3',
        type: '4BHK' as const,
        area: '2,100 sq.ft',
        price: '₹1.65 Crores onwards',
        features: ['4 Bedrooms', '4 Bathrooms', 'Living Room', 'Dining Room', 'Kitchen', '3 Balconies', 'Servant Room'],
    },
];

export default function FloorPlans() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

    return (
        <>
            <section id="floor-plans" ref={ref} className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-900 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Floor Plans
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Choose from our thoughtfully designed layouts that maximize space and natural light
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {floorPlans.map((plan, index) => (
                            <motion.div
                                key={plan.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-card hover-lift overflow-hidden border border-gray-100"
                            >
                                <div className="luxury-gradient p-6 text-white">
                                    <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                                        {plan.type}
                                    </h3>
                                    <p className="text-lg opacity-90">{plan.area}</p>
                                </div>

                                <div className="p-6">
                                    <div className="mb-6">
                                        <p className="text-sm text-gray-500 mb-1">Starting from</p>
                                        <p className="text-2xl font-bold text-brand-900">{plan.price}</p>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                                        <ul className="space-y-2">
                                            {plan.features.map((feature) => (
                                                <li key={feature} className="flex items-center text-gray-600">
                                                    <svg className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button
                                        onClick={() => setSelectedPlan(plan.id)}
                                        className="w-full py-3 bg-brand-600 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-brand-700 hover:shadow-xl group-hover:scale-105"
                                    >
                                        View Floor Plan
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal/Lightbox */}
            {selectedPlan && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setSelectedPlan(null)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl max-w-4xl w-full p-8 relative animate-scale-in"
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedPlan(null)}
                            className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                            aria-label="Close modal"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <h3 className="text-3xl font-bold text-brand-900 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                            {floorPlans.find((p) => p.id === selectedPlan)?.type} Floor Plan
                        </h3>

                        <div className="bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center min-h-[400px] relative">
                            <Image
                                src="/images/floorplan-2bhk.png"
                                alt="Floor Plan Schematic"
                                className="object-contain p-4"
                                fill
                                sizes="(max-width: 1024px) 100vw, 800px"
                            />
                        </div>

                        <div className="mt-6 flex gap-4">
                            <a
                                href="#contact"
                                onClick={() => setSelectedPlan(null)}
                                className="flex-1 py-3 luxury-gradient text-white font-semibold rounded-lg text-center transition-all duration-300 hover:shadow-xl"
                            >
                                Register Interest
                            </a>
                            <button className="flex-1 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg transition-all duration-300 hover:bg-gray-200">
                                Download Brochure
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
}
