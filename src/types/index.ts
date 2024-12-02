export interface User {
    id: string;
    name: string;
    email: string;
    subscription?: Subscription;
}

export interface Subscription {
    id: string;
    userId: string;
    planId: string;
    startDate: Date;
    endDate: Date;
    status: 'active' | 'cancelled' | 'expired';
}

export interface Plan {
    id: string;
    name: string;
    description: string;
    price: number;
    features: string[];
    maxContent: number;
    maxPlaylists: number;
}

export interface Content {
    id: string;
    title: string;
    description: string;
    url: string;
    type: 'video' | 'image';
    createdAt: Date;
    userId: string;
    requiredPlanId: string;
}

export interface Playlist {
    id: string;
    name: string;
    description: string;
    items: PlaylistItem[];
    userId: string;
    createdAt: Date;
}

export interface PlaylistItem {
    id: string;
    contentId: string;
    order: number;
    addedAt: Date;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}
