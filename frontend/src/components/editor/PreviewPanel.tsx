import { Monitor, Smartphone } from 'lucide-react';
import { useEditorStore } from '../../store/editorStore';
import { LinkButtonPreview } from '../widgets/LinkButton/LinkButtonPreview';
import { SocialMediaPreview } from '../widgets/SocialMedia/SocialMediaPreview';
import { SectionTitlePreview } from '../widgets/SectionTitle/SectionTitlePreview';
import { cn } from '../../lib/utils';

export function PreviewPanel() {
    const { widgets, profile, previewMode, setPreviewMode } = useEditorStore();

    return (
        <div className="h-full flex flex-col bg-gray-100">
            {/* Preview Header */}
            <div className="p-4 border-b border-gray-200 bg-white">
                <div className="flex items-center justify-between mb-3">
                    <h2 className="font-semibold text-lg">Preview</h2>

                    {/* Device Toggle */}
                    <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
                        <button
                            onClick={() => setPreviewMode('desktop')}
                            className={cn(
                                'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
                                previewMode === 'desktop'
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                            )}
                        >
                            <Monitor className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setPreviewMode('mobile')}
                            className={cn(
                                'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
                                previewMode === 'mobile'
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                            )}
                        >
                            <Smartphone className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <p className="text-xs text-gray-500">
                    {previewMode === 'desktop' ? 'Desktop View' : 'Mobile View'}
                </p>
            </div>

            {/* Preview Content */}
            <div className="flex-1 overflow-y-auto p-6">
                <div className="flex justify-center">
                    <div
                        className={cn(
                            'bg-white rounded-lg shadow-lg transition-all',
                            previewMode === 'desktop' ? 'w-full max-w-2xl' : 'w-full max-w-sm'
                        )}
                    >
                        {/* Profile Header */}
                        <div className="p-8 text-center border-b border-gray-100">
                            {profile.avatar && (
                                <img
                                    src={profile.avatar}
                                    alt={profile.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-4"
                                />
                            )}
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">
                                {profile.name}
                            </h1>
                            {profile.bio && (
                                <p className="text-gray-600">{profile.bio}</p>
                            )}
                        </div>

                        {/* Widgets */}
                        <div className="p-6 space-y-4">
                            {widgets.length === 0 ? (
                                <div className="text-center py-8 text-gray-400">
                                    <p>No widgets yet</p>
                                    <p className="text-sm">Add widgets to see them here</p>
                                </div>
                            ) : (
                                widgets.map((widget) => (
                                    <div key={widget.id}>
                                        {widget.type === 'link-button' && (
                                            <LinkButtonPreview widget={widget} />
                                        )}
                                        {widget.type === 'social-media' && (
                                            <SocialMediaPreview widget={widget} />
                                        )}
                                        {widget.type === 'section-title' && (
                                            <SectionTitlePreview widget={widget} />
                                        )}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
