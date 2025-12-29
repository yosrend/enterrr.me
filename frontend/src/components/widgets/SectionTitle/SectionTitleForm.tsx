import { useState, useEffect } from 'react';
import type { SectionTitleWidget } from '../../../lib/types';
import { Input } from '../../ui/Input';

interface Props {
    widget: SectionTitleWidget;
    onUpdate: (data: Partial<SectionTitleWidget['data']>) => void;
}

export function SectionTitleForm({ widget, onUpdate }: Props) {
    const [formData, setFormData] = useState(widget.data);

    useEffect(() => {
        setFormData(widget.data);
    }, [widget.data]);

    const handleChange = (field: keyof SectionTitleWidget['data'], value: any) => {
        const updated = { ...formData, [field]: value };
        setFormData(updated);
        onUpdate({ [field]: value });
    };

    return (
        <div className="space-y-4">
            <div>
                <Input
                    label="Title Text"
                    value={formData.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    placeholder="e.g., My Links or Social Media"
                    helperText="The section header text"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Font Size
                </label>
                <select
                    value={formData.fontSize}
                    onChange={(e) => handleChange('fontSize', e.target.value as any)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alignment
                </label>
                <select
                    value={formData.alignment}
                    onChange={(e) => handleChange('alignment', e.target.value as any)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                </select>
            </div>

            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    id="showDivider"
                    checked={formData.showDivider}
                    onChange={(e) => handleChange('showDivider', e.target.checked)}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="showDivider" className="text-sm font-medium text-gray-700">
                    Show divider line
                </label>
            </div>
        </div>
    );
}
