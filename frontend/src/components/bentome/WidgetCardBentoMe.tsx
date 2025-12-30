import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { Widget, WidgetSize } from '../../lib/types';
import { WidgetType } from '../../lib/types';

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

// Size Icons for toolbar
const SizeIcon = ({ size, active }: { size: WidgetSize; active: boolean }) => {
    const baseClass = `border-2 rounded-[4px] transition-all ${active ? 'border-white bg-white/20' : 'border-white/40 hover:border-white'
        }`;
    switch (size) {
        case '1x1': return <div className={`${baseClass} w-3 h-3`} />;
        case '2x1': return <div className={`${baseClass} w-6 h-3`} />;
        case '1x2': return <div className={`${baseClass} w-3 h-6`} />;
        case '2x2': return <div className={`${baseClass} w-6 h-6`} />;
        case '4x1': return <div className={`${baseClass} w-10 h-3`} />;
        default: return null;
    }
};

interface WidgetCardBentoMeProps {
    widget: Widget;
    isEditor?: boolean;
    onDelete?: (id: string) => void;
    onEdit?: (id: string) => void;
    onSizeChange?: (id: string, size: WidgetSize) => void;
}

export function WidgetCardBentoMe({ widget, isEditor, onDelete, onEdit, onSizeChange }: WidgetCardBentoMeProps) {
    const [isHovered, setIsHovered] = useState(false);
    const sizes: WidgetSize[] = ['1x1', '2x1', '1x2', '2x2', '4x1'];

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

    const renderContent = () => {
        switch (widget.type) {
            case WidgetType.LINK:
                return (
                    <div className="bentome-link-widget group/link">
                        <div className="icon-wrapper">
                            <Icons.Link />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">{widget.title}</h3>
                            <p className="text-sm text-gray-400 mt-1">{widget.description || 'View Link'}</p>
                        </div>
                    </div>
                );

            case WidgetType.SOCIAL:
                return (
                    <div className="flex flex-col items-center justify-center h-full p-4 group/social">
                        <div className="w-14 h-14 bg-black text-white rounded-[20px] flex items-center justify-center transition-transform group-hover/social:scale-110">
                            <span className="font-black text-xl">{widget.title?.charAt(0)}</span>
                        </div>
                        <span className="mt-3 font-bold text-xs uppercase tracking-widest text-gray-400 group-hover/social:text-black">
                            {widget.title}
                        </span>
                    </div>
                );

            case WidgetType.TEXT:
                return (
                    <div className="bentome-text-widget">
                        <h3>{widget.title}</h3>
                        <p>{widget.content}</p>
                    </div>
                );

            case WidgetType.IMAGE:
                return (
                    <div className="bentome-image-widget">
                        {widget.content ? (
                            <img src={widget.content} alt={widget.title} />
                        ) : (
                            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                <span className="text-gray-400">No image</span>
                            </div>
                        )}
                        {widget.title && (
                            <span className="bentome-pill">{widget.title}</span>
                        )}
                    </div>
                );

            case WidgetType.SPOTIFY:
                return (
                    <div className="bentome-social-spotify h-full p-6 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.485 17.295c-.21.345-.66.45-1.005.24-2.82-1.725-6.375-2.115-10.56-1.155-.39.09-.78-.15-.87-.54-.09-.39.15-.78.54-.87 4.575-1.05 8.505-.6 11.655 1.32.345.21.45.66.24 1.005z" />
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
                            <div className="font-extrabold text-xl truncate">{widget.title || "Song Title"}</div>
                            <div className="text-sm font-bold opacity-80 truncate">{widget.description || "Artist"}</div>
                        </div>
                    </div>
                );

            case WidgetType.SECTION:
                return (
                    <div className="bentome-section h-full">
                        <span>{widget.title}</span>
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
            className={`bentome-${widget.size}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="bentome-card relative group h-full"
            >
                {isEditor && (
                    <>
                        {/* Drag Handle */}
                        <div
                            {...attributes}
                            {...listeners}
                            className="absolute top-4 left-4 p-2.5 bg-white border border-gray-100 rounded-xl shadow-sm cursor-grab active:cursor-grabbing opacity-0 group-hover:opacity-100 transition-opacity z-20"
                        >
                            <Icons.Drag />
                        </div>

                        {/* Action Buttons */}
                        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                            <button
                                onClick={() => onEdit?.(widget.id)}
                                className="p-2.5 bg-white border border-gray-100 rounded-xl shadow-sm hover:bg-gray-50 active:scale-90 transition-all"
                            >
                                <Icons.Edit />
                            </button>
                            <button
                                onClick={() => onDelete?.(widget.id)}
                                className="p-2.5 bg-white border border-gray-100 rounded-xl shadow-sm hover:bg-red-50 active:scale-90 transition-all text-red-500"
                            >
                                <Icons.Delete />
                            </button>
                        </div>

                        {/* Size Toolbar */}
                        <AnimatePresence>
                            {isHovered && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, x: '-50%' }}
                                    animate={{ opacity: 1, y: 0, x: '-50%' }}
                                    exit={{ opacity: 0, y: 10, x: '-50%' }}
                                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black px-4 h-12 rounded-2xl flex items-center gap-5 z-30 shadow-2xl"
                                >
                                    {sizes.map((s) => (
                                        <button
                                            key={s}
                                            onClick={() => onSizeChange?.(widget.id, s)}
                                            className="flex items-center justify-center transition-all"
                                        >
                                            <SizeIcon size={s} active={widget.size === s} />
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </>
                )}
                {renderContent()}
            </motion.div>
        </div>
    );
}
