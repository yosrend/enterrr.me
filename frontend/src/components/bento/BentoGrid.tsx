import {
    DndContext,
    closestCenter,
    type DragEndEvent,
    PointerSensor,
    KeyboardSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    SortableContext,
    sortableKeyboardCoordinates,
    rectSortingStrategy,
    arrayMove,
} from '@dnd-kit/sortable';
import { AnimatePresence } from 'framer-motion';
import type { Widget } from '../../lib/types';
import { WidgetCard } from './WidgetCard';

interface BentoGridProps {
    widgets: Widget[];
    isEditor?: boolean;
    onReorder?: (widgets: Widget[]) => void;
    onDelete?: (id: string) => void;
    onEdit?: (id: string) => void;
    onSizeChange?: (id: string, size: Widget['size']) => void;
}

export function BentoGrid({
    widgets,
    isEditor,
    onReorder,
    onDelete,
    onEdit,
    onSizeChange,
}: BentoGridProps) {
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: { distance: 8 },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (over && active.id !== over.id) {
            const oldIndex = widgets.findIndex((w) => w.id === active.id);
            const newIndex = widgets.findIndex((w) => w.id === over.id);
            const newOrder = arrayMove(widgets, oldIndex, newIndex);
            onReorder?.(newOrder);
        }
    };

    if (!isEditor) {
        return (
            <div className="bento-grid">
                <AnimatePresence>
                    {widgets.map((widget) => (
                        <WidgetCard key={widget.id} widget={widget} />
                    ))}
                </AnimatePresence>
            </div>
        );
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={widgets.map((w) => w.id)}
                strategy={rectSortingStrategy}
            >
                <div className="bento-grid">
                    {widgets.map((widget) => (
                        <WidgetCard
                            key={widget.id}
                            widget={widget}
                            isEditor
                            onDelete={onDelete}
                            onEdit={onEdit}
                            onSizeChange={onSizeChange}
                        />
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    );
}
