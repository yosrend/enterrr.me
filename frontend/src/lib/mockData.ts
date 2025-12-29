import type { Widget, UserProfile } from './types';
import { WidgetType } from './types';

export const demoProfile: UserProfile = {
    username: 'alex',
    displayName: 'Alex Rivera',
    bio: '👨‍💻 Full-stack developer | 🎨 UI/UX enthusiast | ☕ Coffee addict',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
    theme: {
        primary: '#000000',
        background: '#f7f7f7',
        cardStyle: 'extra-rounded',
    },
    widgets: [],
};

export const demoWidgets: Widget[] = [
    {
        id: 'w1',
        type: WidgetType.TEXT,
        size: '2x2',
        title: 'Hello.',
        content: 'I create tools that make design more accessible for everyone.',
    },
    {
        id: 'w2',
        type: WidgetType.LINK,
        size: '2x1',
        title: 'My Portfolio',
        description: 'Works from 2024',
    },
    {
        id: 'w3',
        type: WidgetType.SOCIAL,
        size: '1x1',
        title: 'Instagram',
    },
    {
        id: 'w4',
        type: WidgetType.SOCIAL,
        size: '1x1',
        title: 'Twitter',
    },
    {
        id: 'w5',
        type: WidgetType.SPOTIFY,
        size: '2x1',
        title: 'Night Mood',
        description: 'Lo-fi study beats',
    },
    {
        id: 'w6',
        type: WidgetType.IMAGE,
        size: '2x2',
        title: 'Abstract Art',
        content: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 'w7',
        type: WidgetType.SECTION,
        size: '4x1',
        title: 'Archives',
    },
    {
        id: 'w8',
        type: WidgetType.LINK,
        size: '1x1',
        title: 'CV',
    },
    {
        id: 'w9',
        type: WidgetType.LINK,
        size: '2x1',
        title: 'Read my latest blog post',
        description: '10 mins read',
    },
];
