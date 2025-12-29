import { useState, useEffect } from 'react';
import type { SocialMediaWidget, SocialPlatform } from '../../../lib/types';
import { Input } from '../../ui/Input';

interface Props {
    widget: SocialMediaWidget;
    onUpdate: (data: Partial<SocialMediaWidget['data']>) => void;
}

const PLATFORMS: { value: SocialPlatform; label: string }[] = [
    { value: 'twitter', label: 'Twitter / X' },
    { value: 'instagram', label: 'Instagram' },
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'github', label: 'GitHub' },
    { value: 'youtube', label: 'YouTube' },
    { value: 'tiktok', label: 'TikTok' },
    { value: 'facebook', label: 'Facebook' },
];

export function SocialMediaForm({ widget, onUpdate }: Props) {
    const [formData, setFormData] = useState(widget.data);

    useEffect(() => {
        setFormData(widget.data);
    }, [widget.data]);

    const handleChange = (field: keyof SocialMediaWidget['data'], value: any) => {
        const updated = { ...formData, [field]: value };
        setFormData(updated);
        onUpdate({ [field]: value });
    };

    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Platform
                </label>
                <select
                    value={formData.platform}
                    onChange={(e) => handleChange('platform', e.target.value as SocialPlatform)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                    {PLATFORMS.map((platform) => (
                        <option key={platform.value} value={platform.value}>
                            {platform.label}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <Input
                    label="Username / Handle"
                    value={formData.handle}
                    onChange={(e) => handleChange('handle', e.target.value)}
                    placeholder="@username or username"
                    helperText="Your username on this platform"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Display Style
                </label>
                <select
                    value={formData.displayStyle}
                    onChange={(e) => handleChange('displayStyle', e.target.value as any)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                    <option value="icon">Icon Only</option>
                    <option value="button">Button with Icon</option>
                    <option value="card">Card Style</option>
                </select>
            </div>
        </div>
    );
}
