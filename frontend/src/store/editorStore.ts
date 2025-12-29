import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { EditorState, Widget, UserProfile } from '../lib/types';
import { WidgetType, type WidgetSize } from '../lib/types';
import { demoProfile, demoWidgets } from '../lib/mockData';

// Generate unique ID
const generateId = () => Math.random().toString(36).substring(2, 11);

// Default widget factory
function createDefaultWidget(type: WidgetType): Widget {
    const id = generateId();
    const defaults: Record<WidgetType, Partial<Widget>> = {
        [WidgetType.LINK]: { size: '2x1', title: 'New Link', description: 'Add your URL' },
        [WidgetType.SOCIAL]: { size: '1x1', title: 'Social' },
        [WidgetType.IMAGE]: { size: '2x2', title: 'Image', content: '' },
        [WidgetType.SPOTIFY]: { size: '2x1', title: 'Track', description: 'Artist' },
        [WidgetType.SECTION]: { size: '4x1', title: 'Section' },
        [WidgetType.TEXT]: { size: '2x2', title: 'Hello.', content: 'Write something here.' },
    };

    return {
        id,
        type,
        size: defaults[type].size as WidgetSize,
        ...defaults[type],
    };
}

export const useEditorStore = create<EditorState>()(
    persist(
        (set) => ({
            widgets: [],
            editingWidgetId: null,
            profile: demoProfile,

            addWidget: (type: WidgetType) => {
                const newWidget = createDefaultWidget(type);
                set((state) => ({
                    widgets: [...state.widgets, newWidget],
                }));
            },

            deleteWidget: (id: string) => {
                set((state) => ({
                    widgets: state.widgets.filter((w) => w.id !== id),
                    editingWidgetId: state.editingWidgetId === id ? null : state.editingWidgetId,
                }));
            },

            updateWidget: (id: string, updates: Partial<Widget>) => {
                set((state) => ({
                    widgets: state.widgets.map((w) =>
                        w.id === id ? { ...w, ...updates } : w
                    ),
                }));
            },

            resizeWidget: (id: string, size: WidgetSize) => {
                set((state) => ({
                    widgets: state.widgets.map((w) =>
                        w.id === id ? { ...w, size } : w
                    ),
                }));
            },

            reorderWidgets: (newOrder: Widget[]) => {
                set({ widgets: newOrder });
            },

            setEditingWidget: (id: string | null) => {
                set({ editingWidgetId: id });
            },

            updateProfile: (data: Partial<UserProfile>) => {
                set((state) => ({
                    profile: { ...state.profile, ...data },
                }));
            },

            resetToDemo: () => {
                set({
                    widgets: demoWidgets,
                    profile: demoProfile,
                    editingWidgetId: null,
                });
            },
        }),
        {
            name: 'enterrr-editor-storage',
        }
    )
);
