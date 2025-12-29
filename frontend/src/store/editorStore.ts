import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { EditorState, Widget, WidgetType, ProfileSettings } from '../lib/types';
import { generateId } from '../lib/utils';
import { demoProfile, demoWidgets } from '../lib/mockData';

// Helper function to create default widget
function createDefaultWidget(type: WidgetType, order: number): Widget {
    const id = generateId();
    const base = { id, positionOrder: order };

    switch (type) {
        case 'link-button':
            return {
                ...base,
                type: 'link-button',
                data: {
                    text: 'New Link',
                    url: 'https://example.com',
                    backgroundColor: '#3B82F6',
                    textColor: '#FFFFFF',
                    borderRadius: 'md',
                },
            };
        case 'social-media':
            return {
                ...base,
                type: 'social-media',
                data: {
                    platform: 'twitter',
                    handle: '@username',
                    displayStyle: 'button',
                },
            };
        case 'section-title':
            return {
                ...base,
                type: 'section-title',
                data: {
                    title: 'Section Title',
                    fontSize: 'md',
                    alignment: 'left',
                    showDivider: true,
                },
            };
    }
}

export const useEditorStore = create<EditorState>()(
    persist(
        (set, get) => ({
            widgets: [],
            selectedWidgetId: null,
            profile: {
                name: 'Your Name',
                bio: 'Tell the world about yourself',
                slug: 'yourname',
                themeColor: '#3B82F6',
            },
            previewMode: 'desktop',

            addWidget: (type: WidgetType) => {
                const widgets = get().widgets;
                const newWidget = createDefaultWidget(type, widgets.length);
                set({
                    widgets: [...widgets, newWidget],
                    selectedWidgetId: newWidget.id,
                });
            },

            deleteWidget: (id: string) => {
                set((state) => {
                    const newWidgets = state.widgets.filter((w) => w.id !== id);
                    // Update position orders
                    newWidgets.forEach((w, i) => {
                        w.positionOrder = i;
                    });
                    return {
                        widgets: newWidgets,
                        selectedWidgetId: state.selectedWidgetId === id ? null : state.selectedWidgetId,
                    };
                });
            },

            updateWidget: (id: string, data: any) => {
                set((state) => ({
                    widgets: state.widgets.map((w) =>
                        w.id === id ? { ...w, data: { ...w.data, ...data } } : w
                    ),
                }));
            },

            moveWidget: (id: string, direction: 'up' | 'down') => {
                const widgets = get().widgets;
                const index = widgets.findIndex((w) => w.id === id);
                if (index === -1) return;

                const newIndex = direction === 'up' ? index - 1 : index + 1;
                if (newIndex < 0 || newIndex >= widgets.length) return;

                const newWidgets = [...widgets];
                [newWidgets[index], newWidgets[newIndex]] = [newWidgets[newIndex], newWidgets[index]];

                // Update position orders
                newWidgets.forEach((w, i) => {
                    w.positionOrder = i;
                });

                set({ widgets: newWidgets });
            },

            reorderWidgets: (newOrder: Widget[]) => {
                // Update position orders
                newOrder.forEach((w, i) => {
                    w.positionOrder = i;
                });
                set({ widgets: newOrder });
            },

            selectWidget: (id: string | null) => {
                set({ selectedWidgetId: id });
            },

            updateProfile: (data: Partial<ProfileSettings>) => {
                set((state) => ({
                    profile: { ...state.profile, ...data },
                }));
            },

            setPreviewMode: (mode: 'desktop' | 'mobile') => {
                set({ previewMode: mode });
            },

            resetToDemo: () => {
                set({
                    widgets: demoWidgets,
                    profile: demoProfile,
                    selectedWidgetId: null,
                    previewMode: 'desktop',
                });
            },
        }),
        {
            name: 'enterrr-editor-storage',
        }
    )
);
