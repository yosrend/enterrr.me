import { Icon } from '@iconify/react';
import { Trash2, GripVertical } from 'lucide-react';
import type { SocialMediaWidget as SocialMediaType } from '../../../lib/types';
import { cn, getSocialIcon } from '../../../lib/utils';

interface Props {
    widget: SocialMediaType;
    isSelected: boolean;
    onSelect: () => void;
    onDelete: () => void;
}

export function SocialMediaWidget({ widget, isSelected, onSelect, onDelete }: Props) {
    return (
        <div
            className={cn(
                'group relative flex items-center gap-3 rounded-lg border-2 p-4 cursor-pointer transition-all hover:border-primary-500',
                isSelected ? 'border-primary-500 bg-primary-50' : 'border-gray-200 bg-white'
            )}
            onClick={onSelect}
        >
            <GripVertical className="w-5 h-5 text-gray-400 cursor-grab active:cursor-grabbing" />

            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <Icon icon={getSocialIcon(widget.data.platform)} className="w-5 h-5 text-gray-700" />
                    <span className="font-medium capitalize">{widget.data.platform}</span>
                </div>
                <span className="text-sm text-gray-500 truncate block">{widget.data.handle}</span>
            </div>

            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete();
                }}
                className="opacity-0 group-hover:opacity-100 p-2 text-red-600 hover:bg-red-50 rounded transition-opacity flex-shrink-0"
                title="Delete widget"
            >
                <Trash2 className="w-4 h-4" />
            </button>
        </div>
    );
}
