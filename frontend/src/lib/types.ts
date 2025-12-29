// Widget Size Types
export type WidgetSize = '1x1' | '2x1' | '1x2' | '2x2' | '4x1';

// Widget Types (using const instead of enum for erasableSyntaxOnly)
export const WidgetType = {
    LINK: 'LINK',
    SOCIAL: 'SOCIAL',
    IMAGE: 'IMAGE',
    SPOTIFY: 'SPOTIFY',
    SECTION: 'SECTION',
    TEXT: 'TEXT',
} as const;

export type WidgetType = (typeof WidgetType)[keyof typeof WidgetType];

// Widget Interface
export interface Widget {
    id: string;
    type: WidgetType;
    size: WidgetSize;
    title?: string;
    description?: string;
    content?: string;
    icon?: string;
    backgroundColor?: string;
    textColor?: string;
}

// User Profile Interface
export interface UserProfile {
    username: string;
    displayName: string;
    bio: string;
    avatar: string;
    theme: {
        primary: string;
        background: string;
        cardStyle: 'rounded' | 'sharp' | 'extra-rounded';
    };
    widgets: Widget[];
}

// Editor State
export interface EditorState {
    widgets: Widget[];
    editingWidgetId: string | null;
    profile: UserProfile;

    // Actions
    addWidget: (type: WidgetType) => void;
    deleteWidget: (id: string) => void;
    updateWidget: (id: string, updates: Partial<Widget>) => void;
    resizeWidget: (id: string, size: WidgetSize) => void;
    reorderWidgets: (newOrder: Widget[]) => void;
    setEditingWidget: (id: string | null) => void;
    updateProfile: (data: Partial<UserProfile>) => void;
    resetToDemo: () => void;
}
