import type { Widget, ProfileSettings } from './types';
import { generateId } from './utils';

export const demoProfile: ProfileSettings = {
    name: 'Alex Johnson',
    bio: '👨‍💻 Full-stack developer | 🎨 UI/UX enthusiast | ☕ Coffee addict',
    slug: 'alexjohnson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
    themeColor: '#3B82F6',
};

export const demoWidgets: Widget[] = [
    {
        id: generateId(),
        type: 'section-title',
        positionOrder: 0,
        data: {
            title: '🔗 Links',
            fontSize: 'lg',
            alignment: 'left',
            showDivider: true,
        },
    },
    {
        id: generateId(),
        type: 'link-button',
        positionOrder: 1,
        data: {
            text: 'My Portfolio',
            url: 'https://alexjohnson.com',
            backgroundColor: '#3B82F6',
            textColor: '#FFFFFF',
            borderRadius: 'lg',
        },
    },
    {
        id: generateId(),
        type: 'link-button',
        positionOrder: 2,
        data: {
            text: 'Latest Blog Post',
            url: 'https://blog.alexjohnson.com',
            backgroundColor: '#10B981',
            textColor: '#FFFFFF',
            borderRadius: 'lg',
        },
    },
    {
        id: generateId(),
        type: 'section-title',
        positionOrder: 3,
        data: {
            title: '📱 Social Media',
            fontSize: 'lg',
            alignment: 'left',
            showDivider: true,
        },
    },
    {
        id: generateId(),
        type: 'social-media',
        positionOrder: 4,
        data: {
            platform: 'twitter',
            handle: '@alexjohnson',
            displayStyle: 'button',
        },
    },
    {
        id: generateId(),
        type: 'social-media',
        positionOrder: 5,
        data: {
            platform: 'github',
            handle: 'alexjohnson',
            displayStyle: 'button',
        },
    },
    {
        id: generateId(),
        type: 'social-media',
        positionOrder: 6,
        data: {
            platform: 'linkedin',
            handle: 'alexjohnson',
            displayStyle: 'button',
        },
    },
];
