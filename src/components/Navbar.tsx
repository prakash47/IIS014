'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Pages that have a dark hero section and can support transparent navbar
    const hasHeroSection = pathname === '/' || pathname === '/amenities';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/amenities', label: 'Amenities' },
        { href: '/floor-plans', label: 'Floor Plans' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/location', label: 'Location' },
        { href: '/contact', label: 'Contact' },
    ];

    // Determine if we should show the solid navbar style
    // Show solid if we are scrolled OR if we are on a page without a hero section
    const showSolidNav = isScrolled || !hasHeroSection;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showSolidNav ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a
                        href="#home"
                        className={`text-2xl font-bold transition-colors duration-300 ${showSolidNav ? 'text-brand-900' : 'text-white'
                            }`}
                        style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                        Aria Residences
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`font-medium transition-all duration-300 hover:scale-105 ${showSolidNav
                                    ? 'text-gray-700 hover:text-brand-600'
                                    : 'text-white hover:text-gold-300'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="/schedule-visit"
                            className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${showSolidNav
                                ? 'luxury-gradient text-white shadow-lg'
                                : 'bg-gold-500 text-brand-900 hover:bg-gold-400'
                                }`}
                        >
                            Schedule Visit
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${showSolidNav ? 'text-brand-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                            }`}
                        aria-label="Toggle mobile menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white border-t border-gray-200"
                    >
                        <div className="px-6 py-4 space-y-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block py-2 text-gray-700 hover:text-brand-600 font-medium transition-colors duration-300"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="/schedule-visit"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full py-3 luxury-gradient text-white text-center font-semibold rounded-lg"
                            >
                                Schedule Visit
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
