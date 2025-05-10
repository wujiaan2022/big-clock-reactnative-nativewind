import { useState } from 'react';
import { useToggle } from './useToggle';

//move ThemeMode outside the hook to allow reuse in components or context types
export type ThemeMode = 'light' | 'medium' | 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeMode>('dark');

  const [showThemes, setShowThemes, toggleShowThemes] = useToggle();

  // Tailwind class mappings for each theme
  //   const themeClasses: Record<ThemeMode, { bg: string; text: string }> = {
  //     light: { bg: 'bg-yellow-100', text: 'text-red-800' },
  //     medium: { bg: 'bg-red-900', text: 'text-yellow-200' },
  //     dark: { bg: 'bg-black', text: 'text-yellow-200' },
  //   };

  const themeStyles = {
    light: { backgroundColor: '#FEF3C7', color: '#991B1B' }, // yellow-100 bg, red-800 text
    medium: { backgroundColor: '#5E1914', color: '#FEF3C7' }, //  yellow-300 text
    dark: { backgroundColor: '#000000', color: '#FEF3C7' }, // black bg, yellow-300 text
  };

  // return the current class as themeClass to make consuming easier
  const themeStyle = themeStyles[theme];

  // Select a specific theme and close the menu
  const selectTheme = (theme: ThemeMode) => {
    console.log('🌈 Switching to theme:', theme);
    setTheme(theme);
    setShowThemes(false);
  };

  return {
    theme,
    setTheme,
    showThemes,
    setShowThemes,
    toggleShowThemes,
    themeStyle,
    selectTheme,
  };
};
