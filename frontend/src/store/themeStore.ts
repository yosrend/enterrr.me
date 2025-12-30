import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ThemeStyle = 'bentolink' | 'bentome';

interface ThemeState {
    theme: ThemeStyle;
    setTheme: (theme: ThemeStyle) => void;
    toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
    persist(
        (set, get) => ({
            theme: 'bentome', // Default to new bento.me style

            setTheme: (theme: ThemeStyle) => {
                set({ theme });
                // Update document class for CSS theme switching
                document.documentElement.classList.remove('theme-bentolink', 'theme-bentome');
                document.documentElement.classList.add(`theme-${theme}`);
            },

            toggleTheme: () => {
                const current = get().theme;
                const next: ThemeStyle = current === 'bentolink' ? 'bentome' : 'bentolink';
                get().setTheme(next);
            },
        }),
        {
            name: 'enterrr-theme-storage',
            onRehydrateStorage: () => (state) => {
                // Apply theme class on page load
                if (state) {
                    document.documentElement.classList.add(`theme-${state.theme}`);
                }
            },
        }
    )
);

// Theme utility functions
export const getThemeClasses = (theme: ThemeStyle) => {
    const prefix = theme === 'bentome' ? 'bentome' : 'bentolink';
    return {
        grid: `${prefix}-grid`,
        card: `${prefix}-card`,
        avatar: `${prefix}-avatar`,
        size: (size: string) => `${prefix}-${size}`,
    };
};
