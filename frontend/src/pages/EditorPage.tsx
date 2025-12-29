import { ArrowLeft, Eye, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEditorStore } from '../store/editorStore';
import { WidgetPalette } from '../components/editor/WidgetPalette';
import { CanvasArea } from '../components/editor/CanvasArea';
import { PreviewPanel } from '../components/editor/PreviewPanel';
import { LinkButtonForm } from '../components/widgets/LinkButton/LinkButtonForm';
import { SocialMediaForm } from '../components/widgets/SocialMedia/SocialMediaForm';
import { SectionTitleForm } from '../components/widgets/SectionTitle/SectionTitleForm';
import { Button } from '../components/ui/Button';

export default function EditorPage() {
    const { widgets, selectedWidgetId, updateWidget, selectWidget } = useEditorStore();

    const selectedWidget = widgets.find((w) => w.id === selectedWidgetId);

    return (
        <div className="h-screen flex flex-col bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link
                            to="/"
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            title="Back to home"
                        >
                            <ArrowLeft className="w-5 h-5 text-gray-600" />
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">enterrr.me Editor</h1>
                            <p className="text-sm text-gray-500">Build your perfect link-in-bio page</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <Button variant="outline" size="md">
                            <Settings className="w-4 h-4 mr-2" />
                            Settings
                        </Button>
                        <Button variant="primary" size="md">
                            <Eye className="w-4 h-4 mr-2" />
                            Publish
                        </Button>
                    </div>
                </div>
            </header>

            {/* 3-Column Layout */}
            <div className="flex-1 flex overflow-hidden">
                {/* Left: Widget Palette */}
                <div className="w-64 bg-white border-r border-gray-200 flex-shrink-0 overflow-hidden">
                    <WidgetPalette />
                </div>

                {/* Middle: Canvas & Edit Form */}
                <div className="flex-1 flex overflow-hidden">
                    {/* Canvas */}
                    <div className="flex-1 overflow-y-auto p-6">
                        <CanvasArea />
                    </div>

                    {/* Edit Form Sidebar (when widget selected) */}
                    {selectedWidget && (
                        <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto flex-shrink-0">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold text-lg">Edit Widget</h3>
                                    <button
                                        onClick={() => selectWidget(null)}
                                        className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                                        title="Close"
                                    >
                                        ✕
                                    </button>
                                </div>

                                {selectedWidget.type === 'link-button' && (
                                    <LinkButtonForm
                                        widget={selectedWidget}
                                        onUpdate={(data) => updateWidget(selectedWidget.id, data)}
                                    />
                                )}
                                {selectedWidget.type === 'social-media' && (
                                    <SocialMediaForm
                                        widget={selectedWidget}
                                        onUpdate={(data) => updateWidget(selectedWidget.id, data)}
                                    />
                                )}
                                {selectedWidget.type === 'section-title' && (
                                    <SectionTitleForm
                                        widget={selectedWidget}
                                        onUpdate={(data) => updateWidget(selectedWidget.id, data)}
                                    />
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right: Preview Panel */}
                <div className="w-[450px] bg-gray-100 border-l border-gray-200 flex-shrink-0 overflow-hidden">
                    <PreviewPanel />
                </div>
            </div>
        </div>
    );
}
