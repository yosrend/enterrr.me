import { AnimatePresence } from 'framer-motion';
import { useEditorStore } from '../store/editorStore';
import { WidgetType } from '../lib/types';
import { Navbar } from '../components/layout/Navbar';
import { BentoGrid } from '../components/bento/BentoGrid';
import { EditModal } from '../components/bento/EditModal';

// Icons
const PlusIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
);

export default function EditorPage() {
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

            <div className="min-h-screen bg-[#f7f7f7] pt-20 flex">
                {/* Sidebar */}
                <aside className="w-80 h-full fixed left-0 top-20 p-8 hidden lg:block overflow-y-auto">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8">
                        Add Widgets
                    </h2>

                    <div className="grid grid-cols-1 gap-2.5">
                        {widgetTypes.map(({ type, label }) => (
                            <button
                                key={type}
                                onClick={() => addWidget(type)}
                                className="px-5 py-3.5 bg-white border border-gray-100 rounded-[20px] text-sm font-bold text-gray-900 text-left hover:border-black transition-all flex items-center justify-between group shadow-sm"
                            >
                                <span>{label}</span>
                                <span className="text-gray-300 group-hover:text-black">
                                    <PlusIcon />
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <button
                            onClick={resetToDemo}
                            className="w-full px-5 py-3.5 bg-gray-100 rounded-[20px] text-sm font-bold text-gray-600 hover:bg-gray-200 transition-all"
                        >
                            Load Demo
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 lg:ml-80 p-8 md:p-16">
                    <div className="max-w-[700px] mx-auto">
                        <div className="flex items-center justify-between mb-12">
                            <h1 className="text-3xl font-black font-display tracking-tighter uppercase">
                                Editing @{profile.username}
                            </h1>
                            <button className="px-8 py-3 bg-black text-white rounded-[18px] font-bold text-sm tracking-widest active:scale-95 transition-all shadow-xl shadow-black/10">
                                Publish
                            </button>
                        </div>

                        {/* Bento Grid Container */}
                        <div className="editor-container">
                            {widgets.length === 0 ? (
                                <div className="text-center py-20">
                                    <h3 className="text-xl font-bold text-gray-400 mb-4">No widgets yet</h3>
                                    <p className="text-gray-400 mb-6">Add widgets from the sidebar to get started</p>
                                    <button
                                        onClick={() => addWidget(WidgetType.TEXT)}
                                        className="px-8 py-3 bg-black text-white rounded-[18px] font-bold text-sm"
                                    >
                                        Add Your First Widget
                                    </button>
                                </div>
                            ) : (
                                <BentoGrid
                                    widgets={widgets}
                                    isEditor
                                    onReorder={reorderWidgets}
                                    onDelete={deleteWidget}
                                    onEdit={setEditingWidget}
                                    onSizeChange={resizeWidget}
                                />
                            )}
                        </div>
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
