import { useState } from 'react';
import { useToggle } from './useToggle';
import spaceBlue from '../../assets/space-blue.png';

// Define available themes
export type ThemeMode = 'light' | 'medium' | 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [showThemes, setShowThemes, toggleShowThemes] = useToggle();

  // For text & backgroundColor styles
  const themeStyles = {
    light: { backgroundColor: '#FEF3C7', color: '#991B1B' },
    medium: { backgroundColor: '#5E1914', color: '#FEF3C7' },
    dark: { backgroundColor: '#000000', color: '#FEF3C7' },
  };

  // 🌌 Image backgrounds (only dark uses it for now)
  const themeBackgroundImages = {
    dark: spaceBlue,
    light: null,
    medium: null,
  };

  const themeStyle = themeStyles[theme];
  const themeBackground = themeBackgroundImages[theme];

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
    themeBackground,
    selectTheme,
  };
};
