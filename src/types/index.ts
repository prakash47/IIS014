export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    preferredUnit: '2BHK' | '3BHK' | '4BHK';
    message?: string;
}

export interface ServerActionResponse {
    success: boolean;
    message: string;
    errors?: Record<string, string[]>;
}

export interface ScheduleFormData {
    name: string;
    email: string;
    phone: string;
    date: string;
    timeSlot: string;
    interest: '2BHK' | '3BHK' | '4BHK' | 'Investment';
}

export interface Amenity {
    id: string;
    icon: string;
    title: string;
    description: string;
}

export interface FloorPlan {
    id: string;
    type: '2BHK' | '3BHK' | '4BHK';
    area: string;
    price: string;
    imageUrl: string;
    features: string[];
}

export interface GalleryImage {
    id: string;
    url: string;
    alt: string;
    category: 'exterior' | 'interior' | 'amenities' | 'location';
}
