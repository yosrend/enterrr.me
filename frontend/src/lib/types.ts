// Widget Types
export type WidgetType = 'link-button' | 'social-media' | 'section-title';

// Base Widget Interface
export interface BaseWidget {
    id: string;
    type: WidgetType;
    positionOrder: number;
}

// Link Button Widget
export interface LinkButtonWidget extends BaseWidget {
    type: 'link-button';
    data: {
        text: string;
        url: string;
        icon?: string;
        backgroundColor: string;
        textColor: string;
        borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'full';
    };
}

// Social Media Widget
export type SocialPlatform = 'twitter' | 'instagram' | 'linkedin' | 'github' | 'youtube' | 'tiktok' | 'facebook';

export interface SocialMediaWidget extends BaseWidget {
    type: 'social-media';
    data: {
        platform: SocialPlatform;
        handle: string;
        displayStyle: 'icon' | 'button' | 'card';
    };
}

// Section Title Widget
export interface SectionTitleWidget extends BaseWidget {
    type: 'section-title';
    data: {
        title: string;
        fontSize: 'sm' | 'md' | 'lg';
        alignment: 'left' | 'center' | 'right';
        showDivider: boolean;
    };
}

// Union type for all widgets
export type Widget = LinkButtonWidget | SocialMediaWidget | SectionTitleWidget;

// Profile Settings
export interface ProfileSettings {
    name: string;
    bio: string;
    slug: string;
    avatar?: string;
    themeColor: string;
}

// Editor State
export interface EditorState {
    widgets: Widget[];
    selectedWidgetId: string | null;
    profile: ProfileSettings;
    previewMode: 'desktop' | 'mobile';

    // Actions
    addWidget: (type: WidgetType) => void;
    deleteWidget: (id: string) => void;
    updateWidget: (id: string, data: Partial<Widget['data']>) => void;
    moveWidget: (id: string, direction: 'up' | 'down') => void;
    reorderWidgets: (newOrder: Widget[]) => void;
    selectWidget: (id: string | null) => void;
    updateProfile: (data: Partial<ProfileSettings>) => void;
    setPreviewMode: (mode: 'desktop' | 'mobile') => void;
    resetToDemo: () => void;
}
