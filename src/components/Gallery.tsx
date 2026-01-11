'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const categories = ['All', 'Exterior', 'Interior', 'Amenities', 'Location'] as const;
type Category = typeof categories[number];

const galleryImages = [
    { id: '1', category: 'Exterior' as Category, alt: 'Building exterior view', src: '/images/exterior-hero.png' },
    { id: '2', category: 'Interior' as Category, alt: 'Luxury living room', src: '/images/interior-living.png' },
    { id: '3', category: 'Interior' as Category, alt: 'Master Bedroom', src: '/images/interior-bedroom.png' },
    { id: '4', category: 'Interior' as Category, alt: 'Modern kitchen', src: '/images/interior-kitchen.png' },
    { id: '5', category: 'Amenities' as Category, alt: 'Infinity Swimming pool', src: '/images/amenity-pool.png' },
    { id: '6', category: 'Amenities' as Category, alt: 'State-of-the-art Gym', src: '/images/amenity-gym.png' },
];

export default function Gallery() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [activeCategory, setActiveCategory] = useState<Category>('All');

    const filteredImages = activeCategory === 'All'
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory);

    return (
        <section id="gallery" ref={ref} className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-900 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                        Gallery
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Take a virtual tour of Aria Residences and envision your future home
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === category
                                ? 'luxury-gradient text-white shadow-xl scale-105'
                                : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-lg'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="group relative aspect-square bg-gray-200 rounded-xl overflow-hidden cursor-pointer hover-lift"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                            <div className="absolute inset-0">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <p className="font-semibold">{image.alt}</p>
                                <p className="text-sm opacity-90">{image.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
