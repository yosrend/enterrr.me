import { AnimatePresence } from 'framer-motion';
import { useEditorStore } from '../store/editorStore';
import { WidgetType } from '../lib/types';
import { Navbar } from '../components/layout/Navbar';
import { BentoMeGrid } from '../components/bentome/BentoMeGrid';
import { EditModal } from '../components/bento/EditModal';

// Icons
const PlusIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
);

export default function EditorPageBentoMe() {
    const {
        widgets,
        profile,
        editingWidgetId,
        addWidget,
        deleteWidget,
        resizeWidget,
        reorderWidgets,
        setEditingWidget,
        resetToDemo,
    } = useEditorStore();

    const editingWidget = widgets.find((w) => w.id === editingWidgetId);

    const widgetTypes = [
        { type: WidgetType.LINK, label: 'Link' },
        { type: WidgetType.IMAGE, label: 'Image' },
        { type: WidgetType.SOCIAL, label: 'Social' },
        { type: WidgetType.SPOTIFY, label: 'Spotify' },
        { type: WidgetType.SECTION, label: 'Section' },
        { type: WidgetType.TEXT, label: 'Text' },
    ];

    return (
        <>
            <Navbar user={profile} />

            {/* Ambient Glow */}
            <div className="ambient-glow" />

            <div className="theme-bentome min-h-screen pt-20 flex">
                {/* Left Sidebar - Widget Palette */}
                <aside className="w-72 fixed left-0 top-20 bottom-0 p-6 hidden lg:block overflow-y-auto border-r border-gray-100 bg-white/50 backdrop-blur-sm">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6">
                        Add Widgets
                    </h2>

                    <div className="space-y-2">
                        {widgetTypes.map(({ type, label }) => (
                            <button
                                key={type}
                                onClick={() => addWidget(type)}
                                className="w-full px-4 py-3 bg-white border border-gray-100 rounded-2xl text-sm font-semibold text-gray-900 text-left hover:border-gray-300 hover:shadow-md transition-all flex items-center justify-between group"
                            >
                                <span>{label}</span>
                                <span className="text-gray-300 group-hover:text-black transition-colors">
                                    <PlusIcon />
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                        <button
                            onClick={resetToDemo}
                            className="w-full px-4 py-3 bg-gray-50 rounded-2xl text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-all"
                        >
                            Load Demo
                        </button>
                    </div>

                    {/* Profile Preview */}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4">
                            Profile
                        </h2>
                        <div className="flex items-center gap-3">
                            <img
                                src={profile.avatar}
                                alt={profile.displayName}
                                className="w-12 h-12 rounded-xl object-cover"
                            />
                            <div>
                                <p className="font-semibold text-sm">{profile.displayName}</p>
                                <p className="text-xs text-gray-400">@{profile.username}</p>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 lg:ml-72 p-6 lg:p-12">
                    <div className="max-w-[900px] mx-auto">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h1 className="text-2xl font-black font-display tracking-tight">
                                    Edit Your Page
                                </h1>
                                <p className="text-gray-400 text-sm mt-1">
                                    Drag to reorder • Hover for options
                                </p>
                            </div>
                            <button className="px-6 py-2.5 bg-black text-white rounded-full font-bold text-sm hover:bg-gray-800 active:scale-95 transition-all shadow-lg">
                                Publish
                            </button>
                        </div>

                        {/* Bento Grid */}
                        {widgets.length === 0 ? (
                            <div className="bentome-card text-center py-20">
                                <h3 className="text-xl font-bold text-gray-400 mb-4">No widgets yet</h3>
                                <p className="text-gray-400 mb-6">Add widgets from the sidebar</p>
                                <button
                                    onClick={() => addWidget(WidgetType.TEXT)}
                                    className="px-6 py-2.5 bg-black text-white rounded-full font-bold text-sm"
                                >
                                    Add Your First Widget
                                </button>
                            </div>
                        ) : (
                            <BentoMeGrid
                                widgets={widgets}
                                isEditor
                                onReorder={reorderWidgets}
                                onDelete={deleteWidget}
                                onEdit={setEditingWidget}
                                onSizeChange={resizeWidget}
                            />
                        )}
                    </div>
                </main>
            </div>

            {/* Edit Modal */}
            <AnimatePresence>
                {editingWidget && (
                    <EditModal widget={editingWidget} onClose={() => setEditingWidget(null)} />
                )}
            </AnimatePresence>
        </>
    );
}
