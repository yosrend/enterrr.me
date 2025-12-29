import { motion } from 'framer-motion';
import type { WidgetSize } from '../../lib/types';

interface SizeToolbarProps {
    currentSize: WidgetSize;
    onSizeChange: (size: WidgetSize) => void;
}

const sizes: WidgetSize[] = ['1x1', '2x1', '1x2', '2x2', '4x1'];

const SizeIcon = ({ size, active }: { size: WidgetSize; active: boolean }) => {
    const baseClass = `border-2 rounded-[4px] transition-all ${active ? 'border-white bg-white/20' : 'border-white/40 group-hover:border-white'
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

export function SizeToolbar({ currentSize, onSizeChange }: SizeToolbarProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 10, x: '-50%' }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black px-4 h-12 rounded-[16px] flex items-center gap-5 z-30 shadow-2xl shadow-black/20"
        >
            {sizes.map((s) => (
                <button
                    key={s}
                    onClick={() => onSizeChange(s)}
                    className="flex items-center justify-center group/size transition-all"
                >
                    <SizeIcon size={s} active={currentSize === s} />
                </button>
            ))}
        </motion.div>
    );
}
