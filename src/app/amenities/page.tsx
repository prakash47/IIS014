'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    Waves, Dumbbell, Flower2, Gamepad2, Baby, Trees,
    PartyPopper, Car, ShieldCheck, Zap, Droplets, PersonStanding,
    Wind, Coffee, BookOpen, Utensils
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const amenities = [
    { icon: <Waves className="w-12 h-12" />, title: 'Infinity Pool', description: 'Olympic-sized infinity pool with temperature control and sunset views.' },
    { icon: <Dumbbell className="w-12 h-12" />, title: 'World-Class Gym', description: 'State-of-the-art fitness center with personal trainers and latest equipment.' },
    { icon: <Flower2 className="w-12 h-12" />, title: 'Zen Yoga Studio', description: 'Peaceful sanctuary for yoga and meditation practices.' },
    { icon: <Gamepad2 className="w-12 h-12" />, title: 'Gaming Lounge', description: 'Interactive gaming zone with VR consoles and arcade classics.' },
    { icon: <Baby className="w-12 h-12" />, title: 'Kids Wonderland', description: 'Safe, creative, and monitored play area for children.' },
    { icon: <Trees className="w-12 h-12" />, title: 'Sky Gardens', description: 'Lush green landscaped gardens on the terrace level.' },
    { icon: <PartyPopper className="w-12 h-12" />, title: 'Grand Banquet', description: 'Elegant multipurpose hall for your celebrations and events.' },
    { icon: <Car className="w-12 h-12" />, title: 'Valet Parking', description: 'Secure multi-level parking with EV charging stations.' },
    { icon: <ShieldCheck className="w-12 h-12" />, title: '3-Tier Security', description: '24/7 CCTV surveillance, biometric access, and security personnel.' },
    { icon: <Zap className="w-12 h-12" />, title: 'Power Backup', description: '100% DG backup ensuring zero downtime.' },
    { icon: <Droplets className="w-12 h-12" />, title: 'Water Treatment', description: 'Advanced water purification and recycling plant.' },
    { icon: <PersonStanding className="w-12 h-12" />, title: 'Jogging Track', description: 'Rubberized jogging track amidst greenery.' },
    { icon: <Wind className="w-12 h-12" />, title: 'Central A/C', description: 'VRV Air conditioning systems in all common areas.' },
    { icon: <Coffee className="w-12 h-12" />, title: 'Cafeteria', description: 'Gourmet cafe serving healthy snacks and beverages.' },
    { icon: <BookOpen className="w-12 h-12" />, title: 'Library', description: 'Quiet reading lounge with a vast collection of books.' },
    { icon: <Utensils className="w-12 h-12" />, title: 'BBQ Area', description: 'Open-air barbecue station for weekend get-togethers.' },
];

export default function AmenitiesPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/amenity-pool.png"
                        alt="Amenities Hero"
                        className="object-cover"
                        fill
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 text-center text-white px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                        Lifestyle Beyond Compare
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto"
                    >
                        Indulge in a world of luxury where every amenity is curated for your comfort and pleasure.
                    </motion.p>
                </div>
            </section>

            {/* Grid Section */}
            <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {amenities.map((amenity, index) => (
                        <motion.div
                            key={amenity.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="bg-white p-8 rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 group border border-gray-100 hover:border-gold-300"
                        >
                            <div className="text-gold-500 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {amenity.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-900 mb-3 group-hover:text-gold-600 transition-colors">
                                {amenity.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {amenity.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
