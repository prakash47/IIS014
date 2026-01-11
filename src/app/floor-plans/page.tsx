'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const plans = [
    {
        id: '2bhk',
        title: 'Luxury 2 BHK',
        area: '1,250 sq.ft',
        price: '₹85 Lakhs onwards',
        description: 'Perfect for young families, offering a blend of space and intimacy.',
        specs: ['2 Bedrooms', '2 Bathrooms', 'Spacious Living', 'Modular Kitchen'],
        image: '/images/floorplan-2bhk.png'
    },
    {
        id: '3bhk',
        title: 'Premium 3 BHK',
        area: '1,650 sq.ft',
        price: '₹1.15 Crores onwards',
        description: 'Expansive living spaces designed for those who appreciate luxury.',
        specs: ['3 Bedrooms', '3 Bathrooms', 'Servant Room', 'Large Balconies'],
        image: '/images/floorplan-2bhk.png' // Utilizing existing placeholder for now
    },
    {
        id: '4bhk',
        title: 'Royal 4 BHK',
        area: '2,100 sq.ft',
        price: '₹1.65 Crores onwards',
        description: 'The epitome of grandeur with panoramic city views.',
        specs: ['4 Bedrooms', '4 Bathrooms', 'Family Lounge', 'Private Lift Access'],
        image: '/images/floorplan-2bhk.png' // Utilizing existing placeholder
    }
];

export default function FloorPlansPage() {
    const [activePlan, setActivePlan] = useState('2bhk');

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <section className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-brand-900 mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                        Crafted Living Spaces
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore our thoughtfully designed layouts that maximize natural light, ventilation, and your comfort.
                    </p>
                </motion.div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {plans.map((plan) => (
                        <button
                            key={plan.id}
                            onClick={() => setActivePlan(plan.id)}
                            className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${activePlan === plan.id
                                    ? 'bg-brand-900 text-white shadow-xl scale-105'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {plan.title}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {plans.map((plan) => activePlan === plan.id && (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-8 rounded-2xl shadow-luxury"
                        >
                            <div className="bg-gray-100 rounded-xl overflow-hidden p-6 mb-6">
                                <img src={plan.image} alt={plan.title} className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="flex justify-between items-end">
                                <a href="/images/floorplan-2bhk.png" download className="text-brand-600 font-semibold hover:text-brand-800 underline">
                                    Download Brochure
                                </a>
                                <button className="bg-gold-500 text-brand-900 px-6 py-2 rounded-lg font-bold hover:bg-gold-400 transition-colors">
                                    Enquire Now
                                </button>
                            </div>
                        </motion.div>
                    ))}

                    {plans.map((plan) => activePlan === plan.id && (
                        <motion.div
                            key={`${plan.id}-details`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-sm text-gold-600 font-bold uppercase tracking-wider mb-2">Specifications</h3>
                                <h2 className="text-4xl font-bold text-brand-900 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>{plan.title}</h2>
                                <p className="text-xl text-gray-600 leading-relaxed">{plan.description}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-4 bg-brand-50 rounded-xl">
                                    <p className="text-brand-800 font-medium">Carpet Area</p>
                                    <p className="text-2xl font-bold text-brand-900">{plan.area}</p>
                                </div>
                                <div className="p-4 bg-gold-50 rounded-xl">
                                    <p className="text-brand-800 font-medium">Starting Price</p>
                                    <p className="text-2xl font-bold text-brand-900">{plan.price}</p>
                                </div>
                            </div>

                            <ul className="space-y-4">
                                {plan.specs.map((spec, i) => (
                                    <li key={i} className="flex items-center text-lg text-gray-700">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                        {spec}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
}
