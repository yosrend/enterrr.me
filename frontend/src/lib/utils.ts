import { clsx, type ClassValue } from 'clsx';

// Utility to merge Tailwind classes
export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}

// Generate unique ID
export function generateId(): string {
    return Math.random().toString(36).substring(2, 11);
}

// Format date
export function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    }).format(date);
}

// Validate URL
export function isValidUrl(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

// Validate slug (alphanumeric, hyphens, underscores only)
export function isValidSlug(slug: string): boolean {
    return /^[a-z0-9_-]+$/.test(slug);
}

// Truncate text
export function truncate(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
}

// Get platform icon name from Iconify
export function getSocialIcon(platform: string): string {
    const icons: Record<string, string> = {
        twitter: 'ri:twitter-x-fill',
        instagram: 'ri:instagram-fill',
        linkedin: 'ri:linkedin-fill',
        github: 'ri:github-fill',
        youtube: 'ri:youtube-fill',
        tiktok: 'ri:tiktok-fill',
        facebook: 'ri:facebook-fill',
    };
    return icons[platform] || 'ri:link';
}

// Get social platform URL
export function getSocialUrl(platform: string, handle: string): string {
    // Remove @ if present
    const cleanHandle = handle.replace('@', '');

    const urls: Record<string, string> = {
        twitter: `https://twitter.com/${cleanHandle}`,
        instagram: `https://instagram.com/${cleanHandle}`,
        linkedin: `https://linkedin.com/in/${cleanHandle}`,
        github: `https://github.com/${cleanHandle}`,
        youtube: `https://youtube.com/@${cleanHandle}`,
        tiktok: `https://tiktok.com/@${cleanHandle}`,
        facebook: `https://facebook.com/${cleanHandle}`,
    };

    return urls[platform] || `https://${cleanHandle}`;
}

// Border radius class map
export function getBorderRadiusClass(radius: string): string {
    const classes: Record<string, string> = {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
    };
    return classes[radius] || 'rounded-md';
}

// Font size class map
export function getFontSizeClass(size: string): string {
    const classes: Record<string, string> = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
    };
    return classes[size] || 'text-base';
}

// Text alignment class map
export function getTextAlignClass(alignment: string): string {
    const classes: Record<string, string> = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };
    return classes[alignment] || 'text-left';
}
