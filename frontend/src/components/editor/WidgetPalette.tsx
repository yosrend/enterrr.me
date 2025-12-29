import { Plus } from 'lucide-react';
import type { WidgetType } from '../../lib/types';
import { useEditorStore } from '../../store/editorStore';

const WIDGET_TYPES = [
    {
        type: 'link-button' as WidgetType,
        icon: '🔗',
        label: 'Link Button',
        description: 'Add a clickable link',
    },
    {
        type: 'social-media' as WidgetType,
        icon: '📱',
        label: 'Social Media',
        description: 'Link to social profiles',
    },
    {
        type: 'section-title' as WidgetType,
        icon: '📝',
        label: 'Section Title',
        description: 'Organize with headers',
    },
];

export function WidgetPalette() {
    const addWidget = useEditorStore((state) => state.addWidget);

    return (
        <div className="h-full flex flex-col">
            <div className="p-4 border-b border-gray-200">
                <h2 className="font-semibold text-lg">Add Widget</h2>
                <p className="text-sm text-gray-600 mt-1">Click to add to your page</p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {WIDGET_TYPES.map((widget) => (
                    <button
                        key={widget.type}
                        onClick={() => addWidget(widget.type)}
                        className="w-full text-left p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all group"
                    >
                        <div className="flex items-start gap-3">
                            <span className="text-2xl">{widget.icon}</span>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-medium text-gray-900 group-hover:text-primary-700">
                                    {widget.label}
                                </h3>
                                <p className="text-sm text-gray-500 mt-0.5">{widget.description}</p>
                            </div>
                            <Plus className="w-5 h-5 text-gray-400 group-hover:text-primary-600 flex-shrink-0" />
                        </div>
                    </button>
                ))}
            </div>

            <div className="p-4 border-t border-gray-200 bg-gray-50">
                <button
                    onClick={() => useEditorStore.getState().resetToDemo()}
                    className="w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    Reset to Demo
                </button>
            </div>
        </div>
    );
}
