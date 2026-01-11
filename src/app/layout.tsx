import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Aria Residences - Luxury Living Redefined',
    description: 'Discover your dream home at Aria Residences. Premium 2BHK and 3BHK apartments with world-class amenities in the heart of the city.',
    keywords: ['luxury apartments', 'real estate', 'aria residences', '2BHK', '3BHK', 'premium living'],
    authors: [{ name: 'Aria Residences' }],
    openGraph: {
        title: 'Aria Residences - Luxury Living Redefined',
        description: 'Discover your dream home at Aria Residences. Premium 2BHK and 3BHK apartments with world-class amenities.',
        type: 'website',
        locale: 'en_US',
        siteName: 'Aria Residences',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Aria Residences - Luxury Living Redefined',
        description: 'Discover your dream home at Aria Residences. Premium 2BHK and 3BHK apartments with world-class amenities.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'RealEstateAgent',
        name: 'Aria Residences',
        description: 'Luxury residential apartments with premium amenities',
        url: 'https://ariaresidences.com',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Mumbai',
            addressCountry: 'IN',
        },
    };

    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
