import { ExternalLink } from 'lucide-react';
import type { LinkButtonWidget } from '../../../lib/types';
import { getBorderRadiusClass } from '../../../lib/utils';

interface Props {
    widget: LinkButtonWidget;
    onClick?: () => void;
}

export function LinkButtonPreview({ widget, onClick }: Props) {
    const handleClick = (e: React.MouseEvent) => {
        if (onClick) {
            e.preventDefault();
            onClick();
        }
    };

    return (
        <a
            href={widget.data.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className={`
        flex items-center justify-center gap-2 px-6 py-3 font-medium
        transition-transform hover:scale-105 active:scale-95
        ${getBorderRadiusClass(widget.data.borderRadius)}
      `}
            style={{
                backgroundColor: widget.data.backgroundColor,
                color: widget.data.textColor,
            }}
        >
            {widget.data.icon && <span>{widget.data.icon}</span>}
            <span>{widget.data.text}</span>
            <ExternalLink className="w-4 h-4" />
        </a>
    );
}
