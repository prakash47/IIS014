'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const galleryItems = [
    { id: 1, category: 'Exterior', src: '/images/exterior-hero.png', title: 'Iconic Architecture' },
    { id: 2, category: 'Interior', src: '/images/interior-living.png', title: 'Grand Living Area' },
    { id: 3, category: 'Interior', src: '/images/interior-bedroom.png', title: 'Master Suite' },
    { id: 4, category: 'Interior', src: '/images/interior-kitchen.png', title: 'Gourmet Kitchen' },
    { id: 5, category: 'Amenities', src: '/images/amenity-pool.png', title: 'Infinity Edge Pool' },
    { id: 6, category: 'Amenities', src: '/images/amenity-gym.png', title: 'Fitness Centre' },
    { id: 7, category: 'Exterior', src: '/images/exterior-hero.png', title: 'Night Perspective' }, // Duplicate for demo
    { id: 8, category: 'Interior', src: '/images/interior-living.png', title: 'Dining Space' }, // Duplicate for demo
];

const categories = ['All', 'Exterior', 'Interior', 'Amenities'];

export default function GalleryPage() {
    const [filter, setFilter] = useState('All');

    const filteredItems = filter === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === filter);

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <section className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-brand-900 mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                        Visual Gallery
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Immerse yourself in the visual splendor of Aria Residences.
                    </p>
                </motion.div>

                {/* Filters */}
                <div className="flex justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === cat
                                    ? 'bg-brand-900 text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredItems.map((item) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            key={item.id + item.title} // Ensure unique key
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                                <p className="text-gold-400 text-sm font-medium">{item.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
