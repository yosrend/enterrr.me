import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { Widget } from '../../lib/types';
import { useEditorStore } from '../../store/editorStore';
import { LinkButtonWidget } from '../widgets/LinkButton/LinkButtonWidget';
import { SocialMediaWidget } from '../widgets/SocialMedia/SocialMediaWidget';
import { SectionTitleWidget } from '../widgets/SectionTitle/SectionTitleWidget';

interface Props {
    widget: Widget;
}

export function SortableWidget({ widget }: Props) {
    const { selectedWidgetId, selectWidget, deleteWidget } = useEditorStore();

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: widget.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    const isSelected = selectedWidgetId === widget.id;

    // Pass drag listeners to the widget components
    const commonProps = {
        isSelected,
        onSelect: () => selectWidget(widget.id),
        onDelete: () => deleteWidget(widget.id),
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {widget.type === 'link-button' && (
                <LinkButtonWidget widget={widget} {...commonProps} />
            )}
            {widget.type === 'social-media' && (
                <SocialMediaWidget widget={widget} {...commonProps} />
            )}
            {widget.type === 'section-title' && (
                <SectionTitleWidget widget={widget} {...commonProps} />
            )}
        </div>
    );
}
