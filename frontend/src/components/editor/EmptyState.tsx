import { Sparkles } from 'lucide-react';
import { useEditorStore } from '../../store/editorStore';

export function EmptyState() {
    const addWidget = useEditorStore((state) => state.addWidget);

    return (
        <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center max-w-md">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                    <Sparkles className="w-8 h-8 text-primary-600" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Start Building Your Page
                </h3>

                <p className="text-gray-600 mb-6">
                    Add your first widget from the palette on the left to get started.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                        onClick={() => addWidget('link-button')}
                        className="px-6 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                    >
                        Add Link Button
                    </button>
                    <button
                        onClick={() => addWidget('social-media')}
                        className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                    >
                        Add Social Link
                    </button>
                </div>
            </div>
        </div>
    );
}
