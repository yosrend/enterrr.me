import { useState } from 'react';
import { cn } from '../../lib/utils';

interface ColorPickerProps {
    value: string;
    onChange: (color: string) => void;
    label?: string;
}

const PRESET_COLORS = [
    '#3B82F6', // Blue
    '#10B981', // Green
    '#F59E0B', // Yellow
    '#EF4444', // Red
    '#8B5CF6', // Purple
];

export function ColorPicker({ value, onChange, label }: ColorPickerProps) {
    const [showCustom, setShowCustom] = useState(false);

    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    {label}
                </label>
            )}

            <div className="flex items-center gap-2">
                {/* Preset Colors */}
                {PRESET_COLORS.map((color) => (
                    <button
                        key={color}
                        type="button"
                        onClick={() => onChange(color)}
                        className={cn(
                            'w-10 h-10 rounded-lg border-2 transition-all',
                            value === color ? 'border-gray-900 scale-110' : 'border-gray-300'
                        )}
                        style={{ backgroundColor: color }}
                        title={color}
                    />
                ))}

                {/* Custom Color */}
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setShowCustom(!showCustom)}
                        className={cn(
                            'w-10 h-10 rounded-lg border-2 flex items-center justify-center transition-all',
                            showCustom ? 'border-gray-900' : 'border-gray-300'
                        )}
                        style={
                            !PRESET_COLORS.includes(value)
                                ? { backgroundColor: value }
                                : { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }
                        }
                        title="Custom color"
                    >
                        {!PRESET_COLORS.includes(value) && showCustom && (
                            <span className="text-xs font-bold text-white">✓</span>
                        )}
                    </button>

                    {showCustom && (
                        <div className="absolute top-12 right-0 z-10 p-3 bg-white rounded-lg border border-gray-200 shadow-lg">
                            <input
                                type="color"
                                value={value}
                                onChange={(e) => onChange(e.target.value)}
                                className="w-32 h-10 rounded cursor-pointer"
                            />
                            <div className="mt-2 text-xs text-gray-600 text-center font-mono">
                                {value.toUpperCase()}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
