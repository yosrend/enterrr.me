import { useState, useEffect } from 'react';
import type { LinkButtonWidget } from '../../../lib/types';
import { Input } from '../../ui/Input';
import { ColorPicker } from '../../ui/ColorPicker';

interface Props {
    widget: LinkButtonWidget;
    onUpdate: (data: Partial<LinkButtonWidget['data']>) => void;
}

export function LinkButtonForm({ widget, onUpdate }: Props) {
    const [formData, setFormData] = useState(widget.data);

    // Sync with widget data when it changes from outside
    useEffect(() => {
        setFormData(widget.data);
    }, [widget.data]);

    const handleChange = (field: keyof LinkButtonWidget['data'], value: any) => {
        const updated = { ...formData, [field]: value };
        setFormData(updated);
        onUpdate({ [field]: value });
    };

    return (
        <div className="space-y-4">
            <div>
                <Input
                    label="Button Text"
                    value={formData.text}
                    onChange={(e) => handleChange('text', e.target.value)}
                    placeholder="e.g., Visit My Website"
                    helperText="The text shown on the button"
                />
            </div>

            <div>
                <Input
                    label="URL"
                    value={formData.url}
                    onChange={(e) => handleChange('url', e.target.value)}
                    placeholder="https://example.com"
                    type="url"
                    helperText="Where the button should link to"
                />
            </div>

            <ColorPicker
                label="Background Color"
                value={formData.backgroundColor}
                onChange={(color) => handleChange('backgroundColor', color)}
            />

            <ColorPicker
                label="Text Color"
                value={formData.textColor}
                onChange={(color) => handleChange('textColor', color)}
            />

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Border Radius
                </label>
                <select
                    value={formData.borderRadius}
                    onChange={(e) => handleChange('borderRadius', e.target.value as any)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                    <option value="none">None (Square)</option>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                    <option value="full">Full (Pill)</option>
                </select>
            </div>
        </div>
    );
}
