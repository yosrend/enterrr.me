import { Icon } from '@iconify/react';
import type { SocialMediaWidget } from '../../../lib/types';
import { getSocialIcon, getSocialUrl } from '../../../lib/utils';

interface Props {
    widget: SocialMediaWidget;
    onClick?: () => void;
}

export function SocialMediaPreview({ widget, onClick }: Props) {
    const url = getSocialUrl(widget.data.platform, widget.data.handle);
    const iconName = getSocialIcon(widget.data.platform);

    const handleClick = (e: React.MouseEvent) => {
        if (onClick) {
            e.preventDefault();
            onClick();
        }
    };

    const { displayStyle } = widget.data;

    // Icon only style
    if (displayStyle === 'icon') {
        return (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                title={`${widget.data.platform}: ${widget.data.handle}`}
            >
                <Icon icon={iconName} className="w-6 h-6 text-gray-700" />
            </a>
        );
    }

    // Button style
    if (displayStyle === 'button') {
        return (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-all hover:scale-105"
            >
                <Icon icon={iconName} className="w-5 h-5 text-gray-700" />
                <span className="capitalize">{widget.data.platform}</span>
            </a>
        );
    }

    // Card style
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-all hover:scale-105"
        >
            <Icon icon={iconName} className="w-8 h-8 text-gray-700" />
            <div>
                <div className="font-medium capitalize">{widget.data.platform}</div>
                <div className="text-sm text-gray-600">{widget.data.handle}</div>
            </div>
        </a>
    );
}
