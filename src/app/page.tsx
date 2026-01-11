'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import SiteVisitCTA from '@/components/SiteVisitCTA';
import { ArrowRight, Star, Shield, Leaf } from 'lucide-react';

export default function Home() {
    return (
        <main className="bg-white">
            <Navbar />
            <Hero />

            {/* Value Proposition Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gray-50 -skew-y-3 transform origin-top-left scale-110 z-0" />
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-900 mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Why Choose Aria?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            More than just a home, Aria Residences is a testament to refined living.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Star className="w-8 h-8 text-gold-500" />, title: 'Premium Aesthetics', desc: 'Designed by award-winning architects with attention to every detail.' },
                            { icon: <Shield className="w-8 h-8 text-gold-500" />, title: 'Secure Living', desc: 'Advanced 3-tier security system ensuring peace of mind for you and your family.' },
                            { icon: <Leaf className="w-8 h-8 text-gold-500" />, title: 'Eco-Conscious', desc: 'IGBC Gold certified green building with sustainable living features.' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white p-8 rounded-2xl shadow-card hover:shadow-luxury transition-all duration-300 border-t-4 border-transparent hover:border-gold-500"
                            >
                                <div className="mb-4 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center">{item.icon}</div>
                                <h3 className="text-xl font-bold text-brand-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lifestyle Teaser */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl skew-x-3 hover:skew-x-0 transition-transform duration-700 h-[400px]">
                                <Image
                                    src="/images/amenity-pool.png"
                                    alt="Lifestyle"
                                    className="object-cover"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white z-10">
                                    <p className="font-bold text-lg">Infinity Pool</p>
                                </div>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-2/3 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden md:block h-[250px] relative">
                                <Image
                                    src="/images/amenity-gym.png"
                                    alt="Gym"
                                    className="object-cover"
                                    fill
                                    sizes="(max-width: 768px) 0vw, 33vw"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-900 mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                                Curated for the Elite
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Experience a lifestyle that transcends the ordinary. From our Olympic-sized infinity pool to the state-of-the-art fitness center, every amenity at Aria Residences is designed to pamper your senses.
                            </p>
                            <div className="flex gap-4">
                                <a href="/amenities" className="group flex items-center gap-2 px-6 py-3 bg-brand-900 text-white rounded-lg hover:bg-brand-800 transition-colors">
                                    Explore Amenities <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a href="/gallery" className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                                    View Gallery
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Apartments Teaser */}
            <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Spaces That Inspire
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Choose from our range of meticulously designed 2, 3, and 4 BHK residences.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {['2 BHK Luxury', '3 BHK Premium', '4 BHK Royal'].map((plan) => (
                            <motion.div
                                key={plan}
                                whileHover={{ y: -10 }}
                                className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-all cursor-pointer"
                            >
                                <h3 className="text-2xl font-bold mb-2">{plan}</h3>
                                <p className="text-gray-300 mb-6">Starting from ₹85 Lakhs</p>
                                <a href="/floor-plans" className="text-gold-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                    View Plan <ArrowRight className="w-4 h-4" />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Site Visit CTA */}
            <SiteVisitCTA />

            <Footer />
        </main>
    );
}
