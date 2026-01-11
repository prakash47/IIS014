'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    Waves, Dumbbell, Flower2, Gamepad2, Baby, Trees,
    PartyPopper, Car, ShieldCheck, Zap, Droplets, PersonStanding
} from 'lucide-react';

const amenities = [
    { icon: <Waves className="w-12 h-12" />, title: 'Swimming Pool', description: 'Olympic-sized infinity pool' },
    { icon: <Dumbbell className="w-12 h-12" />, title: 'Fitness Center', description: 'State-of-the-art gym equipment' },
    { icon: <Flower2 className="w-12 h-12" />, title: 'Yoga Studio', description: 'Dedicated wellness space' },
    { icon: <Gamepad2 className="w-12 h-12" />, title: 'Gaming Zone', description: 'Entertainment for all ages' },
    { icon: <Baby className="w-12 h-12" />, title: 'Kids Play Area', description: 'Safe outdoor playground' },
    { icon: <Trees className="w-12 h-12" />, title: 'Landscaped Gardens', description: 'Lush green spaces' },
    { icon: <PartyPopper className="w-12 h-12" />, title: 'Clubhouse', description: 'Multi-purpose event hall' },
    { icon: <Car className="w-12 h-12" />, title: 'Covered Parking', description: 'Secure parking for residents' },
    { icon: <ShieldCheck className="w-12 h-12" />, title: '24/7 Security', description: 'CCTV surveillance & guards' },
    { icon: <Zap className="w-12 h-12" />, title: 'Power Backup', description: '100% backup for all units' },
    { icon: <Droplets className="w-12 h-12" />, title: 'Water Supply', description: '24x7 water availability' },
    { icon: <PersonStanding className="w-12 h-12" />, title: 'Jogging Track', description: 'Dedicated running path' },
];

export default function Amenities() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="amenities" ref={ref} className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-900 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                        World-Class Amenities
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Experience a lifestyle of comfort and convenience with our premium facilities
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {amenities.map((amenity, index) => (
                        <motion.div
                            key={amenity.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="group bg-white p-6 rounded-xl shadow-card hover-lift hover-glow cursor-pointer"
                        >
                            <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                                {amenity.icon}
                            </div>
                            <h3 className="text-lg font-bold text-brand-900 mb-2 group-hover:text-brand-600 transition-colors duration-300">
                                {amenity.title}
                            </h3>
                            <p className="text-sm text-gray-600">{amenity.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
