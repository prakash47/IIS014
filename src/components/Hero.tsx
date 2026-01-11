'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section
            id="home"
            ref={ref}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900"
        >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0">
                <Image
                    src="/images/exterior-hero.png"
                    alt="Aria Residences Exterior"
                    className="object-cover opacity-40"
                    fill
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-900/90 via-brand-800/80 to-brand-900/90 mix-blend-multiply"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-block mb-6"
                    >
                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500/20 border border-gold-400/30 rounded-full text-gold-300 font-semibold text-sm backdrop-blur-sm">
                            <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></span>
                            Now Accepting Registrations
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                        Aria Residences
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        Where luxury meets lifestyle. Experience premium living in the heart of the city with world-class amenities and breathtaking views.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <a
                            href="#contact"
                            className="group px-8 py-4 bg-gold-500 text-brand-900 font-bold rounded-lg transition-all duration-300 hover:bg-gold-400 hover:shadow-2xl hover:shadow-gold-500/50 hover:scale-105"
                        >
                            Register Your Interest
                            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </a>
                        <a
                            href="#floor-plans"
                            className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/20 hover:shadow-xl"
                        >
                            View Floor Plans
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                    >
                        {[
                            { value: '200+', label: 'Premium Units' },
                            { value: '25+', label: 'Amenities' },
                            { value: '2-4', label: 'BHK Options' },
                            { value: '100%', label: 'Vastu Compliant' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                className="glass-effect p-6 rounded-xl hover-lift"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-300">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>


        </section>
    );
}
