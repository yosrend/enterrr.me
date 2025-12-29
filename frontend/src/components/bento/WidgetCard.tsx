import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { Widget, WidgetSize } from '../../lib/types';
import { WidgetType } from '../../lib/types';
import { SizeToolbar } from './SizeToolbar';

// Icons
const Icons = {
    Drag: () => (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
        </svg>
    ),
    Edit: () => (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
    ),
    Delete: () => (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
    ),
    Link: () => (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
    ),
};

interface WidgetCardProps {
    widget: Widget;
    isEditor?: boolean;
    onDelete?: (id: string) => void;
    onEdit?: (id: string) => void;
    onSizeChange?: (id: string, size: WidgetSize) => void;
}

export function WidgetCard({ widget, isEditor, onDelete, onEdit, onSizeChange }: WidgetCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: widget.id, disabled: !isEditor });

    const style = {
        transform: CSS.Translate.toString(transform),
        transition,
        zIndex: isDragging ? 50 : undefined,
        opacity: isDragging ? 0.6 : 1,
    };

    const getSizeClass = (size: WidgetSize) => {
        const classes: Record<WidgetSize, string> = {
            '1x1': 'col-span-1 row-span-1',
            '2x1': 'col-span-2 row-span-1',
            '1x2': 'col-span-1 row-span-2',
            '2x2': 'col-span-2 row-span-2',
            '4x1': 'col-span-4 row-span-1',
        };
        return classes[size];
    };

    const renderContent = () => {
        switch (widget.type) {
            case WidgetType.LINK:
                return (
                    <div className="flex flex-col h-full justify-between p-6 group/link">
                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center transition-colors group-hover/link:bg-black group-hover/link:text-white">
                            <Icons.Link />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 leading-tight text-lg">{widget.title}</h3>
                            <p className="text-sm text-gray-400 mt-1 line-clamp-1">{widget.description || 'View Link'}</p>
                        </div>
                    </div>
                );

            case WidgetType.SOCIAL:
                return (
                    <div className="flex flex-col items-center justify-center h-full p-4 group/social">
                        <div className="w-14 h-14 bg-black text-white rounded-[20px] flex items-center justify-center transition-transform group-hover/social:scale-110">
                            <span className="font-black text-xl">{widget.title?.charAt(0)}</span>
                        </div>
                        <span className="mt-3 font-bold text-xs uppercase tracking-widest text-gray-400 group-hover/social:text-black transition-colors">
                            {widget.title}
                        </span>
                    </div>
                );

            case WidgetType.TEXT:
                return (
                    <div className="p-8 h-full flex flex-col justify-center">
                        <h3 className="font-extrabold text-2xl mb-2 tracking-tight">{widget.title}</h3>
                        <p className="text-gray-500 font-medium leading-relaxed">{widget.content}</p>
                    </div>
                );

            case WidgetType.IMAGE:
                return (
                    <div className="relative h-full w-full overflow-hidden group/img">
                        {widget.content ? (
                            <img
                                src={widget.content}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                                alt={widget.title}
                            />
                        ) : (
                            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                                <span className="text-gray-400">No image</span>
                            </div>
                        )}
                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                            <h3 className="text-white font-bold">{widget.title}</h3>
                        </div>
                    </div>
                );

            case WidgetType.SPOTIFY:
                return (
                    <div className="h-full w-full bg-[#1ED760] p-6 flex flex-col justify-between text-white overflow-hidden group/spotify">
                        <div className="flex justify-between items-start">
                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.485 17.295c-.21.345-.66.45-1.005.24-2.82-1.725-6.375-2.115-10.56-1.155-.39.09-.78-.15-.87-.54-.09-.39.15-.78.54-.87 4.575-1.05 8.505-.6 11.655 1.32.345.21.45.66.24 1.005zm1.455-3.255c-.27.435-.825.57-1.26.3-.3.195-3.525-2.16-8.52-3.69-.51-.15-.81-.675-.66-1.185.15-.51.675-.81 1.185-.66 5.535 1.695 9.15 4.305 9.555 4.965.27.435.135.99-.3 1.26zm.135-3.405c-3.615-2.145-9.585-2.34-13.035-1.275-.555.165-1.125-.15-1.29-.705-.165-.555.15-1.125.705-1.29 4-1.215 10.59-1 14.73 1.455.495.3.66.945.36 1.44-.3.495-.945.66-1.47.36z" />
                                </svg>
                            </div>
                            <div className="flex space-x-1 items-end h-4">
                                {[1, 2, 3, 4].map(i => (
                                    <motion.div
                                        key={i}
                                        animate={{ height: [4, 12, 6, 12, 4] }}
                                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                                        className="w-1 bg-white rounded-full"
                                    />
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="font-extrabold text-xl leading-tight truncate">{widget.title || "Song Title"}</div>
                            <div className="text-sm font-bold opacity-80 truncate">{widget.description || "Artist Name"}</div>
                        </div>
                    </div>
                );

            case WidgetType.SECTION:
                return (
                    <div className="flex items-center h-full px-8">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">{widget.title}</h2>
                    </div>
                );

            default:
                return <div className="p-6 font-bold">{widget.title}</div>;
        }
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={getSizeClass(widget.size)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: isEditor ? -2 : -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="relative group h-full bg-white border border-gray-100 rounded-[32px] overflow-hidden transition-all duration-300 shadow-sm"
            >
                {isEditor && (
                    <>
                        {/* Drag Handle */}
                        <div
                            {...attributes}
                            {...listeners}
                            className="absolute top-4 left-4 p-2.5 bg-white border border-gray-100 rounded-2xl shadow-sm cursor-grab active:cursor-grabbing opacity-0 group-hover:opacity-100 transition-opacity z-20"
                        >
                            <Icons.Drag />
                        </div>

                        {/* Action Buttons */}
                        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                            <button
                                onClick={() => onEdit?.(widget.id)}
                                className="p-2.5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:bg-gray-50 active:scale-90 transition-all"
                            >
                                <Icons.Edit />
                            </button>
                            <button
                                onClick={() => onDelete?.(widget.id)}
                                className="p-2.5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:bg-red-50 active:scale-90 transition-all text-red-500"
                            >
                                <Icons.Delete />
                            </button>
                        </div>

                        {/* Size Toolbar */}
                        <AnimatePresence>
                            {isHovered && (
                                <SizeToolbar
                                    currentSize={widget.size}
                                    onSizeChange={(size) => onSizeChange?.(widget.id, size)}
                                />
                            )}
                        </AnimatePresence>
                    </>
                )}
                {renderContent()}
            </motion.div>
        </div>
    );
}
