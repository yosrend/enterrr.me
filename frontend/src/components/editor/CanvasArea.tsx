import { useEditorStore } from '../../store/editorStore';
import { LinkButtonWidget } from '../widgets/LinkButton/LinkButtonWidget';
import { SocialMediaWidget } from '../widgets/SocialMedia/SocialMediaWidget';
import { SectionTitleWidget } from '../widgets/SectionTitle/SectionTitleWidget';
import { EmptyState } from './EmptyState';

export function CanvasArea() {
    const { widgets, selectedWidgetId, selectWidget, deleteWidget } = useEditorStore();

    if (widgets.length === 0) {
        return <EmptyState />;
    }

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                    Your Widgets ({widgets.length})
                </h2>
            </div>

            {widgets.map((widget) => {
                const isSelected = selectedWidgetId === widget.id;

                return (
                    <div key={widget.id}>
                        {widget.type === 'link-button' && (
                            <LinkButtonWidget
                                widget={widget}
                                isSelected={isSelected}
                                onSelect={() => selectWidget(widget.id)}
                                onDelete={() => deleteWidget(widget.id)}
                            />
                        )}
                        {widget.type === 'social-media' && (
                            <SocialMediaWidget
                                widget={widget}
                                isSelected={isSelected}
                                onSelect={() => selectWidget(widget.id)}
                                onDelete={() => deleteWidget(widget.id)}
                            />
                        )}
                        {widget.type === 'section-title' && (
                            <SectionTitleWidget
                                widget={widget}
                                isSelected={isSelected}
                                onSelect={() => selectWidget(widget.id)}
                                onDelete={() => deleteWidget(widget.id)}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
