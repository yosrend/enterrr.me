import type { SectionTitleWidget } from '../../../lib/types';
import { getFontSizeClass, getTextAlignClass } from '../../../lib/utils';

interface Props {
    widget: SectionTitleWidget;
}

export function SectionTitlePreview({ widget }: Props) {
    const { title, fontSize, alignment, showDivider } = widget.data;

    return (
        <div className={`w-full ${getTextAlignClass(alignment)}`}>
            <h3
                className={`font-bold text-gray-800 ${getFontSizeClass(fontSize)} ${alignment === 'left' ? 'text-lg' : fontSize === 'lg' ? 'text-2xl' : fontSize === 'md' ? 'text-xl' : 'text-base'
                    }`}
            >
                {title}
            </h3>
            {showDivider && (
                <hr className={`mt-2 border-t-2 border-gray-200 ${alignment === 'center' ? 'mx-auto w-24' : alignment === 'right' ? 'ml-auto w-24' : 'w-24'
                    }`} />
            )}
        </div>
    );
}
