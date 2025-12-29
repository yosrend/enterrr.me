import { DndContext, closestCenter, type DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useEditorStore } from '../../store/editorStore';
import { SortableWidget } from './SortableWidget';
import { EmptyState } from './EmptyState';

export function CanvasArea() {
    const { widgets, reorderWidgets } = useEditorStore();

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!over || active.id === over.id) return;

        const oldIndex = widgets.findIndex((w) => w.id === active.id);
        const newIndex = widgets.findIndex((w) => w.id === over.id);

        const newWidgets = [...widgets];
        const [movedWidget] = newWidgets.splice(oldIndex, 1);
        newWidgets.splice(newIndex, 0, movedWidget);

        reorderWidgets(newWidgets);
    };

    if (widgets.length === 0) {
        return <EmptyState />;
    }

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                    Your Widgets ({widgets.length})
                </h2>
                <p className="text-sm text-gray-500">Drag to reorder</p>
            </div>

            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={widgets.map((w) => w.id)} strategy={verticalListSortingStrategy}>
                    {widgets.map((widget) => (
                        <SortableWidget key={widget.id} widget={widget} />
                    ))}
                </SortableContext>
            </DndContext>
        </div>
    );
}
