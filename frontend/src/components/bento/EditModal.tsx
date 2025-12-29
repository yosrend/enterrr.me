import { motion } from 'framer-motion';
import type { Widget } from '../../lib/types';
import { useEditorStore } from '../../store/editorStore';

interface EditModalProps {
    widget: Widget;
    onClose: () => void;
}

export function EditModal({ widget, onClose }: EditModalProps) {
    const updateWidget = useEditorStore((state) => state.updateWidget);

    const handleChange = (field: keyof Widget, value: string) => {
        updateWidget(widget.id, { [field]: value });
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-white/60 backdrop-blur-xl"
            />

            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative bg-white rounded-[40px] shadow-2xl border border-gray-100 w-full max-w-md p-10"
            >
                <h3 className="text-2xl font-black mb-8 tracking-tighter uppercase">Widget Options</h3>

                <div className="space-y-6">
                    <div>
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            className="w-full px-6 py-4 bg-gray-50 rounded-[20px] font-bold focus:ring-2 focus:ring-black outline-none transition-all"
                            defaultValue={widget.title}
                            onChange={(e) => handleChange('title', e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-2">
                            Description
                        </label>
                        <input
                            type="text"
                            className="w-full px-6 py-4 bg-gray-50 rounded-[20px] font-bold focus:ring-2 focus:ring-black outline-none transition-all"
                            defaultValue={widget.description}
                            onChange={(e) => handleChange('description', e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-2">
                            Content / URL
                        </label>
                        <input
                            type="text"
                            className="w-full px-6 py-4 bg-gray-50 rounded-[20px] font-bold focus:ring-2 focus:ring-black outline-none transition-all"
                            defaultValue={widget.content}
                            onChange={(e) => handleChange('content', e.target.value)}
                        />
                    </div>
                </div>

                <button
                    onClick={onClose}
                    className="w-full mt-10 py-5 bg-black text-white rounded-[24px] font-black tracking-widest uppercase text-xs active:scale-95 transition-all"
                >
                    Done
                </button>
            </motion.div>
        </div>
    );
}
